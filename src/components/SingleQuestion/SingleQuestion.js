import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Options from '../Options/Options'
import Swal from 'sweetalert2';

const SingleQuestion = ({ quizes }) => {

    const { question, options, correctAnswer } = quizes;

    const showCorrectAnswer = () => {
        Swal.fire({
            title: 'Correct Answer is:',
            text: correctAnswer
        })
    }

    return (
        <div className='lg:mx-60 mt-12 flex flex-col gap-12'>
            <div className="bg-gray-100 px-10 lg:py-5 relative rounded-lg  shadow-lg shadow-cyan-800">
                <EyeIcon onClick={showCorrectAnswer} className='w-7 h-7 text-blue-600 absolute top-5 right-10' />
                <h2 className="card-title justify-around mt-7 text-cyan-500">{question}</h2>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 justify-between my-10'>
                    {
                        options.map((option, index) => <Options
                            quizes={quizes}
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