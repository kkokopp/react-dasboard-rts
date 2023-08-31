import React from "react";

const Rts = () => {
    // RTS
    const [gcs, setGcs] = React.useState("");
    const [sbp, setSbp] = React.useState("");
    const [rr, setRr] = React.useState("");
    const [hasilRts, setHasilRts] = React.useState("");
    const [classificationRts, setClassificationRts] = React.useState("");
    const [showHasilRts, setShowHasilRts] = React.useState(false);
    
    const handleHitungRts = () => {
        const hasilRts = parseInt(gcs) + parseInt(sbp) + parseInt(rr);
        setHasilRts(hasilRts);
        const classificationRts = hasilRts >= 11 ? "Ringan" :
        hasilRts >= 9 ? "Sedang" :
        hasilRts >= 7 ? "Berat" :
                    "Sangat Berat";
        setClassificationRts(classificationRts);
        if (gcs === "" || sbp === "" || rr === "") {
            alert("Mohon isi semua field");
            return;
        }else{
            setShowHasilRts(true);
        }
    }


    return (
            <div className="flex flex-col gap-4 p-5 shadow-sm rounded-lg bg-white">
                <div className="flex">                
                    <h1 className=" text-2xl font-bold">Hitung Revised Trauma Score (RTS)</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="lg:w-1/2">                
                        <div className="flex flex-col py-8">                
                            <h1 className=" text-xl font-semibold pb-5">Glasgow Coma Score (Points)</h1>
                            <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setGcs(e.target.value)}>
                                <option value="">Semua</option>
                                <option value="4">13 - 15</option>
                                <option value="3">9 - 12</option>
                                <option value="2">6 - 8</option>
                                <option value="1">4 - 5</option>
                                <option value="0">3</option>
                            </select>
                        </div>
                        <div className="flex flex-col pb-8">   
                            <h1 className=" text-xl font-semibold pb-5">Systolic Blood Pressure (mm Hg):</h1>             
                            <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setSbp(e.target.value)}>
                                <option value="">Semua</option>
                                <option value="4">&gt;89</option>
                                <option value="3">76 - 89</option>
                                <option value="2">50 - 75</option>
                                <option value="1">1 - 49</option>
                                <option value="0">0</option>
                            </select>
                        </div>
                        <div className="flex flex-col pb-8">   
                            <h1 className=" text-xl font-semibold pb-5">Respiratory Rate (breaths/min):</h1>                  
                            <select className="bg-teal-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setRr(e.target.value)}>
                                <option value="">Semua</option>
                                <option value="3">&gt;29</option>
                                <option value="4">10 - 29</option>
                                <option value="2">6 - 9</option>
                                <option value="1">1 - 5</option>
                                <option value="0">0</option>
                            </select>
                        </div>
                        <div className=" items-center flex justify-center">
                            <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
                            onClick={handleHitungRts}>Hitung RTS</button>
                        </div>
                    </div>                
                    <div className="flex-grow">
                        <div className="py-8">                    
                            <h2 className=" font-semibold text-xl pb-5">Hasil perhitungan RTS</h2>             
                            <div className= "bg-slate-800 h-60 text-lg py-5">
                                <div className={`${showHasilRts ? '':'hidden'}`}>
                                    <div className="flex text-white items-center justify-center">
                                        <h3 className=" font-extrabold">Revisied Trauma Score Score:</h3>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <h3 className=" text-green-400 text-4xl text-center font-bold pr-3">{hasilRts}</h3>
                                        <h4 className=" text-white text-3xl text-center">points</h4>
                                        <h4 className=" text-white text-3xl text-center px-2">=</h4>
                                        <h4 className=" text-yellow-400 text-3xl text-center font-bold">{classificationRts}</h4>
                                    </div>
                                    <div className="flex text-white items-center justify-center pt-10">
                                        <h3 className=" font-extrabold">Mortalitas:</h3>
                                    </div>
                                </div>
                            </div>   

                        </div>
                        <div>
                            <h2 className="font-semibold text-xl pb-5">Klasifikasi tingkat keparahan RTS yaitu:</h2>
                            <div>
                                <table className=" items-center">
                                    <tbody>
                                        <tr>
                                            <td className=" w-40">
                                                Nilai 6/ kurang dari 6
                                            </td>
                                            <td>
                                                : Sangat Berat
                                            </td>
                                        </tr>
                                        <tr >
                                            <td>
                                                Nilai 7 - 8
                                            </td>
                                            <td>
                                                : Berat
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" w-20">
                                                Nilai 9 - 10
                                            </td>
                                            <td>
                                            : Sedang
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" w-20">
                                                Nilai 11 - 12
                                            </td>
                                            <td>
                                            : Ringan
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
    );
};

export default Rts;