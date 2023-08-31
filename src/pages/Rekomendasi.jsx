import React from "react";

const Rekomendasi = () => {
    return (
        <main className="flex flex-col gap-4 lg:flex-row flex-grow lg:min-h-max" id="mainContent">
            <div className="w-full p-5 bg-white rounded-lg">
                    <div className="flex">                
                        <h1 className=" text-2xl font-bold">Rekomendasi Keperawatan</h1>
                    </div>
                    <div>
                        <div>                
                            <div className="flex flex-col py-8">                
                                <h1 className=" text-xl font-semibold pb-5">Oksigenasi</h1>
                                <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Semua</option>
                                    <option value="4">Nasa Kanul</option>
                                    <option value="3">Rebreathing mask</option>
                                    <option value="2">NonRebreathing mask</option>
                                    
                                </select>
                            </div>
                            <div className="flex flex-col pb-8">   
                                <h1 className=" text-xl font-semibold pb-5">Posisi head up 30</h1>             
                                <h1 className=" text-xl font-semibold pb-5">Manajemen nyeri dengan natural sound</h1>             
                                <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Semua</option>
                                    <option value="5">Orientasi baik (5)</option>
                                    <option value="4">Percakapan kacau (4)</option>
                                    <option value="3">Kata - kata kacau (3)</option>
                                    <option value="2">Mengerang (2)</option>
                                    <option value="1">Tidak memberi merespon (1)</option>
                                </select>
                            </div>
                            <div className="flex flex-col pb-8">   
                                <h1 className=" text-xl font-semibold pb-5">Manajemen agitasi</h1>                  
                                <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Semua</option>
                                    <option value="6">Restrain</option>
                                    <option value="5">Pemasangan tel pengaman tempat tidur pasien</option>
                                    <option value="4">Menjauhi rangsang nyeri (4)</option>
                                </select>
                            </div>
                            <div className="flex flex-col pb-8">   
                                <h1 className=" text-xl font-semibold pb-5">Manajemen hypothermia</h1>                  
                                <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Semua</option>
                                    <option value="6">Surface cooling</option>
                                </select>
                            </div>
                        </div>               
                    </div>
            </div>
            <div className="w-full p-5 bg-white rounded-lg">
                    <div className="flex">                
                        <h1 className=" text-2xl font-bold">Tindakan Kolaborasi</h1>
                    </div>
                    <div>
                        <div>                
                            <div className="flex flex-col py-8">                
                                <h1 className=" text-xl font-semibold pb-5">Pemberian diuretik dan hyperosmolar</h1>
                                <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Semua</option>
                                    <option value="4">Nasa Kanul</option>
                                    <option value="3">Rebreathing mask</option>
                                    <option value="2">NonRebreathing mask</option>
                                    
                                </select>
                            </div>
                            <div className="flex flex-col pb-8">               
                                <h1 className=" text-xl font-semibold pb-5">Pencegahan kejang</h1>             
                                <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Semua</option>
                                    <option value="5">Orientasi baik (5)</option>
                                    <option value="4">Percakapan kacau (4)</option>
                                    <option value="3">Kata - kata kacau (3)</option>
                                    <option value="2">Mengerang (2)</option>
                                    <option value="1">Tidak memberi merespon (1)</option>
                                </select>
                            </div>
                            <div className="flex flex-col pb-8">   
                                <h1 className=" text-xl font-semibold pb-5">Decopressive craniotomy (DC)</h1>                  
                                <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="">Semua</option>
                                    <option value="6">Restrain</option>
                                    <option value="5">Pemasangan tel pengaman tempat tidur pasien</option>
                                    <option value="4">Menjauhi rangsang nyeri (4)</option>
                                </select>
                            </div>
                        </div>               
                    </div>
            </div>
        </main>
    )
}

export default Rekomendasi;