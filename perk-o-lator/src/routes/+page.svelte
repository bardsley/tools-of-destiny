<script>
    import { getContext } from 'svelte';
    import { writable } from 'svelte/store';
    import Wishlist from './Wishlist.svelte';
    import { apiVersion, apiItemDefinitions, apiPlugsets} from '../stores/manifest';

    const perks = writable([[],[],[],[]]);
    const itemID = '3110377595' //Object.keys($apiItemDefinitions)['3110377595']
    const name = $apiItemDefinitions[itemID]?.displayProperties?.name
    const plugSetIds = [1,2,3,4].map((index) => $apiItemDefinitions[itemID]?.sockets.socketEntries[index].randomizedPlugSetHash ).filter((i) => i > 0)
    const plugSets = plugSetIds.map((plugsetId) => $apiPlugsets[plugsetId].reusablePlugItems.map((item) => item.plugItemHash ))

    const simplePlugs = plugSets.map(function(itemIDs) { 
        return itemIDs.map(function(itemID) {
            return {
                id: itemID,
                name: $apiItemDefinitions[itemID]?.displayProperties?.name,
                icon: $apiItemDefinitions[itemID]?.displayProperties?.iconSequences[1]?.frames[0]
            }
        })
    });

    const toggleValue = (anArray, aValue) => {
        // console.log(anArray,aValue)
        return anArray.includes(aValue) ? anArray.filter((item) => {return item != aValue}) : [...anArray, aValue]
    }

    function togglePerk(event) {
        let perkId = event.target.dataset.perkid
        let colId = event.target.dataset.colid
        // console.log(perkId,colId)
        event.target.classList.toggle("selected")
        $perks[colId] = toggleValue($perks[colId],event.target.dataset.perkid)
    }

</script>

<div class="item" style="background-image: url('https://www.bungie.net{$apiItemDefinitions[itemID]?.screenshot}');">
    <h1>{name}</h1>
    <div class="columns">
        <div class="selector">
            <div class="perks">
            {#each simplePlugs as Plugs, i}
                <div class="perkCol">
                {#each Plugs as Plug}
                    <a on:click|preventDefault={togglePerk} on:touch|preventDefault={togglePerk} data-perkId="{Plug.id}" data-colId="{i}" class="perk" style="background-image: url('https://www.bungie.net{Plug.icon}')"></a>
                {/each}
                </div>
            {/each}
            </div>
        </div>
        <div class="cut-n-paste">
            <Wishlist selectedPerks={$perks} itemID={itemID} itemName={name}></Wishlist>   
        </div>
    </div>
    <!-- <pre>{JSON.stringify(plugSets,null,2)}</pre> -->
</div>

<style>
        
    .item {
        background-size: contain; background-repeat: no-repeat; background-position: 50%;
        background-size: cover;
        background-color: #37383d; color: #fff;
        padding:1em 2em;
    }
    .perks{
        display: flex; gap: 5px;
    }
    :global(.perk) { 
        width:40px; height: 40px; 
        display: block; background-repeat: no-repeat; background-size: contain;
        background-color: rgba(25, 25, 31, 0.103); margin-bottom: 7px; border-radius: 4px;
        border: solid 1px rgba(0,0,0,0);
    }
    :global(.perk.selected) {
        background-color: rgb(33, 33, 46); border: solid 1px #fff;
        -webkit-filter: invert(100%);
    }
    .columns {
        display: flex; gap: 30px;
    }
</style>