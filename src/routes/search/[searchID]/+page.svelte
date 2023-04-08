<script>
    import MovieCard from "../../../components/MovieCard.svelte";
    export let data;
    const searchedMovies = data.props.results;
</script>



<div class="searched-movies">
    {#each searchedMovies as movie}
    <MovieCard {movie}/>
    {/each}
</div>

<style>
    .searched-movies{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
        gap: 2rem;
        height: 20vh;
    }
</style>