<script>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { apiVersion, apiItemDefinitions } from '../stores/manifest';

    // /** @type {import('./$types').LayoutData} */
    // export let data;
    // // Create a store and update it when necessary...
    // const manifest = writable();
    // $: manifest.set(data.manifest)
    // // ...and add it to the context for child components to access
    // setContext('manifest', manifest);
</script>

<nav>
    <h1>Perk-o-later</h1>
    <p>Using D2 APi version {$apiVersion} containing {Object.keys($apiItemDefinitions).length} items</p>
</nav>

<slot />

<style>
    h1 { font-size: 2.5em;}
    * { color: #fff;}
    nav {
        background: #0e0f12; margin:0;
        padding:2em;
    }
    nav * { margin:0; }
</style>