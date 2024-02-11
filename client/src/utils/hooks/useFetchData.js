import { useEffect, useState } from "react"


const useFetchData = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    
    fetch(url, { cache: 'force-cache' })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(prev => data)
      })
    
  }, [])

  return { data, setData }
}

export default useFetchData