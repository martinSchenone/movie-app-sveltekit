/** @type {import('./$types').PageLoad} */
import 'dotenv/config';

export async function load() {
	const movieFetch = async () => {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.SECRET_API_KEY}&language=en-US&page=1`
		);

		const data = await res.json();
		return data.results;
	};
	return {
		results: movieFetch()
	};
}
