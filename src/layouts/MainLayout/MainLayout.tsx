import React from 'react'
import { Link, NavLink } from 'react-router-dom'
interface Props {
  children?: React.ReactNode
}
export default function MainLayout({ children }: Props) {
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to='/'
                end // nó giống exact, dùng để xác định xem thằng cha đã match hay chưa, nếu match rồi thì thằng khác sẽ không match nữa, ngắn gọn là nó dùng để xác thực đúng 1 thằng vào 1 thời điểm được match
                replace // mặc định khi ta đổi trang, thì nó sẽ lưu vào history page trong trình duyệt của chúng ta và thằng này dùng để ngăn chặn điều đó với chính bản thân nó, khi có nó thì nó sẽ không lưu vào lịch sử duyệt web của link này mà nó lấy url hiện tại để ghi đè lên
                className={({ isActive }) => {
                  const isActiveClass = isActive ? 'bg-gray-300  ' : ''
                  return `flex items-center rounded-lg ${isActiveClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300 `
                }} // isActive được sinh ra bởi react-router-dom và dành riêng cho thẻ NavLink này khi nó được chọn, nó sẽ true giá trị của isActive lên và ta dựa vào đó để handle css hoặc điều gì đó khác...

                // style={({ isActive }) => ({
                //   fontWeight: isActive ? 800 : undefined
                // })} // ngoài cách trên thì vẫn có thể dùng như vậy
              >
                {/* hoặc ta có thể xử lý ở dưới children như vậy với isActive */}
                {({ isActive }) => {
                  return <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Dashboard</span>
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/staff'
                className={({ isActive }) => {
                  const isActiveClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${isActiveClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300 `
                }}
              >
                {({ isActive }) => {
                  return <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Staff</span>
                }}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => {
                  const isActiveClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${isActiveClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300 `
                }}
              >
                {({ isActive }) => {
                  return <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>About</span>
                }}
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <main className='col-span-3 h-full py-4 px-3'>{children}</main>
    </div>
  )
}
