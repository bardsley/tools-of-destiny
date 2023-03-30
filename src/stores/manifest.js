import { writable } from 'svelte/store'
import { browser } from '$app/environment';
import { db } from "../db/db";

let storedApiVersion = false
let storedApiPaths = false
let storedApiItemDefinitions = false
let storedApiPlugsets = false

const loadManifest = async () => {
    console.log("Loading Manifest");
    const apiResponse = await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/');
    const jsonApiResponse = await apiResponse.json();
    storedApiVersion = jsonApiResponse.Response.version
    storedApiPaths = jsonApiResponse.Response.jsonWorldComponentContentPaths.en
}

const loadFromPath = async (itemPath) => {
    const url = 'https://www.bungie.net' + itemPath
    console.debug("Loading\n", url);
    const response = await fetch(url);
    console.debug("Parsing\n",response);
    const things = await response.json();
    console.debug("Values\n",things);
    return things
}

const loadItemDefinitions = async (itemPath) => {
    storedApiItemDefinitions = await loadFromPath(itemPath)
}

const loadPlugsets = async (itemPath) => {
    storedApiPlugsets = await loadFromPath(itemPath)
}

if (browser) { 
    console.log("Load LocalStorage Values")
    storedApiVersion = localStorage.getItem('api-version');
    storedApiPaths = JSON.parse(localStorage.getItem('api-paths'));
    if(!storedApiVersion || !storedApiPaths) { await loadManifest() }
    storedApiItemDefinitions = await db.items.get(storedApiVersion);
    if(!storedApiItemDefinitions) { await loadItemDefinitions(storedApiPaths.DestinyInventoryItemDefinition) }
    storedApiPlugsets = await db.plugsets.get(storedApiVersion);
    if(!storedApiPlugsets) { await loadPlugsets(storedApiPaths.DestinyPlugSetDefinition) }
} 

// Set the stored value or a sane default.
export const apiVersion = writable(storedApiVersion || false)
export const apiPaths = writable(storedApiPaths || false)
export const apiItemDefinitions = writable(storedApiItemDefinitions || false)
export const apiPlugsets = writable(storedApiPlugsets || false)

if(browser) {
    // Anytime the store changes, update the local storage value.
    apiVersion.subscribe((value) => { localStorage.setItem('api-version', value) })
    apiPaths.subscribe((value) => { localStorage.setItem('api-paths', JSON.stringify(value)) })
    apiItemDefinitions.subscribe(async (value) => { if(value) { const id = await db.items.put(value,storedApiVersion); }})
    apiPlugsets.subscribe(async (value) => { if(value) { const id = await db.plugsets.put(value,storedApiVersion); }})
}