<script>
import { variables } from "$src/variables";
import WandGenerator from "../components/WandGenerator.svelte";
</script>
<svelte:head>
    <meta name="twitter:title" content="SvelteKit Wand Generator" />
    <meta property="og:image" content="https://res.cloudinary.com/jamesqquick/image/upload/v1657740252/sk-wand-generator/base.png" />
    <meta property="og:url" content={variables.basePath} />
    <meta name="twitter:image" content="https://res.cloudinary.com/jamesqquick/image/upload/v1657740252/sk-wand-generator/base.png" />
</svelte:head>
<WandGenerator/>