<script lang="ts">
	import { propertiesConfigArr } from '../globals';
	import { fade } from 'svelte/transition';
	import { v4 as uuidv4 } from 'uuid';
	import WandDetails from '../components/WandDetails.svelte';
	import Congratulations from './Congratulations.svelte';

	enum WAND_STATE {
		NOT_STARTED,
		GENERATING,
		GENERATED,
		SAVING,
		SAVED
	}

	let id = uuidv4();

	const blankWand = {
		core: ' ',
		wood: ' ',
		length: ' ',
		maker: ' ',
		flexibility: ' ',
		id
	};

	let myWand = { ...blankWand };

	let currentState: WAND_STATE = WAND_STATE.NOT_STARTED;
	let textSuffix = '';

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
			currentState = WAND_STATE.GENERATED;
		}
	};

	const handleGenerate = async () => {
		if (currentState === WAND_STATE.GENERATING) return;
		const updateEllipses = setInterval(() => {
			if (textSuffix === '...') {
				textSuffix = '';
			} else {
				textSuffix = textSuffix + '.';
			}
		}, 300);
		currentState = WAND_STATE.GENERATING;
		resetWand();
		await delay(50);
		for (let i = 0; i < propertiesConfigArr.length; i++) {
			const curProperty = propertiesConfigArr[i];
			for (let j = 0; j < 5; j++) {
				const randomData =
					curProperty.dataArray[Math.floor(Math.random() * curProperty.dataArray.length)];
				myWand = { ...myWand, [curProperty.name]: randomData };
				await delay(25 + 10 * i);
				myWand = { ...myWand, [curProperty.name]: '' };
				await delay(100);
			}
			const randomData =
				curProperty.dataArray[Math.floor(Math.random() * curProperty.dataArray.length)];
			myWand = { ...myWand, [curProperty.name]: randomData };
		}

		currentState = WAND_STATE.GENERATED;
		clearInterval(updateEllipses);
	};

	const resetWand = async () => {
		myWand = { ...blankWand };
	};

	const delay = (delayInms) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(2);
			}, delayInms);
		});
	};
</script>

<WandDetails wand={myWand} />

<div class="mt-10 flex justify-center">
	{#if currentState === WAND_STATE.NOT_STARTED}
		<button
			in:fade
			type="button"
			on:click={handleGenerate}
			class="px-4 
            py-2 relative  text-2xl text-black before:block 
              bg-blue-500 rounded-sm font-bold"
		>
			Generate
		</button>
	{:else if currentState === WAND_STATE.GENERATING}
		<div in:fade={{ duration: 300 }} class=" text-gray-300 text-2xl w-42 flex gap-1">
			<span> Magic is happening </span>
			<span class="w-10">{textSuffix}</span>
		</div>
	{:else if currentState === WAND_STATE.GENERATED}
		<button
			in:fade
			type="button"
			on:click={handleSave}
			class="px-4 
            py-2 relative  text-2xl text-black before:block 
              bg-blue-500 rounded-sm font-bold"
		>
			Save Wand
		</button>
	{:else if currentState === WAND_STATE.SAVED}
		<Congratulations {id} />
	{/if}
</div>
