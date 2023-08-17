import React from "react";
import { useLocation } from "react-router-dom";
import imageSrc from "../assets/images/nurse.jpg";

function DetailPerawat(){

    const location = useLocation();
    const perawat = location.state;
    // console.log(perawat);

    const staticPerawat = {
        id: 0,
        jenisKelamin: "F",
        lamaBekerja: "2 Tahun",
        nama: "Static Perawat",
        pendidikan: "S1 Keperawatan",
        umur: "28",
    };
    
    const currentPerawat = perawat || staticPerawat;
    

    return(
        <main className="bg-white flex-grow lg:min-h-max rounded-lg shadow-sm" id="mainContent">
            <div className="flex-row gap-4 flex-grow p-5">
                <div className="flex">                
                    <h1 className="text-lg font-bold">Profile Perawat</h1>
                </div>
                <div className="flex flex-col sm:flex-row">                
                    <div className="flex flex-col py-5" key={currentPerawat.index}>
                        <div className="flex flex-row">
                            <img className="rounded-full border-2 border-blue-700 h-auto sm:h-80" src={imageSrc} alt="description"></img>
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-grow p-5 items-center justify-center">
                                <h3 className=" font-bold text-lg">{currentPerawat.nama}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:flex-grow sm:py-5" key={currentPerawat.index}>
                        <div className="flex flex-col w-full md:w-80 px-5">
                            <h3 className="p-2 font-semibold">Jenis Kelamin</h3>
                            <div className="flex p-2 rounded-lg border-2 bg-teal-50 border-blue-700">
                                <h3>{currentPerawat.jenisKelamin}</h3>
                            </div>
                            <h3 className="p-2 font-semibold">Umur</h3>
                            <div className="flex p-2 rounded-lg border-2 bg-teal-50 border-blue-700">
                                <h3>{currentPerawat.umur}</h3>
                            </div>
                            <h3 className="p-2 font-semibold">Lama Bekerja</h3>
                            <div className="flex p-2 rounded-lg border-2 bg-teal-50 border-blue-700">
                                <h3>{currentPerawat.lamaBekerja}</h3>
                            </div>
                            <h3 className="p-2 font-semibold">Pendidikan</h3>
                            <div className="flex p-2 rounded-lg border-2 bg-teal-50 border-blue-700">
                                <h3>{currentPerawat.pendidikan}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    );
}

export default DetailPerawat;