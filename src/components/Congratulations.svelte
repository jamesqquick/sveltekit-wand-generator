<script lang="ts">
	import { variables } from '../variables';
	import { fade } from 'svelte/transition';
	import TwitterShare from './TwitterShare.svelte';
	export let id: string;
</script>

<div in:fade>
	<p class="text-gray-300 text-center text-4xl mb-4">Congratulations on your new wand!</p>
	<div class="text-center">
		<TwitterShare
			text="I created my own magical wand with @planetscale @prisma @sveltekit @tailwindcss"
			url={`${variables.basePath}/wands/${id}`}
		/>
	</div>
</div>
