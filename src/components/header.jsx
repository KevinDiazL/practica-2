import { useState, useEffect } from 'react'
export default function Headers({ setSearch }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const inputValue = formdata.get('item-input').trim()
        if (inputValue === "") {
            alert("EL item no puede estar vació");
            return;
        }
        console.log(inputValue)
        setSearch(inputValue)

    }

    return (
        <>
            <form className='flex flex-row' onSubmit={handleSubmit}>
                <input type="search" name='item-input' id="" className='border-2 w-68 ' />
                <button type='submit' >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTt2Mj8dwtrYLcbqDn-nDazo9p_uU7lQ8phQ&s" className="w-8 p-1 border-2" alt="lupa" />
                </button>
            </form>
            <br />
        </>
    )
}

/* export function Input({ search, setSearch }) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        const inputValue = formdata.get('item-input').trim()

        console.log(inputValue)
        setSearch(inputValue)
        e.target.reset()
    }


    return (
        <>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">

                    <input name='item-input' type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                </div>
            </form>
        </>
    )
} */