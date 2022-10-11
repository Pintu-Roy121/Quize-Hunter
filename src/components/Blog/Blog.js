import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto my-20 flex flex-col gap-10'>
            <div className='text-center bg-slate-300 rounded-lg shadow-md shadow-cyan-600 '>
                <h1 className='text-2xl md:text-4xl font-bold text-black rounded-top-lg shadow-md shadow-cyan-600 py-3'>What is the purpose of React Router?</h1>
                <p className='text-base md:text-lg font-medium text-justify text-black w-4/5 mx-auto pb-8 mt-5'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. </p>
            </div>
            <div className='text-center bg-slate-300 rounded-lg shadow-md shadow-cyan-600 '>
                <h1 className='text-2xl md:text-4xl font-bold text-black rounded-top-lg shadow-md shadow-cyan-600 py-3'>How does context api work?</h1>
                <p className='text-base md:text-lg font-medium text-justify text-black w-4/5 mx-auto pb-8 mt-5'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='text-center bg-slate-300 rounded-lg shadow-md shadow-cyan-600 '>
                <h1 className='text-2xl md:text-4xl font-bold text-black rounded-top-lg shadow-md shadow-cyan-600 py-3'>About useRef() hook in Reactjs. </h1>
                <p className='text-base md:text-lg font-medium text-justify text-black w-4/5 mx-auto pb-8 mt-5'><span className='bg-orange-100 px-2'>useRef()</span> returns a mutable ref object whose <span className='bg-orange-100 px-2'>.current</span> property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.Essentially, useRef is like a “box” that can hold a mutable value in its .current property. <br />If you pass a ref object to React with <span className='bg-orange-100 px-2'> (ref=myRef)</span>, React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
        </div>
    );
};

export default Blog;