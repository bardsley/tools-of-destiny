<script>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    /** @type {import('./$types').LayoutData} */
    export let data;
    // Create a store and update it when necessary...
    const manifest = writable();
    $: manifest.set(data.manifest)
    // ...and add it to the context for child components to access
    setContext('manifest', manifest);

</script>

<slot />
