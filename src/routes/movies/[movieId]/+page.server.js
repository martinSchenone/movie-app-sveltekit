import 'dotenv/config'

export const load = async({params}) =>{
    const fetchId = async (id) =>{
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.SECRET_API_KEY}&language=en-US`)
        const data = await res.json()
        return data;
        
    }
    return{
        props: fetchId(params.movieId)
    }
}   