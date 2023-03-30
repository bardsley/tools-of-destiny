import { afterUpdate } from 'svelte';
import { Octokit } from "@octokit/core";
import { browser } from '$app/environment';

let personalAccessToken
let octokit

if(browser) {
    console.log("Load creds")
    personalAccessToken = localStorage.getItem('github-pat');
    if(personalAccessToken) {
        octokit = new Octokit({
            auth: personalAccessToken
        });
    }
}

export const addToGit = async (userID,blockID,blockName,dataString) => {
    if(typeof personalAccessToken == 'undefined' || typeof octokit == 'undefined') { return false; }

    let existingFile = {data: { content: '' }}
    let filePath = `${userID}.txt`;

    try {
        existingFile = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'bardsley',
            repo: 'wishwall',
            path: filePath,
            headers: {}
        })
    } 
    catch { console.log('File does not exist', filePath); } 
    finally {
        console.log(existingFile?.data)            
    }   

    let existingData = atob(existingFile?.data?.content)
    
    // Remove existing blocks
    let idRegEx = new RegExp(`(\/\/${blockID}start)([\\s\\S.]*?)(\/\/${blockID}end)\n\n`,'gm')
    existingData = existingData.replace(idRegEx,'')
    // Cleanup multi new lines
    existingData = existingData.replace(/[\n\r]{3,}/gm,"\n\n")

    let newString = existingData +  `//${blockID}start\n// ${blockName}\n` + dataString + `\n//${blockID}end\n\n`

    let updateFile = {
        owner: 'bardsley',
        repo: 'wishwall',
        path: filePath,
        message: 'Commit from the JSss',
        committer: {
            name: 'perk-o-lator',
            email: 'riven@destiny.tools'
        },
        content: btoa(newString),
        headers: {}
    }
    if(existingFile?.data?.sha) { updateFile = {...updateFile, sha: existingFile?.data?.sha} }

    console.log(updateFile)
    const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', updateFile)
    console.log(response)
}