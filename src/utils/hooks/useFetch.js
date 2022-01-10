import { useState, useEffect } from 'react'

export function useFetch(url, bearer, reload) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  useEffect(() => {
    if (!url) return
    async function fetchData() {
      try { const response = await fetch(url, {
        method: 'get',
        headers: {
          'Authorization': 'Bearer ' + bearer,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json()
      setData(data)
      } catch (err) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    setLoading(true)
    fetchData()

  }, [url, bearer, reload])

  function upDateData(index, event) {
    let newData = {...data};
    newData[index].content = event.target.value;
    setData(newData)
  }

return { isLoading, data, upDateData, error }
}