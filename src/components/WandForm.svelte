<script lang="ts">
    import { woods, cores, makers, flexibilities, lengths } from "../globals";
    import {fly, fade} from 'svelte/transition';
    import {v4 as uuidv4} from 'uuid';

    enum WAND_STATE {
        NOT_STARTED,
        GENERATING,
        GENERATED,
        SAVING,
        SAVED
    }

    let propertiesMap = {
        core: null,
        wood: null,
        length: null,
        maker: null,
        flexibility: null
    }

    const wandProperties = [
        {
            name: 'core',
            displayName: 'core',
            dataArray: cores,
        },
        {
            name: 'wood',
            displayName: 'wood',
            dataArray: woods,
        },
        {
            name: 'flexibility',
            displayName: 'flexibility',
            dataArray: flexibilities,
        },
        {
            name: 'length',
            displayName: 'length',
            dataArray: lengths,
        },
        {
            name: 'maker',
            displayName: 'maker',
            dataArray: makers,
        }
    ]

    let id = uuidv4();
    let currentState: WAND_STATE = WAND_STATE.NOT_STARTED;
    let textSuffix = "."
    
    const handleSave = async () => {
        currentState = WAND_STATE.SAVING;
        try {
            const res = await fetch('/api/wands', {
                method: 'POST',
                body: JSON.stringify(propertiesMap)
            });
            const data = await res.json();
            currentState = WAND_STATE.SAVED;
            console.log(data)
        } catch (err) {
            console.error(err);
            currentState = WAND_STATE.GENERATED
        }
        
    }

    const handleGenerate = async () => {
        if(currentState === WAND_STATE.GENERATING) return;
        const updateEllipses = setInterval(() => {
            if(textSuffix === "..."){
                textSuffix = "";
            }
            textSuffix = textSuffix  + ".";
        },300)
        currentState = WAND_STATE.GENERATING;
        resetWand();
        await delay(50);
        for(let i = 0; i < wandProperties.length; i ++){
            const curProperty = wandProperties[i];
            for(let j = 0; j < 5; j ++){
                const randomData  = curProperty.dataArray[Math.floor(Math.random() * curProperty.dataArray.length)];
                propertiesMap = {...propertiesMap, [curProperty.name]: randomData};
                await delay(25 + 10 * i)
                propertiesMap = {...propertiesMap, [curProperty.name]: null};
                await delay(100)
            }
            const randomData  = curProperty.dataArray[Math.floor(Math.random() * curProperty.dataArray.length)];
            propertiesMap = {...propertiesMap, [curProperty.name]: randomData};        
        }   

        currentState = WAND_STATE.GENERATED
        clearInterval(updateEllipses);
    }

    const resetWand = async () => {
        propertiesMap = {
            core: null,
            wood: null,
            length: null,
            maker: null,
            flexibility: null
        }

    }

    const delay = (delayInms) => {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve(2);
            }, delayInms);
        });
    }

  

</script>
    <div class="flex flex-col gap-4 my-10 bg-gray-700 p-8 border-4 rounded-md border-yellow-500 ">

        {#each wandProperties as property}
            <div class="h-10 flex items-center">
                <span class="w-16 text-gray-300 text:lg md:text-xl">{property.displayName}: </span>
                {#if propertiesMap[property.name] }
                <span class="font-bold ml-10 p-1 bg-blue-500 text-black text-xl md:text-2xl" in:fly={{y:50, duration: 50}} out:fly={{y:-50, duration:50}}>
                    {propertiesMap[property.name]}
                </span>
                {/if}
            </div>
        {/each}
    </div>
    <div class="mt-10 flex justify-center">
        {#if currentState === WAND_STATE.NOT_STARTED }    
            <button in:fade type="button"  on:click={handleGenerate} class="px-4 
            py-2 relative  text-2xl text-black before:block 
              bg-blue-500 rounded-sm font-bold"> 
                Generate
            </button>
        {:else if currentState === WAND_STATE.GENERATING}
            <p in:fade={{duration:300}} class=" text-gray-300 text-2xl">Magic is happening{textSuffix}</p>
        {:else if currentState === WAND_STATE.GENERATED }
            <button in:fade type="button"  on:click={handleSave} class="px-4 
            py-2 relative  text-2xl text-black before:block 
              bg-blue-500 rounded-sm font-bold"> 
                Save Wand
            </button>
        {:else if currentState === WAND_STATE.SAVED }
            <div transition:fade>
                <p class="text-gray-300 text-center text-lg">Congratulations on your new wand. Share it with your friends!</p>
                <a class="text-white text-lg my-2 text-center underline" href={`${window.location}wands/${id}`}>{window.location}wands/{id}</a>
            </div>
        {/if}
    </div>