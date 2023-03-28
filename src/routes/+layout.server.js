// import * as db from '$lib/server/database';
 
/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  console.log("loading Manifest");
  const apiResponse = await fetch('https://www.bungie.net/Platform/Destiny2/Manifest/');
  const jsonApiResponse = await apiResponse.json();
  const manifestVersion = jsonApiResponse.Response.version
  const manifestPaths = jsonApiResponse.Response.jsonWorldComponentContentPaths.en
  
  const ItemsURL = 'https://www.bungie.net/' + manifestPaths.DestinyInventoryItemDefinition
  const ItemResponse = await fetch(ItemsURL);
  const jsonItems = await ItemResponse.json();
  console.log("Loading ", ItemsURL);

  const plugsetURL = 'https://www.bungie.net/' + manifestPaths.DestinyPlugSetDefinition
  const plugsetResponse = await fetch(plugsetURL);
  const jsonPlugset = await plugsetResponse.json();
  console.log("Loading ", plugsetURL);
  
  return {
    manifest: {
        version: manifestVersion,
        paths: manifestPaths,
        items: jsonItems,
        plugsets: jsonPlugset
    }
  };
}