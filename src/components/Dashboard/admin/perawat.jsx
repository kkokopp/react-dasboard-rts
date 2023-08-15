import React from "react";
// import { Link } from "react-router-dom";
// import imageSrc from "../../../assets/images/profile.jpg";
import imageSrc from "../../../assets/images/nurse.jpg";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import {db} from "../../../config/firebase";
import Filter from "../../container/Filter";

const Perawat = () =>{
    const navigate = useNavigate();
    const [toggleModal] = useOutletContext();
    const [perawat, setPerawat] = useState([]);
    const [filteredPerawat, setFilteredPerawat] = useState([]);
    const [displayCount, setDisplayCount] = useState(perawat.length);
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const perawatRef = ref(db, "perawat");

        const fetchPerawat = async () => {
            try {
                const snapshot = await get(perawatRef);
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const perawatList = Object.values(data);
                    setPerawat(perawatList);
                    setFilteredPerawat(perawatList);
                    setDisplayCount(perawatList.length);
                    setIsLoad(false);
                    // console.log(perawatList);
                }
            } catch (error) {
                console.error("Error fetching nurses:", error);
            }
        };

        fetchPerawat();
    }, []);

    const handleFilter = (filteredPerawat) => {
        setFilteredPerawat(filteredPerawat);
    };

    const handleDisplayCount = (displayCount) => {
        setDisplayCount(displayCount);
    };
    

    return(
        <main className="bg-white flex-grow lg:min-h-max rounded-lg shadow-sm" id="mainContent">
            <div className="flex-col gap-4 flex-grow p-5">
                <div className="flex">                
                    <h1 className="text-lg font-bold">Data Perawat</h1>
                </div>
                <div className="relative py-5">
                    <div className=" sm:rounded-lg">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between pb-4 bg-white dark:bg-gray-900">
                            <Filter data={perawat} onFilter={handleFilter} onDisplay={handleDisplayCount}/>
                        </div>
                        
                        {isLoad ? (
                            <div className="flex item-center justify-center h-full">
                                <p>Loading...</p>
                            </div>
                        ) : (
                            <Table filteredPerawat={filteredPerawat} navigate={navigate} toggleModal={toggleModal} imageSrc={imageSrc} displayCount={displayCount}/>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}

const Table = ({filteredPerawat, navigate, toggleModal, imageSrc, displayCount}) => {
    return (
        <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Foto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nama
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Jenis Kelamin
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Umur
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Lama Bekerja
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Pendidikan
                                    </th>
                                    <th scope="col" className="px-6 py-3">
   
                                    </th>
                                </tr>
                </thead>

                <tbody>
                                {filteredPerawat.length === 0 ? (
                                        <tr>
                                            <td colSpan="10">
                                                <div className="flex py-10 items-center justify-center">
                                                        Perawat tidak ditemukan..
                                                </div>
                                            </td>
                                        </tr>
                                ):(filteredPerawat.slice(0, displayCount).map((item, index) => (                                    
                                    <tr className={` border-b border-blue-100 dark:bg-gray-900 dark:border-gray-700 ${index %2 ===0 ? 'bg-white': ' bg-gray-50'}`}  key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                                        <td className="px-6 py-4">
                                            <img src={imageSrc} alt="foto" className=" h-auto  max-h-16"/>
                                        </td>
                                        <td className="px-6 py-4">{item.nama}</td>
                                        <td className="px-6 py-4">{item.jenisKelamin}</td>
                                        <td className="px-6 py-4">{item.umur}</td>
                                        <td className="px-6 py-4">{item.lamaBekerja}</td>
                                        <td className="px-6 py-4">{item.pendidikan}</td>
                                        <td className="px-6 py-4">
                                            <button className=" rounded-md bg-green-300 active:border-2 active:border-green-700 p-2 me-2 mb-2 active:bg-green-400"
                                            onClick={()=> navigate(`/admin/perawat/detail`, {state: item})}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className=" stroke-green-700 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>

                                            </button>
                                            <button className=" rounded-md active:border-2 active:border-red-600 bg-red-300 p-2 active:bg-red-400"
                                            onClick={() => toggleModal("perawat")}
                                            >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className=" stroke-red-600 w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            ))}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Perawat;