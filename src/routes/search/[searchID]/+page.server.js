import 'dotenv/config'

export const load = async({params}) =>{
    const fetchId = async (id) =>{
        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.SECRET_API_KEY}&language=en-US&query=${id}&page=1&include_adult=false`)
        const data = await res.json()
        return data;
        
    }
    return{
        props: fetchId(params.searchID)
    }
}   