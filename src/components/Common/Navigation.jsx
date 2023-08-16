import React from "react";
// import { Link } from "react-router-dom";
import imageSrc from "../../assets/images/nurse.jpg";


function Navigation({toggleSidebar, sidebarOpen}){
    const [searchOpen, setSearchOpen] = React.useState(false);  

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return(
        <div className="flex">
            <button id="ham-button" onClick={toggleSidebar} className="mr-3 ham transition-all duration-300 ease-in-out rounded-full active:bg-blue-200" type="button">
                {sidebarOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
    
                ) : (
                <svg id="ham-sidebar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>                  
                )}
            </button>
            <div id="search-div" className={`flex-col w-full md:w-1/2 sm:flex transition-semua ${searchOpen ? '':'hidden'}`}>
                <form>   
                    {/* <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label> */}
                    <div className="flex">
                        <input type="search" id="default-search" className="block p-2 w-full text-sm border border-blue-400 rounded-s-md bg-teal-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required></input>
                        <button type="submit" className="text-white items-center rightt toppp  focus:ring-4 focus:outline-none active:ring-0 active:outline-none active:border-0 p-2 bg-gradient-to-tl from-blue-800 to-teal-400 rounded-e-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            <div className="flex sm:hidden px-2 transition-semua justify-center items-center">
                <button id="button-show-search" className="text-black h-4 items-center rounded-full active:bg-blue-200"
                onClick={toggleSearch}>
                    {searchOpen ? (
                        <svg id="search-icon" className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    ):(
                        <svg id="search-icon" className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    )  
                    }
                </button>
            </div>
            <div id="notif-profile" className={`flex md:flex flex-row flex-grow justify-end items-center ${searchOpen ? 'hidden':''} `}>
                <div className="flex pr-4">
                    <button className="rounded-full active:bg-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                        </svg>
                        </button>
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex justify-center items-center">
                        <img className="rounded-full w-10 h-10" src={imageSrc} alt="description"></img>
                        <button className="p-1 rounded-full active:bg-blue-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>    
        </div>
    );
}

export default Navigation;