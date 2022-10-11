import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const Quizequestions = () => {
    const quizes = useLoaderData();

    const { name, questions } = quizes.data;

    return (
        <div>
            <div className='text-center'>
                <h1 className='mt-16 text-4xl font-bold text-cyan-500'>Quize of: {name}</h1>
                {
                    questions.map(question =>
                        <SingleQuestion
                            key={question.id}
                            quizes={question}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Quizequestions;