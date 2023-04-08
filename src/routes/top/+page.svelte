<script>
    import MovieCard from '../../components/MovieCard.svelte';
    export let data;
    const { results } = data;
</script>


<h1>Top rated movies by TMDB</h1>

<div class="movie-top">
    {#each results as movie}
         <MovieCard {movie}/>
    {/each}
</div>

<style>
    .movie-top{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        grid-column-gap:1rem;
        grid-row-gap:2rem ;
    }
    
</style>