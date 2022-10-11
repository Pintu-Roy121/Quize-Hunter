import React from 'react';
import Swal from 'sweetalert2';

const Options = ({ quizes, option }) => {

    const { correctAnswer } = quizes;

    const handleClick = (option) => {
        if (option === correctAnswer) {
            Swal.fire({
                icon: 'success',
                title: 'Successful!',
                text: correctAnswer
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ohhh No......',
                text: 'Wrong Answer!!!'
            })
        }
    }

    return (
        <div>
            <button onClick={() => handleClick(option)} className='border-2 border-gray-600 bg-slate-50 rounded-lg w-full py-2 flex items-center justify-center px-2 h-28 text-lg'><p className='flex gap-2 items-center'><input type="radio" name="radio-2" className="radio-sm" /> {option}</p></button>
        </div>
    );
};

export default Options;