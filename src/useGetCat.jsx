import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const useGetCat = () => {
  const {data, refetch, isLoading: isCatLoading, error} = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      const response = await axios.get("https://catfact.ninja/fact");
      return response.data;
    }
  });

  const refetchData = () => {
    alert("Data has been updated.");
    refetch();
  }

  return { data, refetchData, isCatLoading, error  };
}