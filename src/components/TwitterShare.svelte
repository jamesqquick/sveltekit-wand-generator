<script lang="ts">
	export let text: string = '';
	export let url: string = '';
	export let hashtags: string = '';
	export let via: string = '';

	$: query = [
		text && `text=${encodeURIComponent(text)}`,
		via && `via=${encodeURIComponent(via)}`,
		hashtags && `hashtags=${hashtags}`,
		url && `url=${encodeURIComponent(url)}`
	]
		.filter(Boolean)
		.join('&');

	$: href = `https://twitter.com/intent/tweet?${query}`;
</script>

<a target="_blank" rel="noreferrer" {href}>Share on Twitter</a>

<style>
	a {
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cpath fill='rgb(29, 161, 242)' class='cls-2' d='M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23'/%3E%3C/svg%3E")
			0 50% no-repeat;
		background-size: 1.5em;
		color: rgb(29, 161, 242);
		font-weight: bold;
		padding: 0.5em 0.3em 0.5em 1.5em;
		text-decoration: none;
	}
</style>
