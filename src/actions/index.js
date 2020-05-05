export function fetchPosts(response) {
  return {
    type: "FETCH_POSTS",
    payload: response,
  };
}
