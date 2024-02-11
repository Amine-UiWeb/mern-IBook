import { useEffect, useState } from "react"


const useFetchData = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
      (() =>
        fetch(url, { cache: 'force-cache' }).then(res => res.json())
          .then(data => setData(data))
      )()
  }, [])

  return { data, setData }
}

export default useFetchData