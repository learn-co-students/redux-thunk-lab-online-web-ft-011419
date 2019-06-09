
export function fetchCats() {
  return dispatch => {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:4000/db')
    .then(res => res.json())
    .then(jsonResponse =>
    dispatch({type: 'FETCH_CATS', payload: jsonResponse.images}))
  }
}
