import { useState, useEffect } from 'react'

export function useFetch(url, bearer, content) {
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

 
useEffect(() => {
  if (!url) return
  async function fetchData() {
    const response = await fetch(url, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + bearer,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  setLoading(true)
  fetchData()

}, [url, bearer, content])

return { isLoading, data }
}