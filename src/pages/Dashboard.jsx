import React from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../../container/sidebar";
// import Navigation from "../../container/navigation";
import imageSrc from "../assets/images/nurse.jpg";

function Dashboard(){
    return(
    <main className=" h-screen rounded-lg shadow-sm" id="mainContent">
        <div className="flex flex-col gap-4">
            <div className="flex justify-between p-8 bg-gradient-to-tl from-blue-800 to-teal-400 rounded-lg shadow-md">
                <h1 className=" text-xl md:text-3xl font-bold text-white">Welcome to Your Dashboard!</h1>
                <img className="w-28 h-28 rounded-full" src={imageSrc} alt="gambar" />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row flex-grow">
            </div>
            <div className="bg-white flex flex-grow rounded-lg">
            </div>
        </div>
    </main>

    );
}

export default Dashboard;