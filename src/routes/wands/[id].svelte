<script context="module" lang="ts">

    export async function load({params: {id}, fetch}) {
        const response = await fetch(`/api/wands/${id}`);
        const {data:wand} = await response.json();
        return {props: {wand}};
    }
</script>
<script lang="ts">
    import WandDetails from "../../components/WandDetails.svelte";

    export let wand;
</script>

<WandDetails wand={wand}/>