<script>
    import { getContext } from 'svelte';
    import { writable } from 'svelte/store';
    import Wishlist from './Wishlist.svelte';
    import { apiVersion } from '../stores/manifest';

    // Retrieve manifest store from context
    const manifest = getContext('manifest');
    const perks = writable([[],[],[],[]]);
   

    const itemID = '3110377595' //Object.keys($manifest.items)['3110377595']
    const name = $manifest.items[itemID]?.displayProperties?.name
    const plugSets = [
        $manifest.plugsets[$manifest.items[itemID].sockets.socketEntries[1].randomizedPlugSetHash].reusablePlugItems.map(function(item) {return item.plugItemHash}),
        $manifest.plugsets[$manifest.items[itemID].sockets.socketEntries[2].randomizedPlugSetHash].reusablePlugItems.map(function(item) {return item.plugItemHash}),
        $manifest.plugsets[$manifest.items[itemID].sockets.socketEntries[3].randomizedPlugSetHash].reusablePlugItems.map(function(item) {return item.plugItemHash}),
        $manifest.plugsets[$manifest.items[itemID].sockets.socketEntries[4].randomizedPlugSetHash].reusablePlugItems.map(function(item) {return item.plugItemHash}),
    ]

    const simplePlugs = plugSets.map(function(itemIDs) { 
        return itemIDs.map(function(itemID) {
            return {
                id: itemID,
                name: $manifest.items[itemID]?.displayProperties?.name,
                icon: $manifest.items[itemID]?.displayProperties?.iconSequences[1]?.frames[0]
            }
        })
    });
    const debugValue = simplePlugs
    const debug = JSON.stringify(debugValue, null, 4)

    

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

<nav>
    <h1>Perk-o-later</h1>
    <p>Using D2 APi version {$manifest.version} {apiVersion} containing {Object.keys($manifest.items).length} items</p>
</nav>
<div class="item" style="background-image: url('https://www.bungie.net{$manifest.items[itemID]?.screenshot}');">
    <h2>{name} <span>{itemID}</span></h2>
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
    
    Selected {JSON.stringify($perks,null,4)}
    <pre>
        {JSON.stringify($perks,null,4)}
<!-- ItemID: {itemID} 
PlugSets: {JSON.stringify(plugSets,null, 4)}
Debug: {debug} -->
    </pre>
</div>

<style>
    
    .item {
        background-size: contain; background-repeat: no-repeat;
        background-color: #0e0f12;
        padding:1em 2em;
    }
    .perks{
        display: flex; gap: 5px;
    }
    :global(.perk) { 
        width:40px; height: 40px; 
        display: block; background-repeat: no-repeat;
        background-color: rgba(25, 25, 31, 0.103); margin-bottom: 7px; border-radius: 4px;
        border: solid 1px rgba(0,0,0,0);
    }
    :global(.perk.selected) {
        background-color: rgb(33, 33, 46); border: solid 1px #fff;
        -webkit-filter: invert(100%);
    }
    .columns {
        display: flex;
    }
</style>