<script>
    import { afterUpdate } from 'svelte';
    export let selectedPerks = [];
    export let itemID = 0;
    export let itemName = ''

    let indices = new Array(selectedPerks.length).fill(0);

    $: selectedPerks.forEach((col, index) => {
        console.log(col,index)
        indices[index] = col.length - 1
    })
    $: empty = selectedPerks.some((col)=>{return col.length < 1})

    function endOfTheLine(indices) {
        return indices.every((item) => { return item<1})
    }

    let wishes = []    
    
    let createDimWish = (itemID,selector) => {
        return `dimwishlist:item=${itemID}&perks=${selectedPerks[0][selector[0]]},${selectedPerks[1][selector[1]]},${selectedPerks[2][selector[2]]},${selectedPerks[3][selector[3]]}`
    }

    let copyRoles = () => {
        let wishWall = document.getElementById("wish-wall");

        // Select the text field
        wishWall.select();
        wishWall.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(wishWall.value);

        // Alert the copied text
        alert("Copied the text: " + copyText.value);
        }

    afterUpdate(() => {
        wishes = []
        console.log('Updated Wishlist');
        console.log(!endOfTheLine(indices),safety)
        console.log("Start State", endOfTheLine(indices),indices)
        if(empty) {
            console.log("Not enough options")
        } else {
            while(!endOfTheLine(indices) && safety < 1000) {
                
                console.log(indices)
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
                console.log("After maths",endOfTheLine(indices),indices)
            }
            console.log("FInal State", endOfTheLine(indices),indices)
            wishes = [...wishes, createDimWish(itemID,indices)];
        }
        
        safety = 0
    });

    let safety = 0
    // while(safety< 100) {
        
    //     indices.forEach((i,col)=>{
    //         console.log(i, col,"test",safety)
    //         if(selectedPerks[col].length > i ) {
    //             indices[col] += 1;
    //         }
                
    //     }) 
    //     safety += 1
    // }


    // let wishs = perks.map((column)=>{
    //     column.
    // })
</script>

<div>{empty} / {indices}  </div>
<textarea id="wish-wall">
// {itemName} - perks from perk-o-lator https://destiny.tools
{wishes.join("\n")}
</textarea><br/>

<button on:click={copyRoles}>Copy to Clipboard</button>

<!-- {#if !empty}
    <p>{selectedPerks}</p>
{/if} -->

<style>
    textarea { width: 42em; padding: 0.5em;}
</style>