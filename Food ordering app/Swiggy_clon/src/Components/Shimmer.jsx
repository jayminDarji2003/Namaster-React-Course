import React from 'react'

function Shimmer() {
    return (
        <>
            <div className='container m-auto pt-10 relative '>
                <div className='bg-slate-200 h-10 w-72 ml-10 rounded-xl'></div>
                <div className='absolute bg-slate-200 h-10 w-10 m-2 right-14 top-9 rounded-2xl'></div>
                <div className='absolute bg-slate-200 h-10 w-10 m-2 right-0 top-9 rounded-2xl'></div>
                <div className='flex justify-center gap-5 pt-20'>
                    <div className='bg-slate-200 h-40 w-40 rounded-full'></div>
                    <div className='bg-slate-200 h-40 w-40 rounded-full'></div>
                    <div className='bg-slate-200 h-40 w-40 rounded-full'></div>
                    <div className='bg-slate-200 h-40 w-40 rounded-full'></div>
                    <div className='bg-slate-200 h-40 w-40 rounded-full'></div>
                    <div className='bg-slate-200 h-40 w-40 rounded-full'></div>
                    <div className='bg-slate-200 h-40 w-40 rounded-full'></div>
                </div>
            </div>

            <div>

                <div className="container ml-40 mt-10 m-auto flex flex-wrap justify-center gap-10">
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                    <div className='bg-slate-200 h-64 w-64 mt-5 rounded-3xl'></div>
                </div>
            </div>
        </>
    )
}

export default Shimmer
