/**
 * post to the API
 * @param {string} url 
 * @param {object} data 
 * @returns {object}
 */

export async function post(url, data) {
  if (!url || !data) return 
  const post = await fetch(url, {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  })
  let response = await post.json()
  return response;
}