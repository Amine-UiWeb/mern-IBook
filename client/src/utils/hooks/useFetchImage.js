import { useEffect, useState } from "react"


const useFetchImage = (url) => {
  const [image, setImage] = useState(null)
  
  useEffect(() => {
  
    (async () => {
      const res = await fetch(url, { cache: "force-cache" })
      const blob = await res.blob()

      let reader = new FileReader()
      reader.onload = function () {
        setImage((prev) => this.result)
      }
      reader.readAsDataURL(blob)
    })()

  })

  return { image, setImage }
}

export default useFetchImage