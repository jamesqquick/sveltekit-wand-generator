<script context="module" lang="ts">
	export async function load({ params: { id }, fetch }) {
		const response = await fetch(`/api/wands/${id}`);
		const { data: wand } = await response.json();
		return { props: { wand } };
	}
</script>

<script lang="ts">
    import {Cloudinary} from "@cloudinary/url-gen";
    import type { Wand } from '@prisma/client';
    import { variables } from '../../variables';
	import WandDetails from '../../components/WandDetails.svelte';
	export let wand: Wand;
    
    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: variables.cloudinaryCloudName,
        }
    });
    let imageUrl = cloudinary.image('sk-wand-generator/base.png').toURL();

</script>
<svelte:head>
    <meta property="og:title" content="My SvelteKit Wand" />
    <meta property="og:url" content={`${variables.basePath}/wands/${wand.id}`} />
    <meta property="og:image" content={imageUrl} />
</svelte:head>
<WandDetails {wand} />
<h2 class="text-white text-4xl text-center underline"><a href="/">Generate your own wand!</a></h2>
