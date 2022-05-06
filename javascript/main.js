var apps = [
        {   "name": "Braytech",                 "url": "https://bray.tech",
            "description": "", "tags": [ "maps","bounties","quests","vendors","triumphs","collections","weeklies","stats","lore" ]
        },{ "name": "Destiny recipes",          "url": "https://destinyrecipes.com",
            "description": "","tags":  [ "item-mgt","vault","weeklies","weapons","armor","godrolls","power","prep" ]
        },{ "name": "DIM",                      "url": "https://app.destinyitemmanager.com",
            "description": "", "tags": [ "item-mgt","vault","loadouts","weapons","armor","godrolls","power"]
        },{ "name": "D2 Checklist",             "url": "https://www.d2checklist.com",
            "description": "", "tags": [ "bounties","quests","vendors","triumphs","collections","weeklies","power","prep" ]
        },{ "name": "Shattered Vault",          "url": "https://shatteredvault.com",
            "description": "", "tags": [ "guides","lore","weeklies" ]
        },{ "name": "Xur",                      "url": "https://wherexur.com",
            "description": "", "tags": [ "vendors","weapons","armor","stats" ]
        },{ "name": "Light.gg",                         "url": "https://www.light.gg",
            "description": "", "tags": [ "item-mgt","vault","weapons","armor","godrolls"]
        },{ "name": "Destiny tracker",                         "url": "https://destinytracker.com",
            "description": "", "tags": [ "stats","pvp","pve"]
        },{ "name": "D2 Gunsmith",                         "url": "https://d2gunsmith.com",
            "description": "", "tags": [ "weapons","godrolls" ]
        },{ "name": "Destiny Sets",             "url": "https://destinysets.com/",
            "description": "", "tags": [ "weapons","armor","stats" ]
        },{ "name": "Guardian Forge",           "url": "https://guardianforge.net/",
            "description": "", "tags": [ "loadouts","weapons","armor" ]
        },{ "name": "Trials Report",            "url": "https://trials.report/",
            "description": "", "tags": [ "stats","pvp" ]
        },{ "name": "Guardian Report",          "url": "https://guardian.report/",
            "description": "", "tags": [ "stats","pve" ]
        },{ "name": "Raid Report",              "url": "https://raid.report/",
            "description": "", "tags": ["stats","raid" ]
        },{ "name": "Wasted on Destiny",        "url": "https://wastedondestiny.com/",
            "description": "", "tags": [ "stats"]
        },{ "name": "Where is Xur?",            "url": "https://whereisxur.com/",
            "description": "", "tags": [ "vendors","weapons","armor" ]
        },{ "name": "Destiny Heat Map",         "url": "https://chrisfried.github.io/secret-scrublandeux/",
            "description": "", "tags": [ "stats" ]
        },{ "name": "Guardian Theatre",         "url": "https://alpha.guardian.theater/",
            "description": "", "tags": [ "stats"]
        },{ "name": "Emblem Collector", "url": "https://destinyemblemcollector.com/",
            "description": "", "tags": [ "collections" ]
        },{ "name": "Today in Destiny",         "url": "https://www.todayindestiny.com/",
            "description": "", "tags": [ "bounties","quests","vendors","collections","weeklies" ]
        },{ "name": "Previously on Destiny",    "url": "https://www.previouslyondestiny.com/",
            "description": "", "tags": [ "lore" ]
        },{ "name": "Destiny K/D",              "url": "https://www.destinykd.com/",
            "description": "", "tags": [ "pvp","trials"]
        },{ "name": "Blueberries.gg",                         "url": "https://www.blueberries.gg/",
            "description": "", "tags": [ "guides", "weapons", "armor" ]
        },{ "name": "D2 Armor Picker",                         "url": "https://d2armorpicker.com/#/",
            "description": "", "tags": [ "loadouts", "armor" ]
        },{ "name": "Nightfall Report",                         "url": "https://nightfall.report",
            "description": "", "tags": [ "stats","pve" ]
        },{ "name": "Bungie Twitter",           "url": "https://twitter.com/BungieHelp",
            "description": "", "tags": [ "stats" ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        },{ "name": "",                         "url": "",
            "description": "", "tags": [ ]
        }  
    ];
    apps.sort((a,b) => { 
        return a.name.localeCompare(b.name) 
    })

    var tagCloud =  {}
    apps.forEach(app=>{
        app.tags.forEach(tag=>{
            tagCloud[tag] = tagCloud[tag] ?  tagCloud[tag] +1 : 1
        })
    })
    var tags = Object.keys(tagCloud)
    tags.unshift('all')
    tags.sort()

    var element = document.createElement('style'), sheet;
    document.head.appendChild(element);
    sheet = element.sheet;
    tags.forEach((tag,index)=>{
        var cardStyle = `main.${tag} #apps .card.${tag} { display:flex; opacity: 1; } `;
        var tagStyle  = `main.${tag} #apps .tags .tag.${tag} { background: #05A895; } `
        var controlStyle  = `main.${tag} #controls .tag.${tag} { background: #05A895; color: #fff; } `
        sheet.insertRule(cardStyle,index);
        sheet.insertRule(tagStyle,index);
        sheet.insertRule(controlStyle,index);

    })
    
    var graphics = [
        { "name": "GM Champs Basic", "url": "images/champs-basic.png" },
        { "name": "GM Champs Detailed", "url": "images/champs-gmnf.png" },
        { "name": "Vow - 1st Encounter", "url": "images/vow-1.png" },
        { "name": "Vow - 3rd Encounter", "url": "images/vow-3.jpg" },
        { "name": "Vow - Final Encounter", "url": "images/vow-4.jpg" },
        { "name": "Vow - Symbols", "url": "images/vow-symbols.webp" },
    ]

    document.addEventListener('DOMContentLoaded',event => {

        var controlSpace = document.getElementById('controls')
        var mainSpace = document.querySelector('main')
        var appSpace = document.getElementById('apps')
        var appTemplate = document.getElementById('app-card');
        var graphicSpace = document.getElementById('graphics')
        var graphicTemplate = document.getElementById('graphic-card');

        tags.forEach((tag,index)=>{
            var control = document.createElement('a')
            control.href = "javascript:void(0);"
            control.className = `tag ${tag}`
            control.innerText = tag
            control.dataset.tag = tag
            if(index==10) { 
                var breakElm = document.createElement('span')
                breakElm.classList.add("break")
                controlSpace.append(breakElm)
            }
            // if(index==6 || index==14 || index==21) { 
            //     var breakElm = document.createElement('span')
            //     if(index==14) { breakElm.classList.add("break") }
            //     else { breakElm.classList.add("break-tiny") }
            //     controlSpace.append(breakElm)
            // }
            controlSpace.append(control)
        })

        
        apps.forEach(app => {
            if(app.name && app.url) {
                var clone = appTemplate.content.firstElementChild.cloneNode(true);
                clone.className = clone.className + " " + app.tags.join(' ')
                clone.querySelector(".title").innerText = app.name
                if(app.description) { clone.querySelector(".desc").innerText = app.description } else { clone.querySelector(".desc").remove() }
                if(app.tags && app.tags.length >0) { 
                    clone.querySelector(".tags").innerHTML = app.tags.sort().map(tag=>{ return `<span data-tag="${tag}" class="tag ${tag}">${tag}</span>` }).join(' ') 
                } else { clone.querySelector(".tags").remove() }
                clone.querySelector(".button").href = app.url
                appSpace.append(clone);
            }
            
        });
        mainSpace.className = tags.join(' ')
       
        Array.from(document.querySelectorAll('#controls .tag')).forEach(elm=>{
            elm.addEventListener('dblclick',(event)=>{
                var tag = event.currentTarget.dataset.tag
                mainSpace.className = event.currentTarget.dataset.tag
            })
            elm.addEventListener('click',(event)=>{
                var tag = event.currentTarget.dataset.tag
                if(tag !== 'all') {
                    if(document.querySelector('main').classList.length == tags.length) {
                        mainSpace.className = event.currentTarget.dataset.tag    
                    } else { 
                        mainSpace.classList.toggle(event.currentTarget.dataset.tag)
                    }
                } else {
                    mainSpace.className = tags.join(' ') 
                }
                
            })
        })

        Array.from(document.querySelectorAll('#apps .tag')).forEach(elm=>{
            elm.addEventListener('click',(event)=>{
                var tag = event.currentTarget.dataset.tag
                mainSpace.classList.toggle(event.currentTarget.dataset.tag)
            })
        })

        // Graphics Switcher
        graphics.forEach(img => {
            var clone = graphicTemplate.content.firstElementChild.cloneNode(true);
            clone.querySelector(".title").innerText = img.name
            clone.querySelector(".button").innerText = img.name
            clone.querySelector(".button").dataset.image = img.url
            graphicSpace.append(clone);   
        });
        var graphicChanger = document.createElement('img')
        graphicSpace.append(graphicChanger)
        graphicChanger.id = "selected-graphic";
        graphicChanger.src = ""

        Array.from(document.querySelectorAll('.graphic-button a')).forEach(elm => {
            elm.addEventListener('click',event => {
                graphicChanger.src = event.currentTarget.dataset.image
            })
        })
        
    })