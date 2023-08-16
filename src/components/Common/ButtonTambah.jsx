import React from "react";

const ButtonTambah = () => {
    return (
        <button className="button-tambah" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>
                Tambah
            </span>
        </button>
    )
}

export default ButtonTambah;