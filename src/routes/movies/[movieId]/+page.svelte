<script>
	export let data;
	const results = data.props;
	console.log(results);
</script>

<div class="movie-details">
	<div class="img-container">
		<img src={'https://image.tmdb.org/t/p/original' + results.backdrop_path} alt={results.title} />
	</div>
	<div class="txt-container">
		<h1>{results.title}</h1>
		<p class="overview">{results.overview}</p>
		<p>
			<span>Release Date:</span>
			{results.release_date} <br />
			<span>Budget:</span> ${results.budget} <br />
            <span>Rating:</span> {results.vote_average.toFixed(1)} <br />
            <span>Runtime:</span> {results.runtime} Minutes<br/>
		</p>
	</div>
</div>


<style>
    h1{
        padding: 1rem 0rem 2rem;
    }
    p{
        padding: 1rem 0rem;
    }
    .movie-details{
        margin: 2rem 20%;
    }
    .img-container{
        width: 100%;
    }
    img{
        width: 100%;
        border-radius: 1rem;
    }
    
    span{
        font-weight: bold;
    }
</style>