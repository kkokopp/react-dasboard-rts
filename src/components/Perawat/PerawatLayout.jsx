import React, { useState } from "react";
// import { Link } from "react-router-dom";
import PerawatSidebar from "./PerawatSidebar";
import Navigation from "../Common/Navigation";
import { Outlet } from "react-router-dom";
import 'flowbite';
import DeleteModal from "../Common/DeleteModal";

function PerawatLayout({children}){
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen ] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleModal = (items) => {
        setDeleteItem(items);
        setIsModalOpen(!isModalOpen);
    };

    return(
        <div className="w-full min-h-screen bg-gray-100 overflow-x-hidden overscroll-x-none">
        {/* <!-- Sidebar component --> */}
        <PerawatSidebar sidebarOpen={sidebarOpen}/>
        <div id="right-content" className={`flex gap-4 py-4 min-h-screen md:ml-64 right-content pr-4 flex-col flex-grow margin-transition ${sidebarOpen ? 'ml-24': ''}`}>
            {/* <!-- Navigation bar component --> */}
            <nav id="navbarContainer" className="rounded-lg p-4 bg-white shadow-sm">
                <Navigation toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen}/>
            </nav>
            {/* <!-- Main content area --> */}
                {/* <!-- Content from links will be dynamically loaded here --> */}
            <Outlet context={[toggleModal]}/>
            <DeleteModal toggleModal={toggleModal} isModalOpen={isModalOpen} deleteItem={deleteItem}/>
        </div>
    </div>
    );
}

export default PerawatLayout;