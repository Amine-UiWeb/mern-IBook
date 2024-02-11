import { useEffect, useState } from "react"


const useFetchData = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url).then(res => res.json())
      .then(result => setData(result))
  })

  return { data, setData }
}

export default useFetchData