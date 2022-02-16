<script lang="ts">
    import { woods, cores, makers, flexibilities } from "../globals";
    import {fly} from 'svelte/transition';
    let core:string;
    let wood:string;
    let length:number;
    let maker:string;
    let flexibility: string;
    let generating:boolean = false;


    const handleSubmit = async () => {
        try {
            const res = await fetch('/api/wands', {
                method: 'POST',
                body: JSON.stringify({core, wood, length})
            });
            const data = await res.json();
            console.log(data)
        } catch (err) {
            console.error(err);
        }
    }

    const handleGenerate = async () => {
        if(generating) return;
        generating = true;
        resetWand();
        for(let i = 0; i < 5; i ++){
            wood = woods[Math.floor(Math.random() * woods.length)];
            await delay(25 + 10 * i)
            wood = "";
            await delay(100)
        }
        wood = woods[Math.floor(Math.random() * woods.length)];


        for(let i = 0; i < 5; i ++){
            core = cores[Math.floor(Math.random() * cores.length)];
            await delay(25 + 10 * i)
            core = "";
            await delay(100)
        }
        core = cores[Math.floor(Math.random() * cores.length)];

        for(let i = 0; i < 5; i ++){
            flexibility = flexibilities[Math.floor(Math.random() * flexibilities.length)];
            await delay(25 + 10 * i)
            flexibility = "";
            await delay(100)
        }
        flexibility = flexibilities[Math.floor(Math.random() * flexibility.length)];

        for(let i = 0; i < 5; i ++){
            length = Math.floor(Math.random() * 40) * 0.25 + 10;
            await delay(25 + 10 * i)
            length = null;
            await delay(100)
        }
        length = Math.floor(Math.random() * 40) * 0.25 + 10;

        for(let i = 0; i < 5; i ++){
            maker = makers[Math.floor(Math.random() * makers.length)];
            await delay(25 + 10 * i)
            maker = "";
            await delay(100)
        }
        maker = makers[Math.floor(Math.random() * makers.length)];

        generating = false;
    }

    const resetWand = async () => {
        wood = null;
        core = null;
        maker = null;
        flexibility = null;
        length = null;
    }

    const delay = (delayInms) => {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve(2);
            }, delayInms);
        });
    }

    const generateWand = () => {
        wood = woods[Math.floor(Math.random() * woods.length)];
        core = cores[Math.floor(Math.random() * cores.length)];
        maker = makers[Math.floor(Math.random() * makers.length)];
        length = Math.floor(Math.random() * 40) * 0.25 + 10;
        flexibility = flexibilities[Math.floor(Math.random() * flexibility.length)];
    }

</script>
    <div class="container">

        {#if wood}
            <p in:fly={{y:100, duration: 50}} out:fly={{y:-100, duration:50}}>
                {wood}
            </p>
        {/if}
        {#if core}
            <p in:fly={{y:100, duration: 50}} out:fly={{y:-100, duration:50}}>
                {core}
            </p>
        {/if}
        {#if flexibility}
            <p in:fly={{y:100, duration: 50}} out:fly={{y:-100, duration:50}}>
                {flexibility}
            </p>
        {/if}
        {#if length}
            <p in:fly={{y:100, duration: 50}} out:fly={{y:-100, duration:50}}>
                {length}
            </p>
        {/if}
        {#if maker}
            <p in:fly={{y:100, duration: 50}} out:fly={{y:-100, duration:50}}>
                {maker}
            </p>
        {/if}
    </div>
    <button type="button" disabled={generating} on:click={handleGenerate}>{generating ? 'Generating...' : 'Generate Wand'}</button>
    <button on:click={handleSubmit}>Submit</button>
<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr 1fr; 
        align-items: center;
        width: 600px;
        margin: 0 auto;
        height: 200px;
    }

</style>