import React from 'react';
import img from '../../imges/header-img.png'
// import img1 from '../../imges/header2.jpg'

const Header = () => {
    return (
        <div className='relative h-96'>
            <img src={img} alt="" className='w-full h-full object-cover opacity-50' />
            <div className='absolute top-0 py-[20%] md:py-20 px-2 md:px-[15%] text-center'>
                <h1 className='text-3xl md:text-5xl font-bold text-cyan-400 '>Hellow Quize Hunters Start Your Quize Here !!!</h1>
                <p className='px-10 sm:px-[10%] text-sm md:text-lg font-medium text-cyan-100'>A quiz refers to a short test of knowledge, typically around 10 questions in length, with question formats often including multiple choice, fill in the blanks, true or false and short answer.</p>
            </div>
        </div>
    );
};

export default Header;