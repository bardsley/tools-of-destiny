<script>
    import { afterUpdate } from 'svelte';
    import { Octokit } from "@octokit/core";

    let debug = []
    const octokit = new Octokit({auth: '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'});
    
    afterUpdate(async () => {
        console.log("Yay")

        let existingFile = false
        let filePath = 'example.txt'
        try {
            existingFile = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
                owner: 'bardsley',
                repo: 'wishwall',
                path: filePath,
                headers: {}
            })
        } 
        catch { console.log('error'); } 
        finally {
            console.log(existingFile?.data)            
        }     

        let existingData = atob(existingFile?.data?.content)
        let rightNow = new Date()
        let stringToAdd = rightNow.toString()
        let newString = existingData + "\nUpdated: " + stringToAdd

        
        let fileContents = {
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
        if(existingFile) { fileContents = {...fileContents, sha: existingFile?.data?.sha} }
        console.log(fileContents)
        const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', fileContents)
        console.log(response)
    })

</script>

<div class="git">
    <h1>Hi</h1>
    <!-- <pre>{JSON.stringify(debug,null,4)}</pre> -->

</div>


<style>
    .git {
        padding: 0 2em;
        color: #fff;
    }
</style>