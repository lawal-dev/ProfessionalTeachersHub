import React from 'react'
import Profile from './Profile';
import { FaBars } from 'react-icons/fa';


const MainPage = ({renderContent}) => {


  return (





    <main className="flex-grow ml-64">
      {/* Page header */}

      <div className='bg-secondary h-24 w-full p-1 flex justify-between items-center' >
        <p> <FaBars className='text-white text-2xl ml-10 ' /> </p>
        <div>
          <Profile />
        </div>
      </div>


      {/* 
      <Routes>
        
        <Route exact path='teacher-dashboard/:home' element={<Home />} />
        <Route path='teacher-dashboard/profile-page' element={<ProfilePage />} />
        <Route path='teacher-dashboard/findaJob' component={<FindAJob />} />
        <Route path='teacher-dashboard/notifications' Component={<Notifications />} />
        <Route path='teacher-dashboard/course-seclection' Component={<CoursesSection />} />
      </Routes>
       */}

      {renderContent()}

    </main >







  )
}

export default MainPage


{/* <Home />
      <ProfilePage />
      <FindAJob />
      <Notifications />
      <CoursesSection /> */}
