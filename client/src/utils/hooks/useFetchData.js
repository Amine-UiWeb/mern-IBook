import { useEffect, useState } from "react"


const useFetchData = (url, deps) => {

  const [data, setData] = useState(null)
  const [fetched, setFetchCompleted] = useState(false)
  const [fetchError, setFetchError] = useState(false)

    useEffect(() => {
      if (!deps) setFetchCompleted(false)
      else {
        (() => {
          try {
            fetch(url, { cache: 'force-cache' })
              .then(res => res.json())
              .then(data => {
                setTimeout(() => {
                  setData(prev => data)
                  setFetchCompleted(true)
                }, 0)
              })
          } 
          catch (err) { setFetchError(prev => ({ error: err.message })) } 
        })()
      }
    }, [deps])

  return { data, fetched, fetchError }
}

export default useFetchData