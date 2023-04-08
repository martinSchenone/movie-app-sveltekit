<script>
	export let movie;
</script>

<div class="movie-card">
    <a svletekit:prefetch sveltekit:noscroll href={"/movies/"+ movie.id}>
	<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
    </a>
	<div class="description">
        <span>{movie.vote_average}</span>
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
    span{
        position: relative;
        bottom: 100%;
        right: 10px;
        background:linear-gradient(to bottom right, #FF512F, #DD2476);
        padding: 0.8rem;
        text-align: center;
        border-radius: 10px;
        color: white;
    }
	img {
		width: 100%;
		height: 60vh;
		object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
	}
    h2{
        font-size: 0.9rem;
    }
    .description{
        height: 5vh;
    }
    p{
        font-size: 0.7rem;
    }
    .movie-card{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
        margin-bottom: 0.5rem;
    }
</style>
