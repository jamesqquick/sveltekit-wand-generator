<script lang="ts">
	import { propertiesConfigArr } from '../globals';
	import { fly } from 'svelte/transition';

	export let wand;
</script>

<div class="flex flex-col gap-4 my-10 bg-gray-700 p-8 border-4 rounded-md border-yellow-500 ">
	{#each propertiesConfigArr as property}
		<div class="h-10 flex items-center gap-4">
			<span class="w-40 text-gray-400 text:lg md:text-xl">{property.name.toUpperCase()}: </span>
			<span
				class="font-bold h-10 w-full p-1 px-4 bg-blue-500 text-black text-xl md:text-2xl"
				in:fly={{ y: 50, duration: 50 }}
				out:fly={{ y: -50, duration: 50 }}
			>
				{wand[property.name]}
			</span>
		</div>
	{/each}
</div>
