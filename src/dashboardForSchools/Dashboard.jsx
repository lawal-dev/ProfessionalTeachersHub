import React, { useState } from "react";
import Aside from "./Aside";
import MainPage from "./MainPage";
import ProfilePage from "./Aside/ProfilePage";
import Home from "./Aside/Home";
import Notifications from "./Aside/Notifications";
import PostAJob from "./Aside/PostAJob";

const SchoolsRecruitmentDashboard = () => {
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
      case "Post a Job":
        return <PostAJob />;
      case "Notifications":
        return <Notifications />;
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

export default SchoolsRecruitmentDashboard;
