import React from "react";

const IdentitasPasien = () => {
    return (
        <div className="flex flex-col gap-4 p-5 py-8 bg-white shadow-sm rounded-lg">
            <div className="flex">
                <h1 className=" text-2xl font-bold">Identitas Pasien</h1>
            </div>
            <div className="flex flex-col relative lg:w-1/2" data-te-input-wrapper-init>
                <div className="input-container relative pt-6">                                
                    <h2 className=" text-xl font-semibold pb-5 ">Nama Pasien</h2>
                    <input 
                        type="text"
                        className="peer block py-3 w-full rounded-md border-blue-500 bg-teal-50"
                        id="Nama_Pasien"/>
                </div>
                <div className="input-container relative pt-6">                                
                    <h2 className=" text-xl font-semibold pb-5">Umur</h2>
                    <input 
                        type="text"
                        className="peer block py-3 w-full rounded-md border-blue-500 bg-teal-50"
                        id="Umur"/>
                </div>
                <div className="flex flex-col pt-6">                
                    <h2 className=" text-xl font-semibold pb-5">Jenis Kelamin</h2>
                    <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Jenis Kelamin</option>
                        <option value="1">Laki - laki</option>
                        <option value="2">Perempuan</option>
                    </select>
                </div>
                <div className="flex flex-col pt-6">                
                    <h2 className=" text-xl font-semibold pb-5">Penyebab</h2>
                    <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Penyebab</option>
                        <option value="1">Trauma</option>
                        <option value="2">Jatuh</option>
                        <option value="2">Trauma akibat persalinan</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
export default IdentitasPasien;