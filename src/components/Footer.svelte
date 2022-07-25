<script>
	import Link from './Link.svelte';
</script>

<footer
	class="fixed w-full py-4 px-10 bottom-0 bg-gray-800 text-white flex flex-col items-center gap-2"
>
	<Link
		href="https://github.com/jamesqquick/sveltekit-wand-generator"
		text="Check out the source code"
	/>
	<div class="flex md:flex-row flex-col items-center gap-2">
		<p class="flex md:flex-row flex-col  items-center">Built with 🧡</p>

		<Link href="https://kit.svelte.dev/" text="SvelteKit" />
		<Link href="https://netlify.com/" text="Netlify" />
		<Link href="https://prisma.io/" text="Prisma" />
		<Link href="https://tailwindcss.com/" text="Tailwind" />
		<a
			rel="noopener noreferrer"
			target="_blank"
			class="underline font-bold"
			href="https://planetscale.com/">PlanetScale</a
		>
	</div>
</footer>
