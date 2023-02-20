import { useOutletContext, useParams } from 'react-router-dom'

export default function StaffItem() {
  const { id } = useParams()
  console.log(id)
  const context = useOutletContext()
  console.log(context)
  return <div>StaffItem {id}</div>
}
