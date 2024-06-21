import React, { useState } from "react";
import Aside from "./Aside";
import MainPage from "./MainPage";
import ProfilePage from "./Aside/ProfilePage";
import FindAJob from "./Aside/FindAJob";
import CoursesSection from "../courses/Courses";
import Home from "./Aside/Home";
import Notifications from "./Aside/Notifications";
import Qualifications from "./Aside/Qualifications";
import Conferences from "./Aside/Conferences";

const TeachersRecruitmentDashboard = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Profile":
        return <ProfilePage />;
      case "Find a Job":
        return <FindAJob />;
      case "Qualifications":
        return <Qualifications />;
      case "Notifications":
        return <Notifications />;
      case "Courses":
        return <CoursesSection />;
      case "Conferences":
        return <Conferences />;
      default:
        return null;
    }
  };



  return (


    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <Aside handlePageChange={handlePageChange} />

      {/* Main content */}
      <MainPage renderContent={renderContent} />
    </div>



  );
};

export default TeachersRecruitmentDashboard;
