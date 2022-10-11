import React from 'react';

const Options = ({ quizes, option }) => {
    // console.log(quizes);
    const { correctAnswer } = quizes;
    const handleClick = (option) => {
        if (option === correctAnswer) {
            alert('!YAY YOU HAVE SUCCESSFULLY COMPLETED')
        } else {
            alert('SORRY Man .......!!!!!!')
        }
    }
    return (
        <div>
            <button onClick={() => handleClick(option)} className='border-2 border-gray-600 bg-slate-50 rounded-lg w-full py-2 flex items-center justify-center px-2 h-28 j text-sm md:text-base'><p> {option}</p></button>
        </div>
    );
};

export default Options;