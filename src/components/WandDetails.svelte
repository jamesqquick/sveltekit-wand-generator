<script lang=ts>
    import { propertiesConfigArr} from "../globals";
    import {fly} from 'svelte/transition';

    export let wand;

</script>
<div class="flex flex-col gap-4 my-10 bg-gray-700 p-8 border-4 rounded-md border-yellow-500 ">

        {#each propertiesConfigArr as property}
            <div class="h-10 flex items-center">
                <span class="w-16 text-gray-400 text:lg md:text-xl">{property.name.toUpperCase()}: </span>
                {#if wand[property.name] }
                <span class="font-bold ml-14 p-1 bg-blue-500 text-black text-xl md:text-2xl" in:fly={{y:50, duration: 50}} out:fly={{y:-50, duration:50}}>
                    {wand[property.name]}
                </span>
                {/if}
            </div>
        {/each}
    </div>