import { Link, useLocation } from 'react-router-dom'

export default function Dashboard() {
  const location = useLocation()
  console.log('location', location)
  return (
    <div>
      <h1 className='mb-6 text-lg'>Dashboard</h1>
      <div>{location.state}</div>
      <Link to='/?sort=name&order=ascending'>name</Link>
      <Link to='/?sort=age&order=ascending'>age</Link>
      <Link to='/?sort=height&order=ascending'>height</Link>
    </div>
  )
}
