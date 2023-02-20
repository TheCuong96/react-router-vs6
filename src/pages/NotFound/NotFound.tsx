import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  // 2 cách để xử lý điều hướng với nagigate của react-router-dom
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true, state: 'bạn đã được điều hướng từ not found page sang trang chủ' })
    }, 2000)
  }, [navigate])

  return (
    <>
      {/* <Navigate to='/' /> */}
      <div>Not Found</div>
    </>
  )
}
