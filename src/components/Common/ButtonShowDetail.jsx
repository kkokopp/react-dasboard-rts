import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonShowDetail = ({to, state, children}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(to, {state: state});
    };
    return (
        <button className=" rounded-md bg-green-300 active:border-2 active:border-green-700 p-2 me-2 mb-2 active:bg-green-400"
        onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className=" stroke-green-700 w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        </button>
    )
}

export default ButtonShowDetail;