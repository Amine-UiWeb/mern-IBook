import { useEffect, useState } from "react"


const useFetchImage = ({ end, dep, pathname, coverSize, photoSize }) => {
  
  const [image, setImage] = useState(null)
  const [isImageLoading, setIsImageLoading] = useState(false)
  const [isFetchError, setIsFetchError] = useState(false)
  
  useEffect(() => {
    if (dep !== pathname && !dep) setIsImageLoading(true) 
    else {
      (async () => {
        try {
          setIsImageLoading(prev => true)
          setIsFetchError(prev => false)

          let url

          // BookDetails page
          if (end == 'b_cover')
            url = `https://covers.openlibrary.org/b/id/${dep?.covers?.[0]}-${coverSize}.jpg`
        
          else if (end == 'b_photo') {
            let authorKey = dep?.authors?.[0]?.author?.key || dep?.author?.key
            let olid = authorKey?.split('/authors/')[1]
            url = `https://covers.openlibrary.org/a/olid/${olid}-${photoSize}.jpg`
          } 

          // AuthorDetails page
          else if (end == 'a_photos')
            url = `https://covers.openlibrary.org/b/id/${dep}-${photoSize}.jpg`
          
          let res = await fetch(url, { cache: "force-cache" })
          let blob = await res.blob()
          let reader = new FileReader()  
          reader.onload = function () { setImage(this.result) }
          reader.readAsDataURL(blob)
        }
        catch(err) { setIsFetchError(true) }
        finally { setIsImageLoading(false) }
      })()
    }
  }, [dep, pathname])

  return { image, isImageLoading ,isFetchError }
}

export default useFetchImage