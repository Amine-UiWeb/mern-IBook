import { useEffect, useState } from "react"


const useFetchData = (url) => {

  const [data, setData] = useState(null)
  const [fetchCompleted, setFetchCompleted] = useState(false)
  const [fetchError, setFetchError] = useState(false)

    useEffect(() => {
      if (url.includes('undefined')) setFetchCompleted(false)
      else {
        (async () => {
          try {
            fetch(url, { cache: 'force-cache' })
              .then(res => res.json())
              .then(data => {
                setTimeout(() => {
                  setData(prev => data)
                  setFetchCompleted(true)
                }, 1000)
              })
          } 
          catch (err) { setFetchError(prev => ({ error: err.message })) } 
        })()
      }
    }, [url])

  return { data, fetchCompleted, fetchError }
}

export default useFetchData