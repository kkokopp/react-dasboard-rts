import React from "react";

const GCS = () => {
    const [eye, setEye] = React.useState("");
    const [verbal, setVerbal] = React.useState("");
    const [motor, setMotor] = React.useState("");
    const [hasil, setHasil] = React.useState("");
    const [classification, setClassification] = React.useState("");
    const [showHasil, setShowHasil] = React.useState(false);
    
    const handleHitung = () => {
        const hasil = parseInt(eye) + parseInt(verbal) + parseInt(motor);
        setHasil(hasil);
        const classification = hasil >= 14 ? "Normal" :
        hasil >= 12 ? "Apatis" :
        hasil >= 11 ? "Delirium" :
        hasil >= 8  ? "Somnolent" :
        hasil >= 5  ? "Sopor koma" :
                    "Koma";
        setClassification(classification);
        if (eye === "" || verbal === "" || motor === "") {
            alert("Mohon isi semua field");
            return;
        }else{
            setShowHasil(true);
        }
    }
    return (
        <main className="bg-white flex-grow lg:min-h-max rounded-lg shadow-sm" id="mainContent">
                <div className="flex flex-col gap-4 p-5">
                    <div className="flex">                
                        <h1 className=" text-3xl font-bold">Perhitungan Glasgow Coma Score (GCS)</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex-grow border-0 lg:border-r-2 border-blue-300 pr-0 lg:pr-5">                
                            <div className="flex flex-col py-8">                
                                <h1 className=" text-xl font-semibold pb-5">Buka Mata (Eye)</h1>
                                <select className="bg-blue-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setEye(e.target.value)}>
                                    <option value="">Semua</option>
                                    <option value="4">Spontan (4)</option>
                                    <option value="3">Berdasarkan perintah verbal (3)</option>
                                    <option value="2">Berdasarkan Rangsang nyeri (2)</option>
                                    <option value="1">Tidak memberi merespon (1)</option>
                                </select>
                            </div>
                            <div className="flex flex-col pb-8">   
                                <h1 className=" text-xl font-semibold pb-5">Respon Verbal</h1>             
                                <select className="bg-blue-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setVerbal(e.target.value)}>
                                    <option value="">Semua</option>
                                    <option value="5">Orientasi baik (5)</option>
                                    <option value="4">Percakapan kacau (4)</option>
                                    <option value="3">Kata - kata kacau (3)</option>
                                    <option value="2">Mengerang (2)</option>
                                    <option value="1">Tidak memberi merespon (1)</option>
                                </select>
                            </div>
                            <div className="flex flex-col pb-8">   
                                <h1 className=" text-xl font-semibold pb-5">Respon Motorik</h1>                  
                                <select className="bg-blue-50 border font-medium border-blue-400 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setMotor(e.target.value)}>
                                    <option value="">Semua</option>
                                    <option value="6">Menurut perintah (6)</option>
                                    <option value="5">Melokalisir rangsang nyeri (5)</option>
                                    <option value="4">Menjauhi rangsang nyeri (4)</option>
                                    <option value="3">Fleksi abnormal (3)</option>
                                    <option value="2">Ekstensi abnormal (2)</option>
                                    <option value="1">Tidak memberi respon (1)</option>
                                </select>
                            </div>
                            <div className=" items-center flex justify-center">
                                <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-semibold py-2 px-4 rounded"
                                onClick={handleHitung}>Hitung GCS</button>
                            </div>
                        </div>                
                        <div className="flex-grow">
                            <div className="py-8">                    
                                <h2 className=" font-semibold text-xl pb-5">Hasil perhitungan GCS</h2>             
                                <div className= "bg-slate-800 h-60 text-lg py-5">
                                    <div className={`${showHasil ? '':'hidden'}`}>
                                        <div className="flex text-white items-center justify-center">
                                            <h3 className=" font-extrabold">Glasgow Coma Scale:</h3>
                                        </div>
                                        <div className="flex flex-row gap-2 items-center justify-center text-2xl">
                                            <div className="flex text-white items-center justify-center">
                                                <p>E </p>
                                                <p>(</p>
                                                <p className=" font-bold text-green-400">{eye}</p>
                                                <p>)</p>
                                            </div>
                                            <div className="flex text-white items-center justify-center">
                                                <p>V </p>
                                                <p>(</p>
                                                <p className=" font-bold text-blue-400">{verbal}</p>
                                                <p>)</p>
                                            </div>
                                            <div className="flex text-white items-center justify-center">
                                                <p>M </p>
                                                <p>(</p>
                                                <p className=" font-bold text-red-400">{motor}</p>
                                                <p>)</p>
                                            </div>
                                        </div>
                                        <div className="flex text-white items-center justify-center pt-10">
                                            <h3 className=" font-extrabold">Glasgow Coma Score:</h3>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <h3 className=" text-white text-4xl text-center font-bold pr-3">{hasil}</h3>
                                            <h4 className=" text-white text-3xl text-center">points</h4>
                                            <h4 className=" text-white text-3xl text-center px-2">=</h4>
                                            <h4 className=" text-yellow-400 text-3xl text-center font-bold">{classification}</h4>
                                        </div>
                                    </div>
                                </div>   

                            </div>
                            <div>
                                <h2 className="font-semibold text-xl pb-5">Skor nilai GCS</h2>
                                <div>
                                    <table className=" items-center">
                                        <tbody>
                                            <tr>
                                                <td className=" w-20">
                                                    14 - 15
                                                </td>
                                                <td>
                                                    : Nilai normal / Composmentis / Sadar penuh
                                                </td>
                                            </tr>
                                            <tr >
                                                <td>
                                                12 - 13
                                                </td>
                                                <td>
                                                : Apatis / acuh tak acuh
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" w-20">
                                                11 - 12
                                                </td>
                                                <td>
                                                : Delirium
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" w-20">
                                                8 - 10
                                                </td>
                                                <td>
                                                : Somnolent
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" w-20">
                                                5 - 7
                                                </td>
                                                <td>
                                                : Sopor koma
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" w-20">
                                                1 - 4
                                                </td>
                                                <td>
                                                : Koma
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>                
                    </div>
                </div>
        </main>
    );
};

export default GCS;