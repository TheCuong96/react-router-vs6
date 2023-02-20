import { useParams } from 'react-router-dom'

export default function StaffItem() {
  const { id } = useParams()
  console.log(id)

  return <div>StaffItem {id}</div>
}
