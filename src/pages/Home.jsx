import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

export const Home = () => {

  const { data: catData,isLoading,isError,refetch } = useQuery({
    queryKey: ["cat"],
    queryFn : () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    }
  })

  if(isError){
    return <h2>Sorry, there was an error.</h2>
  }

  if(isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Home</h2>
      {/* { data && <p>{data?.fact}</p>} */}
      <p>{catData?.fact}</p>
      <button onClick={refetch}>Fetch Data</button>
    </div>
  )
}

  // const { data } = useQuery(["catfact"], async ()=> {
  //   const response = await axios.get("https://catfact.ninja/fact");
  //   return response.data;
  // })

  // const {data} = useQuery({
  //   queryKey: ["catfact"],
  //   queryFn: async () => {
  //     const response = await axios.get("https://catfact.ninja/fact");
  //     return response.data;
  //   }
  // })