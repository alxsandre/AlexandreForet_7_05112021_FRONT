/**
 * post to the API
 * @param {string} url 
 * @param {object} data 
 * @returns {object}
 */

export async function post(url, data, authentification, request) {
  let bearer = authentification
  if (bearer) {
    const userAuthentification = localStorage.getItem('user');
    bearer = JSON.parse(userAuthentification).token;
  }
  
  if (!url || !data) return 
  const post = await fetch(url, {
    method: request,
    headers: {
      'Authorization': 'Bearer ' + bearer,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Origin':`${process.env.REACT_APP_HOST}`
    },
    body: JSON.stringify({ ...data }),
  })
  let response = await post.json()
  return response;
}