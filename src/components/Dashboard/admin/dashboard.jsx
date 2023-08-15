import React from "react";
// import { Link } from "react-router-dom";
// import Sidebar from "../../container/sidebar";
// import Navigation from "../../container/navigation";
import imageSrc from "../../../assets/images/nurse.jpg";

function Dashboard(){
    return(
    <main className=" h-screen rounded-lg shadow-sm" id="mainContent">
        <div className="flex flex-col gap-4">
            <div className="flex justify-between p-8 bg-blue-200 border-blue-600 border-2 rounded-lg shadow-sm">
                <h1 className=" text-xl md:text-3xl font-bold">Welcome to Your Dashboard!</h1>
                <img className="w-28 h-28" src={imageSrc} alt="gambar" />
            </div>
            <div className="flex gap-4 flex-col sm:flex-row flex-grow">
                <div className="flex justify-between bg-white shadow-md p-8 w-full sm:w-1/3 rounded-lg">
                    <div className="">
                        <h2 className="text-md font-semibold">Total Pasien</h2>
                        <h2 className="text-2xl font-semibold">5000</h2>
                    </div>
                    <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gray" className="bi bi-people h-20 w-20" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                    </svg>

                    </div>
                </div>
                <div className="bg-white p-8 w-full sm:w-1/3 rounded-lg shadow-md">
                    <h1 className="md:text-lg font-semibold">Total Cost</h1>
                </div>
                <div className="bg-white p-8 w-full sm:w-1/3 rounded-lg shadow-md">
                    <h1 className="md:text-lg font-semibold">Total Profit</h1>
                </div>
            </div>
            <div className="bg-white h-96 rounded-lg">

            </div>
        </div>
    </main>

    );
}

export default Dashboard;