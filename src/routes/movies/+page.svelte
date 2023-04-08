<script>
	export let data;
	const { results } = data;
	import Popular from '../../components/Popular.svelte';
	import SearchMovies from '../../components/SearchMovies.svelte';
	import { fly } from 'svelte/transition';
</script>

<section 
in:fly={{ y: 50, duration: 500 ,delay: 500 }}
out:fly={{duration: 500}}
>
	<SearchMovies />
	<Popular movies={results} />
</section>
