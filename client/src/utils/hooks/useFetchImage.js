import { useEffect, useState } from "react"


const useFetchImage = (url) => {
  
  const [image, setImage] = useState(null)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [isImageError, setIsImageError] = useState(false)
  
  useEffect(() => {
    if (url.includes('undefined')) setIsImageLoading(true) 
    else {
      (async () => {
        setImage(null)
        setIsImageLoading(true)
        setIsImageError(false)
        try {
          const res = await fetch(url, { cache: "force-cache" })
          const blob = await res.blob()
  
          let reader = new FileReader()
          reader.onload = function () { 
            setImage(this.result) 
          }
          reader.readAsDataURL(blob)
        }
        catch(err) { setIsImageError(true) }
        finally { setIsImageLoading(false) }
      })()
    }
  }, [url])

  return { image, isImageLoading, isImageError }
}

export default useFetchImage