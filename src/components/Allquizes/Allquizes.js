import React from 'react';
import { ArrowRightIcon, ArrowSmallRightIcon, BeakerIcon } from '@heroicons/react/24/solid'

const Allquizes = ({ quize }) => {
    // console.log(quize);
    const { logo, name, total } = quize
    return (
        <div>
            <div className="card card-compact bg-gray-100 shadow-xl">
                <div className='p-1'>
                    <img className='bg-cyan-900 rounded-xl' src={logo} alt="Shoes" />
                </div>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold text-cyan-500">{name}</h2>
                    <p className=' text-cyan-500'>Total Quize: {total}</p>
                    <div className="card-actions justify-end">
                        <button className='bg-primary flex gap-1 px-3 py-2 rounded-lg font-medium items-center text-white'>Start Practic <ArrowSmallRightIcon className='w-5 h-5 text-white' /></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Allquizes;