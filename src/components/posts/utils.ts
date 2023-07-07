import useSwr from "swr";
import fetcher from "../../utils/fetcher";
import useAxios from "axios-hooks";

export interface IPosts {
  id?: number,
  title: string,
  body: string
}

export default function usePosts() {
  const [{ data, error, loading }] = useAxios("https://jsonplaceholder.typicode.com/posts");

  return {
    posts: data,
    error,
    loading
  }
}


export function usePost(id: string | undefined) {
  const [{ data, error, loading }] = useAxios(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return {
    post: data,
    error,
    loading
  }
}