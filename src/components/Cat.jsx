import { useGetCat } from "../useGetCat"

export const Cat = () => {

  const {data, refetchData, isCatLoading, error:isCatError} = useGetCat();

  if(isCatLoading){
    return <h1>Loading...</h1>
  }
  
  if(isCatError){
    return <p>{isCatError.message}</p>
  }

  return (
    <>
      {data && <p>{data?.fact}</p>}
      <button onClick={refetchData}>Refetch</button>
    </>
  )
}