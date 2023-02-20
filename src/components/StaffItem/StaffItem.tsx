import { useOutletContext, useParams } from 'react-router-dom'

export default function StaffItem() {
  const { id } = useParams()
  console.log(id)
  // const context = useOutletContext() // vì không dùng Outlet nữa nên thằng này cũng không có data
  // console.log(context)
  return <div>StaffItem {id}</div>
}
