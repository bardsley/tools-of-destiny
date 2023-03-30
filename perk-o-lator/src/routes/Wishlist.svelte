<script>
    import { afterUpdate } from 'svelte';
    import { addToGit } from '../stores/git';


    export let selectedPerks = [];
    export let itemID = 0;
    export let itemName = ''
    export let wishes = []

    let indices = new Array(selectedPerks.length).fill(0);

    $: selectedPerks.forEach((col, index) => {
        // console.log(col,index)
        indices[index] = col.length - 1
    })
    $: empty = selectedPerks.some((col)=>{return col.length < 1})

    function endOfTheLine(indices) {
        return indices.every((item) => { return item<1})
    }

    let textVersion = []
    
    let createDimWish = (itemID,selector) => {
        return `dimwishlist:item=${itemID}&perks=${selectedPerks[0][selector[0]]},${selectedPerks[1][selector[1]]},${selectedPerks[2][selector[2]]},${selectedPerks[3][selector[3]]}`
    }

    let copyRoles = () => {
        let wishWall = document.getElementById("wish-wall");
        wishWall.select();
        wishWall.setSelectionRange(0, 99999); // For mobile devices
        navigator.clipboard.writeText(wishWall.value);
    }

    afterUpdate(() => {
        wishes = []
        console.log("Updated Wishlist\n----------------");
        
        wishlistStateDebug("Start")
        if(empty) {
            console.log("Not enough options")
        } else {
            while(!endOfTheLine(indices) && safety < 100) {
                
                wishlistStateDebug("Beginning of Iteration")
                wishes = [...wishes, createDimWish(itemID,indices)];
                
                if(indices[0]>0) { indices[0] -= 1; }
                else {
                    indices[0] = selectedPerks[0].length-1
                    if(indices[1]>0) { indices[1] -= 1; }
                    else { 
                        indices[1] = selectedPerks[1].length-1
                        if(indices[2]>0) { indices[2] -= 1; }
                        else { 
                            indices[2] = selectedPerks[2].length-1
                            if(indices[3]>0) { indices[3] -= 1; }
                            else { 
                                indices[3] = selectedPerks[3].length-1
                            }
                        }
                    }
                }

                safety += 1
                wishlistStateDebug("After Iteration")
            }
            wishlistStateDebug("Final")
            wishes = [...wishes, createDimWish(itemID,indices)];
            textVersion = [`// ${itemName}`, '// - perks from perk-o-lator https://destiny.tools/perk-o-lator', ...wishes ]
            addToGit('1234',itemID,itemName,wishes.join("\n"))
        }
        
        safety = 0
    });

    let safety = 0

    let wishlistStateDebug = (stage) => {
        console.debug("----",stage,"----", "\nDone?", endOfTheLine(indices),"\nIndices",indices, "Perks",selectedPerks)
    }
</script>

<!-- <div>{empty} / {indices}  </div> -->
<h3>Generated {wishes.length} Perk Combos for DIM <button on:click={copyRoles} on:touch={copyRoles}>Copy to Clipboard</button>
</h3>
<textarea id="wish-wall" style="height:{Math.min((textVersion.length*1.125),20)}em;">
{textVersion.join("\n")}
</textarea><br/>


<!-- {#if !empty}
    <p>{selectedPerks}</p>
{/if} -->

<style>
    textarea { width: 56em; padding: 0.5em; opacity: 0.3}
    textarea:focus { opacity:1; }
    h3{ margin-top: 0;}
    button {
        border: solid 1px #fff; border-radius: 3px; background-color: #333; color: #eee; padding: 0.3em 1em;
    }
    button:active {
        border: solid 1px #fff; border-radius: 3px; background-color: #111; color: #fff; padding: 0.3em 1em;
    }
</style>