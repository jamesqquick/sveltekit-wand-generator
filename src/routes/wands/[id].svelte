<script context="module" lang="ts" >
    import { Cloudinary } from "@cloudinary/url-gen";
    import { text } from "@cloudinary/url-gen/qualifiers/source";
    import { source } from "@cloudinary/url-gen/actions/overlay";
    import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
    import { Position } from "@cloudinary/url-gen/qualifiers";
    import { compass } from "@cloudinary/url-gen/qualifiers/gravity";
    
	export async function load({ params: { id }, fetch }) {
    const response = await fetch(`/api/wands/${id}`);
    const { data: wand } = await response.json();

    const cloudinary = new Cloudinary({
        cloud: {
            cloudName: variables.cloudinaryCloudName,
        }
    });
    let imageUrl = cloudinary.image('sk-wand-generator/base.png')
        .overlay(source(
            text(wand.core, new TextStyle('Poppins', 26))
                .textColor('black')
        )
            .position(new Position().gravity(compass('west')).offsetY(-40).offsetX(370))
        )
        .overlay(source(
            text(wand.wood, new TextStyle('Poppins', 26))
                .textColor('black')
        )
            .position(new Position().gravity(compass('west')).offsetY(16).offsetX(370))
        )
        .overlay(source(
            text(wand.flexibility, new TextStyle('Poppins', 26))
                .textColor('black')
        )
            .position(new Position().gravity(compass('west')).offsetY(74).offsetX(370))
        )
        .overlay(source(
            text(wand.length.toString(), new TextStyle('Poppins', 32))
                .textColor('black')
        )
            .position(new Position().gravity(compass('west')).offsetY(130).offsetX(370))
        )
        .overlay(source(
            text(wand.maker, new TextStyle('Poppins', 26))
                .textColor('black')
        )
            .position(new Position().gravity(compass('west')).offsetY(186).offsetX(370))
        )
    .toURL();
    return { props: { wand, imageUrl } };
}
</script>

<script lang="ts">
    import type { Wand } from '@prisma/client';
    import { variables } from '$src/variables';
    import WandDetails from '../../components/WandDetails.svelte';

    export let wand: Wand;
    export let imageUrl: string;
    
</script>
    <svelte:head>
        <meta property="og:title" content="My SvelteKit Wand" />
        <meta property="og:url" content={`${variables.basePath}/wands/${wand.id}`} />
        <meta property = "og:image" content={ imageUrl } />
        <meta name="twitter:image" content={imageUrl} />
    </svelte:head>
    <WandDetails { wand } />
    <h2 class="text-white text-4xl text-center underline" >
        <a href="/"> Generate your own wand!</a>
    </h2>
