import React from 'react';

const Options = ({ option }) => {
    // console.log(option);
    return (
        <div>
            <p className='border-2 border-gray-400 rounded-lg w-full py-2 flex items-center justify-center px-2 h-28j text-sm md:text-base'> {option}</p>
        </div>
    );
};

export default Options;