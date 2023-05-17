'use client'
import { useState } from "react";

import {IoMdClose} from 'react-icons/io'

const AddModal = () => {
    const [show, setShow] = useState(false)
    const [getInput, setGetInput] = useState({
        customer: "",
        inventory: "",
        rental_date: "",
        return_date: "",
        staff: "",
    })

    console.log(show)


    const handleValues = (event) => {
        const nameInput = event.target.name;
        const value = event.target.value;
        setGetInput((state) => ({ ...state, [nameInput]: value }));
      }

    const handleShow = () => {
        setShow(!show)
    }

    const handleKeyDown = (e) => {
        console.log(e.key)
        if(e.key  === 'Escape'){
            setShow(!show)
        }
    }

    const handleSubmit = (e) =>{    
        setShow(!show)
    }


    return (
      <div>
            <button onClick={handleShow} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              Create Blog
            </button>

            {show && (
                <div 
                    tabIndex={-1}
                    onKeyDown={handleKeyDown}
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70 bottom-0 top-0 left-0 right-0">

                <div className="relative w-fill md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
                    <div className={`
                        translate
                        duration-300
                        h-full
                    
                    `}>
                        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-center p-6 rounded-t justify-center relative ">
                                <button 
                                    onClick={() => setShow(false)}
                                    className="p-1 border-0 hover:opacity-70 transition absolute left-9">
                                    <IoMdClose size={18} />
                                </button>
                                <div className="text-lg font-semibold">
                                    Create Infomation 
                                </div>
                            </div>

                            <div className=" p-6 mx-4">
                                <form>
                                    <div className="mb-6">
                                    <label
                                        htmlFor="title"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Title</label
                                    ><input
                                        type="text"
                                        id="title"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                        placeholder="Title"
                                        required=""
                                        value=""
                                    />
                                    </div>
                                    <div className="mb-6">
                                    <label
                                        htmlFor="featuredImage"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Featured Image</label
                                    ><input
                                        type="text"
                                        id="featuredImage"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                        placeholder="Url image"
                                        required=""
                                        value=""
                                    />
                                    </div>
                                    <div className="mb-6">
                                    <div>
                                        <label
                                        htmlFor="description"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                                        >Description</label
                                        ><textarea
                                        id="description"
                                        rows="3"
                                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                        placeholder="Your description..."
                                        required=""
                                        ></textarea>
                                    </div>
                                    </div>
                                    <div className="mb-6">
                                    <label
                                        htmlFor="publishDate"
                                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                                        >Publish Date</label
                                    ><input
                                        type="datetime-local"
                                        id="publishDate"
                                        className="block w-56 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                        placeholder="Title"
                                        required=""
                                        value=""
                                    />
                                    </div>
                                    <div className="mb-6 flex items-center">
                                    <input
                                        id="publish"
                                        type="checkbox"
                                        className="h-4 w-4 focus:ring-2 focus:ring-blue-500"
                                    /><label htmlFor="publish" className="ml-2 text-sm font-medium text-gray-900"
                                        >Publish</label
                                    >
                                    </div>
                                    <div>
                                    <button
                                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
                                        type="submit"
                                    >
                                        <span
                                        className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
                                        >Publish Post</span
                                        >
                                    </button>
                                    <button
                                        type="submit"
                                        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
                                    >
                                        <span
                                        className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
                                        >Update Post</span
                                        ></button
                                    ><button
                                        type="reset"
                                        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
                                    >
                                        <span
                                        className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
                                        >Cancel</span
                                        >
                                    </button>
                                    </div>
                                </form>
                            </div>
                            <div className="flex flex-col gap-2 p-6">
                            </div>
                        </div>
                    </div>
                </div>



                </div>
            )}



      </div>
    );
}

export default AddModal;
