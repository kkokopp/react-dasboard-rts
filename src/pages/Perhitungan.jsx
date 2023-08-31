import React from "react";
import Gcs from "../components/Common/Gcs";
import Rts from "../components/Common/Rts";
import IdentitasPasien from "../components/Common/IdentitasPasien";

const Perhitungan = () => {
    return (
        <main className="flex-grow flex flex-col gap-4 lg:min-h-max" id="mainContent">
            <IdentitasPasien />
            <Gcs />
            <Rts />
        </main>
    )
}

export default Perhitungan;