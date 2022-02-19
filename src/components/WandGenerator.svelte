<script lang="ts">
    import { propertiesConfigArr } from '../globals';
    import { fade} from 'svelte/transition';
    import {v4 as uuidv4} from 'uuid';
    import WandDetails from '../components/WandDetails.svelte';

    enum WAND_STATE {
        NOT_STARTED,
        GENERATING,
        GENERATED,
        SAVING,
        SAVED
    }

    let id = uuidv4();

    let myWand = {
        core: null,
        wood: null,
        length: null,
        maker: null,
        flexibility: null,
        id
    }

    let currentState: WAND_STATE = WAND_STATE.NOT_STARTED;
    let textSuffix = "."
    
    const handleSave = async () => {
        currentState = WAND_STATE.SAVING;
        try {
            const res = await fetch('/api/wands', {
                method: 'POST',
                body: JSON.stringify(myWand)
            });
            const data = await res.json();
            currentState = WAND_STATE.SAVED;
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
        for(let i = 0; i < propertiesConfigArr.length; i ++){
            const curProperty = propertiesConfigArr[i];
            for(let j = 0; j < 5; j ++){
                const randomData  = curProperty.dataArray[Math.floor(Math.random() * curProperty.dataArray.length)];
                myWand = {...myWand, [curProperty.name]: randomData};
                await delay(25 + 10 * i)
                myWand = {...myWand, [curProperty.name]: null};
                await delay(100)
            }
            const randomData  = curProperty.dataArray[Math.floor(Math.random() * curProperty.dataArray.length)];
            myWand = {...myWand, [curProperty.name]: randomData};        
        }   

        currentState = WAND_STATE.GENERATED
        clearInterval(updateEllipses);
    }

    const resetWand = async () => {
        myWand = {
            core: null,
            wood: null,
            length: null,
            maker: null,
            flexibility: null,
            id
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
    <WandDetails wand={myWand}/>
    
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
            <div in:fade>
                <p class="text-gray-300 text-center text-lg">Congratulations on your new wand. Share it with your friends!</p>
                <a class="text-white text-lg my-2 text-center underline" href={`${window.location}wands/${id}`}>{window.location}wands/{id}</a>
            </div>
        {/if}
    </div>