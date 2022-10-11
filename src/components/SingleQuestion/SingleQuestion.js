import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Options from '../Options/Options'

const SingleQuestion = ({ quizes }) => {
    // console.log(quizes);
    const { question, options } = quizes;
    // console.log(options);
    return (
        <div className='lg:mx-60 mt-12 flex flex-col gap-12'>
            <div className="bg-gray-50 px-10 lg:py-5 relative rounded-lg">
                <EyeIcon className='w-7 h-7 text-blue-600 absolute top-5 right-10' />
                <h2 className="card-title justify-around mt-7 text-cyan-500">Quize: {question}</h2>
                <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-6 justify-between my-10'>
                    {
                        options.map((option, index) => <Options
                            key={index}
                            option={option}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleQuestion;