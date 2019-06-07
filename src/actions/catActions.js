// export const fetchCats = () => {
//   const cats = fetch('http://localhost:4000/db')
//     .then(response => {
//       return response.json()
//     })
//     .then(responseJSON => {
//       return responseJSON.images
//     });
//
//   return {
//     type: 'FETCH_CATS',
//     payload: cats
//   }
//   // return (dispatch) => {
//   //   dispatch({ type: 'START_ADDING_CATS_REQUEST' });
//   //   return fetch('http://www.catapi.com')
//   //     .then(response => response.json())
//   //     .then(cats => dispatch({ type: 'ADD_CATS', cats }));
//   // };
// };

export const fetchCats = () => {
  let cats;
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    return fetch('http://localhost:4000/db')
      .then(response => response.json())
      .then(responseJSON => {
        cats = responseJSON.images.map(image => ({ url: image.url }))
        // cats = responseJSON.images
        dispatch({
        type: 'FETCH_CATS',
        payload: cats
       })
     });
  };
}

export const loadingCats = () => {
  return {
    type: 'LOADING_CATS'
  };
};
