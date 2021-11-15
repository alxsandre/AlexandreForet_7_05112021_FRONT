import { useState, useEffect } from 'react'

 

export function usePost(url, data) {

    const [response, setResponse] = useState({})

    useEffect(() => {
        if (!url) return
        async function fetchPost() {
        const post = await fetch(url, {
            method: "post",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ data }),
          })
        const response = await post.json()
        setResponse(response)
    }

    fetchPost()

}, [url, data])

return { response }
}