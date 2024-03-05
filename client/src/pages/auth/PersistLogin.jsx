import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"

import usePersist from "../../utils/hooks/usePersist"
import { refreshToken } from "../../api/axiosApi"
import { login } from "../../features/auth/authSlice"


const PersistLogin = ({ children }) => {

  const dispatch = useDispatch()
  const { persist } = usePersist()

  const effectRan = useRef(false)

  useEffect(() => {
    if (effectRan.current === true || process.env.NODE_ENV !== "development") {
      if (persist) {
        (async () => {
          try { 
            const data = await refreshToken() 
            dispatch(login({ ...data.user, token: data.aT }))
          }
          catch (err) { console.error(err) }
        })()
      }
    }

    return () => effectRan.current = true
  }, [])

  return children
}
export default PersistLogin