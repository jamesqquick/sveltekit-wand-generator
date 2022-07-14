<script lang="ts">
	import { variables } from '../variables';
	import { fade } from 'svelte/transition';
	import TwitterShare from './TwitterShare.svelte';
	export let id: string;
</script>

<div in:fade>
	<p class="text-gray-300 text-center text-lg">
		Congratulations on your new wand. Share it with your friends!
	</p>
	<a class="text-white text-lg my-2 text-center underline" href={`${window.location}wands/${id}`}
		>{window.location}wands/{id}</a
	>
	<a
		href="https://twitter.com/share?ref_src=twsrc%5Etfw"
		class="twitter-share-button"
		data-show-count="false">Tweet</a
	>
	<TwitterShare
		text="I created my own magical wand with @planetscale @prisma @sveltekit @tailwindcss"
		url={`${variables.basePath}/wands/${id}`}
	/>
</div>
