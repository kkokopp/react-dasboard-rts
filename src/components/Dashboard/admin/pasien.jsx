import React from "react";
// import { Link } from "react-router-dom";
// import imageSrc from "../../../assets/images/profile.jpg";
import imageSrc from "../../../assets/images/nurse.jpg";
import {db} from "../../../config/firebase";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";

function Pasien(){

    const [pasien, setPasien] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPasien, setFilteredPasien] = useState([]);
    const [displayCount, setDisplayCount] = useState(pasien.length);

    useEffect(() => {
        const pasienRef = ref(db, "pasien");

        const fetchPasien = async () => {
            try {
              const snapshot = await get(pasienRef);
              if (snapshot.exists()) {
                const data = snapshot.val();
                const pasienList = Object.values(data);
                setPasien(pasienList);
                setDisplayCount(pasienList.length);
                // console.log(perawatList);
              }
            } catch (error) {
              console.error("Error fetching nurses:", error);
            }
          };
      
          fetchPasien();
    }, []);

    console.log(pasien.length);

    useEffect(() => {
        if(searchTerm === ''){
            setFilteredPasien(pasien);
            return;
        }else{
            const filteredPasien = pasien.filter((pasien) =>{
                return pasien.nama.toLowerCase().includes(searchTerm.toLowerCase())
            });
            setFilteredPasien(filteredPasien);
            setDisplayCount(filteredPasien.length);
            // console.log(filteredPerawat)
        }
    }, [searchTerm, pasien, filteredPasien.length]);

    const handleDisplayCount = (event) => {
        console.log(displayCount);
        const selectedValue = event.target.value;
        if(selectedValue === ""){
            setDisplayCount(filteredPasien.length);
        }else{
            setDisplayCount(Number(selectedValue));
        }
    };

    // const pasien = [
    //     {nama: "Anya Geraldine", nomorCM: "2801010121", dateTime: "02/28/12:05", pekerjaan: "Wirasewasta", cedera: "Tabrak Lari", gcs: "13 CKS", rts: "11 Ringan", tipe: "KPK"},
    //     {nama: "Anya Geraldine", nomorCM: "2801010121", dateTime: "02/28/12:05", pekerjaan: "Wirasewasta", cedera: "Tabrak Lari", gcs: "13 CKS", rts: "11 Ringan", tipe: "KPK"},
    //     {nama: "Anya Geraldine", nomorCM: "2801010121", dateTime: "02/28/12:05", pekerjaan: "Wirasewasta", cedera: "Tabrak Lari", gcs: "13 CKS", rts: "11 Ringan", tipe: "KPK"},
    //     {nama: "Anya Geraldine", nomorCM: "2801010121", dateTime: "02/28/12:05", pekerjaan: "Wirasewasta", cedera: "Tabrak Lari", gcs: "13 CKS", rts: "11 Ringan", tipe: "KPK"},
    //     {nama: "Anya Geraldine", nomorCM: "2801010121", dateTime: "02/28/12:05", pekerjaan: "Wirasewasta", cedera: "Tabrak Lari", gcs: "13 CKS", rts: "11 Ringan", tipe: "KPK"},
    // ];

    return(
        <div className="flex-col gap-4 flex-grow p-5">
            <div className="flex">                
                <h1 className="text-lg font-bold">Data Pasien</h1>
            </div>
            <div className="relative py-5">
                <div className=" sm:rounded-lg">
                    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                        <div>
                                <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={handleDisplayCount}
                                value={displayCount === pasien.length ? "" : displayCount}>
                                    <option value="">Semua</option>
                                    <option value="1">1</option>
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                        </div>
                        <label htmlFor="table-search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}></input>
                        </div>
                    </div>
                    
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
                                        Hari/Tgl/Jam/Assesment
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Pekerjaan
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Penyebab Cedera
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Klasifikasi GCS
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nilai RTS
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Tipe Kecelakaan
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredPasien.slice(0, displayCount).map((item, index) => (                                    
                                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"  key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</th>
                                        <td className="px-6 py-4">{item.nama}</td>
                                        <td className="px-6 py-4">{item.nomorCM}</td>
                                        <td className="px-6 py-4">{item.dateTime}</td>
                                        <td className="px-6 py-4">{item.pekerjaan}</td>
                                        <td className="px-6 py-4">{item.cedera}</td>
                                        <td className="px-6 py-4">{item.gcs}</td>
                                        <td className="px-6 py-4">{item.rts}</td>
                                        <td className="px-6 py-4">{item.tipe}</td>
                                        <td className="px-6 py-4">
                                            <button className=" rounded-md bg-green-700 p-2 me-2 mb-2 active:bg-green-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>

                                            </button>
                                            <button className=" rounded-md bg-red-800 p-2 active:bg-red-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Pasien;