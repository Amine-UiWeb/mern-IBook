import { Outlet, Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { PulseLoader } from "react-spinners"

import { selectCurrentToken } from "./authSlice"
import { useRefreshMutation } from "./authApiSlice"

import usePersist from "../../hooks/usePersist"


const PersistLogin = () => {

  const token = useSelector(selectCurrentToken)

  const effectRan = useRef(false)

  const [persist] = usePersist()
  const [trueSuccess, setTrueSuccess] = useState(false)

  const [refresh, {
    isUninitialized,
    isLoading,
    isSuccess,
    isError,
    error
  }] = useRefreshMutation()


  useEffect(() => {

    // runs in: (development: second mount, production: one mount)
    const nodeEnv = process.env.NODE_ENV
    if (effectRan.current === true || nodeEnv !== "development") {
      const verifyRefreshToken = async () => {
        console.log('verifying refresh token')
        try {
          await refresh()
          setTrueSuccess(true)
        }
        catch (err) { console.error(err) }
      }
      
      if (!token && persist) verifyRefreshToken()
    }

    // clean-up function: ensures the refresh runs on the second mount
    return () => effectRan.current = true
    
    // eslint-disable-next-line

  }, [])


  let content
  if (!persist) { // persist: no
    console.log('no persist')
    content = <Outlet />
  } 
  else if (isLoading) { //persist: yes, token: no
    console.log('loading')
    content = <PulseLoader color={"#FFF"} />
  } 
  else if (isError) { //persist: yes, token: no
    console.log('error')
    content = (
        <p className='errmsg'>
            {`${error.data?.message} - `}
            <Link to="/login">Please login again</Link>.
        </p>
    )
  } 
  else if (isSuccess && trueSuccess) { //persist: yes, token: yes
    console.log('success')
    content = <Outlet />
  } 
  else if (token && isUninitialized) { //persist: yes, token: yes
    console.log('token and uninit')
    console.log(isUninitialized)
    content = <Outlet />
  }
  
  return content  

}
export default PersistLogin