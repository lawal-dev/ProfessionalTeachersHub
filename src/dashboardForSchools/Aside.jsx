import React from 'react'
import { SchoolAsideBar } from '../contants'
import { FaLongArrowAltUp, FaSignOutAlt, } from 'react-icons/fa'
import { FaHome } from "react-icons/fa";

const Aside = ({handlePageChange}) => {
  return (
    <aside className="bg-primary text-white w-full lg:w-64 flex-shrink-0 h-screen fixed">
      {/* Sidebar content */}
      <div className="p-4 ">
        <h2 className="text-lg font-bold mb-4">ProfessionalTeachersHub</h2>
        <div>
          {SchoolAsideBar.map((asidebar) => {
            return (
              <ul key={asidebar.id} >
                <li className="py-4 px-2 hover:bg-orange-800 flex gap-4 cursor-pointer rounded-md" onClick={() => handlePageChange(asidebar.title)}>
                  {/* <a href="">{asidebar.icon}</a> */}
                  <a href="#" className="block" >{asidebar.title}</a>
                </li>
              </ul>
            )

          })}
          {/* Add more sidebar links */}
        </div>
        <a href="/login" className='absolute bottom-10 flex items-center gap-2' >
          <FaSignOutAlt />
          <p>Logout</p>
        </a>
      </div>

    </aside>
  )
}

export default Aside