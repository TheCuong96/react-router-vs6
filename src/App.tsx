import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />

          <Route path='/staff' element={<Staff />}>
            {/* Khi setup như vậy thì ta sẽ dùng  <Outlet /> ở nơi mà ta muốn những thằng con nó show ra */}
            <Route path=':id' element={<StaffItem />} />
            <Route path='add' element={<AddStaff />} />
            <Route path='list' element={<StaffList />} />
          </Route>

          {/* <Route path='/staff' element={<Staff />} />
          <Route path='/staff/:id' element={<StaffItem />} />
          <Route path='/staff/add' element={<AddStaff />} /> */}

          {/* <Route path='/staff/:id/:address' element={<StaffItem />} /> */}
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
