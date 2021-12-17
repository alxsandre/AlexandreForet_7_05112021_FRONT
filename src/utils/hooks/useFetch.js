import { useState, useEffect } from 'react'

export function useFetch(url, bearer, reload) {
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

  }, [url, bearer, reload])

  function upDateData(index, event) {
    let newData = {...data};
    newData[index].content = event.target.value;
    console.log(newData)

    setData(newData)
  }

return { isLoading, data, upDateData }
}