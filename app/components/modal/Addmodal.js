'use client'
import { useState } from "react";

import {IoMdClose} from 'react-icons/io'
import Input from "../Input";
import { useDispatch  } from "react-redux";
import { addUsers, deleteUsers } from "@/store/reducer/UserReducer";

const AddModal = () => {
    const dispatch  = useDispatch()
    const [show, setShow] = useState(false)
    const [getInput, setGetInput] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        image: "",
        id:"",
        bought: "",
    })

    const handleValues = (event) => {
        const nameInput = event.target.name;
        const value = event.target.value;
        setGetInput((state) => ({ ...state, [nameInput]: value }));
      }

    const handleShow = () => {
        setShow(!show)
    }

    const handleKeyDown = (e) => {
            if(e.key  === 'Escape'){
            setShow(!show)
        }
    }

    const handleSubmit = (e) =>{  
        const date = Date.now()
        const random  = Math.floor(Math.random() * 100)
        e.preventDefault()  
        setShow(!show)
        const data = {
            name: getInput.name,
            email: getInput.email,
            phone: getInput.phone,
            address: getInput.address,
            image: getInput.image,
            id: date.toString(),
            bought: random
        }
        dispatch(addUsers(data))

        setGetInput({
            name: "",
            email:"",
            phone: "",
            address: "",
            image: "",
            id: "",
            bought: "",
        })
    }

    


    return (
      <div>
            <button onClick={handleShow} data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              Create User
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
                                    <Input label="Name..." value={getInput.name} name="name" onChange={handleValues}/>     
                                    <Input label="Email..."  value={getInput.email} name="email" onChange={handleValues}/>     
                                    <Input label="Phone..."  value={getInput.phone} name="phone" onChange={handleValues}/>     
                                    <Input label="Address..."  value={getInput.address} name="address" onChange={handleValues}/>  
                                    <Input label="Image URL..."  value={getInput.image} name="image" onChange={handleValues} />     


                                    <div>
                                    <button
                                        onClick={handleSubmit}
                                        className="group relative inline-flex items-center justify-center overflow-hidden mr-[10px] rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800"
                                        type="submit"
                                    >
                                        <span
                                        className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
                                        >Create</span>
                                        
                                    </button>
                                    <button
                                        type="submit"
                                        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
                                    >
                                        <span
                                        className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
                                        >Update</span>
                                        </button>
                                    <button
                                        
                                        type="reset"
                                        className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400"
                                    >
                                        <span
                                        className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
                                        >Cancel</span>
                                        
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
