import { useEffect, useRef } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({sidebarOpen}) => {
    const location = useLocation();
    const isDropdownActive = (paths) => {
        return paths.some(path => location.pathname.startsWith(path)) ? 'active-link' : '';
    };

    return(
        <aside id="sidebarContainer" className={`transition-semua ${sidebarOpen ? "" : "sidebar-md"}`}>
        <div id="logo-sidebar" className="fixed py-4 pl-4 top-0 left-0 z-40 w-24 md:w-64 h-screen transition-semua" aria-label="logo-sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto rounded-lg bg-white shadow-sm dark:bg-gray-800">
                <a href="https://flowbite.com/" className="flex justify-center mb-5 p-0 md:pl-2.5">
                    <img src="https://flowbite.com/docs/images/logo.svg" className=" md:pr-4" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden md:block opacity-transition">Aplikasi RTS</span>
                </a>
                <ul className="p-0 font-medium border-t border-gray-200 dark:border-gray-700" >
                    <li className="py-2 sidebar-li">
                        <Link to="/dashboard" type="button" className={`flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${isDropdownActive(['/dashboard'])}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>

                        <span className="flex-1 ml-3 whitespace-nowrap hidden md:block opacity-transition">Dashboard</span>
                        </Link>
                    </li>
                    <li className="py-2 sidebar-li">
                        <Link to="/perhitungan" type="button" className={`flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${isDropdownActive(['/perhitungan'])}`}>
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"/>
                        </svg>

                        <span className="flex-1 ml-3 whitespace-nowrap hidden md:block opacity-transition">RTS & GCS</span>
                        </Link>
                    </li>
                    <li className="py-2 sidebar-li">
                        <Link to="/pasien" type="button" className={`flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${isDropdownActive(['/pasien'])}`}>
                        <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                        </svg>

                        <span className="flex-1 ml-3 whitespace-nowrap hidden md:block opacity-transition">Data Pasien</span>
                        </Link>
                    </li>
                    <li className="py-2 sidebar-li">
                        <Link to="/rekomendasi" type="button" className={`flex items-center justify-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group ${isDropdownActive(['/rekomendasi'])}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap hidden md:block opacity-transition">Rekomendasi TIK</span>
                        </Link>
                    </li>
                    <li className="py-2">
                        <Link to="/" className="sidebar-link justify-center flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-teal-100 dark:hover:bg-gray-700 group">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap hidden md:block opacity-transition">Kuisoner Informasi</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
    )
}

export default Sidebar;