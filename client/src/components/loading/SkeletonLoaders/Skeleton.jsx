import "./Skeleton.css"

const Skeleton = ({ classes }) => {
  return (
    <div className={"skeleton " + classes}></div>
  )
}

export const HeaderSkeleton = () => <Skeleton classes="skeleton-header ta-c" />

export const TextSkeleton = () => <Skeleton classes="skeleton-text" />

export const ParagrahSkeleton = ({ nLines }) => 
  <div className="div"> 
    {
      Array(nLines).fill(0).map((_, i) => (
        <Skeleton key={i} classes="skeleton-paragragh mb-0-3" />
      ))
    }
  </div>

