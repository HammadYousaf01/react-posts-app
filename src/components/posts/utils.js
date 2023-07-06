import useSwr from "swr";
import fetcher from "../../utils/fetcher";


export default function usePosts() {
  const { data, error, isLoading } = useSwr("https://jsonplaceholder.typicode.com/posts", fetcher);

  return {
    posts: data,
    error,
    isLoading
  }
}
