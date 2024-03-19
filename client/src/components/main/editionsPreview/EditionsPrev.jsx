import EditionsPrevItem from "./EditionsPrevItem"
import "./EditionsPrev.css"


const EditionsPreview = ({ ia, height }) => {

  return (
<<<<<<< HEAD
    <span className="preview-covers d-bl of-hidden mt-0-25" style={{ height }}>
=======
    <span className="preview-covers d-bl of-hidden" style={{ height }}>
>>>>>>> b22274b40cfd0f0bef60bd3cf8af2d7402a9ce2a
      {
        ia?.map((iaKey, i) => (
          <EditionsPrevItem key={i} iaKey={iaKey} />
        ))
      }
    </span>
  )
}


export default EditionsPreview