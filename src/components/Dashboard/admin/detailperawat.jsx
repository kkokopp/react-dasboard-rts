import React from "react";
import { useLocation } from "react-router-dom";
import imageSrc from "../../../assets/images/nurse.jpg";

function Detailperawat(){

    const location = useLocation();
    const perawat = location.state;

    return(
        
        <div className="flex-col gap-4 flex-grow p-5">
            <div className="flex">                
                <h1 className="text-lg font-bold">Profile Perawat</h1>
            </div>
            <div className="flex flex-row">                
                <div className="flex flex-col py-5" key={perawat.index}>
                    <div className="flex flex-row">
                        <img className="rounded-full w-96 h-96" src={imageSrc} alt="description"></img>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-grow p-5 items-center justify-center">
                            <h3 className=" font-bold text-lg">{perawat.nama}</h3>
                        </div>
                    </div>
                </div>
                <div className="flex py-5" key={perawat.index}>
                    <div className="flex flex-col w-full px-5">
                        <h3 className="p-2 font-semibold">Jenis Kelamin</h3>
                        <div className="flex p-2 rounded-lg border-2 border-blue-700">
                            <h3>{perawat.jenisKelamin}</h3>
                        </div>
                        <h3 className="p-2 font-semibold">Umur</h3>
                        <div className="flex p-2 rounded-lg border-2 border-blue-700">
                            <h3>{perawat.umur}</h3>
                        </div>
                        <h3 className="p-2 font-semibold">Lama Bekerja</h3>
                        <div className="flex p-2 rounded-lg border-2 border-blue-700">
                            <h3>{perawat.lamaBekerja}</h3>
                        </div>
                        <h3 className="p-2 font-semibold">Pendidikan</h3>
                        <div className="flex p-2 rounded-lg border-2 border-blue-700">
                            <h3>{perawat.pendidikan}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detailperawat;