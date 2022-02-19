<script>
    import "../app.css";
</script>
<div class="bg-gray-900 h-screen w-screen px-4 py-10 flex justify-center">
    <div class="md:min-w-[600px]">
        <header class="mb-10">
            <h1 class="text-center text-gray-100 text-6xl font-bold mb-4">
                <span class="mx-1 before:block before:absolute before:-inset-[4px] before:-skew-y-3 before:bg-blue-500 relative inline-block">
                    <a href="/" class="relative hover:cursor-pointer text-black font-bold">Wand</a>
                </span> Generator</h1>
            <p class="text-center text-xl text-gray-400 italic">Create your 
                    <span class="text-white font-bold underline underline-offset-2 decoration-purple-500">wand</span>
                and watch the <span class="text-white font-bold underline underline-offset-2 decoration-purple-500">magic</span> unfold!
            </p>
        </header>
        <slot />
    </div>
</div>