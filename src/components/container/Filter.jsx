import React, { useCallback } from "react";
import { useState, useEffect } from "react";

const Filter = ({data, onFilter, onDisplay}) => {
    const [filteredData, setFilteredData] = useState(data);
    const [displayCount, setDisplayCount] = useState(data.length);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredOnFilter = useCallback(onFilter, [])

    useEffect(() => {
        const applyFilter = (term) => {
            const filteredData = data.filter((data) =>{
                return data.nama.toLowerCase().includes(term.toLowerCase())
            });
            if(filteredData.length === 0){
                filteredOnFilter([]);
            }else{
                filteredOnFilter(filteredData);
            };
            setFilteredData(filteredData);
            // onFilter(filteredPasien);
        };
        applyFilter(searchTerm);
    }, [searchTerm, data, filteredOnFilter]);

    const handleDisplayCount = (e) => {
        // console.log(e.target.value);
        const selectedValue = e.target.value;
        if(selectedValue === ""){
            setDisplayCount(filteredData.length);
            onDisplay(filteredData.length);
        }else{
            setDisplayCount(Number(selectedValue));
            onDisplay(Number(selectedValue));
        }
    };


    return(
        <>
            <div className=" mb-5 sm:mb-0">
            <select className="bg-blue-50 border border-blue-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={displayCount === data.length ? "" : displayCount}
            onChange={(e) => handleDisplayCount(e)}>
                <option value="">Semua</option>
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
            </div>
            <div className="relative w-full sm:w-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                    <input type="text" id="table-search-users" className="block bg-blue-50 w-full sm:w-80 p-2 pl-10 text-sm text-gray-900 border border-blue-400 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}></input>
            </div>
        </>
    );
}

export default Filter;