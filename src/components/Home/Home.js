import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allquizes from '../Allquizes/Allquizes';
import Header from '../Header/Header';

const Home = () => {
    const quizes = useLoaderData();
    const allQuize = quizes.data;
    // console.log(allQuize);
    return (
        <div>
            <Header />
            <div className='w-4/5 mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    allQuize.map(quize => <Allquizes
                        key={quize.id}
                        quize={quize}
                    />)
                }
            </div>
        </div>
    );
};

export default Home;