import React from "react";
// import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import Navigation from "./navigation";
import { Outlet } from "react-router-dom";
import 'flowbite';

function Layout({children}){
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return(
        <div className="w-full min-h-screen bg-gray-100 overflow-x-hidden overscroll-x-none">
        {/* <!-- Sidebar component --> */}
        <Sidebar sidebarOpen={sidebarOpen}/>
        <div id="right-content" className={`flex gap-4 py-4 max-h-screen md:ml-64 right-content pr-4 flex-col flex-grow margin-transition ${sidebarOpen ? 'ml-24': ''}`}>
            {/* <!-- Navigation bar component --> */}
            <div id="navbarContainer" className="rounded-lg p-4 bg-white shadow-sm">
                <Navigation toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}/>
            </div>
            {/* <!-- Main content area --> */}
            <div className="bg-white h-screen rounded-lg shadow-sm" id="mainContent">
                {/* <!-- Content from links will be dynamically loaded here --> */}
                <Outlet />
            </div>
        </div>
    </div>
    );
}

export default Layout;