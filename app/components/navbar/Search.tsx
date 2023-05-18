
'use client'
import {BiSearch} from 'react-icons/bi'

const Search = () => {
    return (
        <div className=" border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-sm transition cursor-pointer">
            <div className=" flex flex-row items-center justify-between">
                <input className="w-[500px] outline-none px-7" />
                <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
                    <div className="border-l-[1px] pl-3 border-slate-500"> Add Guests</div>
                    <div className="p-2 bg-black rounded-full text-white">
                        <BiSearch />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search
