'use client'
import { deleteUsers } from "@/store/reducer/UserReducer";
import { handleClientScriptLoad } from "next/script";
import { useDispatch, useSelector } from "react-redux";




const Blog = () => {
  const dispatch = useDispatch()
  // useSelector((state) => state.property.alias)
  // reducer:{
  //   blog: blogReducer
  // }
  // state.blog.array
  const userList = useSelector((state) => state.blog.userList)
  console.log(userList)


  const handleDelete = (e) => {
    const id  = e.target.id

    dispatch(deleteUsers(id))

    
    console.log(id)
  }


  const renderUserList = () => {
    if(userList.length > 0) {
      return userList.map((value) => {
        return (
          <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row border-gray-300" key={value.id}>
              <div
                className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48"
              >
                <img
                    src={value.image}
                    loading="lazy"
                    alt="Nơi nào có ý chí, nơi đó có con đường."
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-sm text-gray-400">{value.email}</span>
                <h2 className="text-xl font-bold text-gray-800">
                    {value.name}
                </h2>
                <p className="text-gray-500">
                    {value.phone}
                </p>
                <p className="text-gray-500">
                    {value.address}
                </p>
                <div>
                    <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button
                        type="button"
                        className="rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                    >
                        Edit</button
                    ><button
                        id = {value.id}
                        onClick={handleDelete}
                        type="button"
                        className="rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700"
                    >
                        Delete
                    </button>
                    </div>
                </div>
              </div>
              <div className="flex flex-col gap 2 p-4 lg:p-6 flex-1">
                <h1 className="text-[65px] text-center font-semibold">{value.bought}</h1>
              </div>
          </div>
        )
      })
    }
  }



    return (
        <div>
        <div className=" py-6 sm:py-8 lg:py-8">
          <div className="">
            <div className="mb-10 md:mb-16">
              <h2
                className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl select-none "
              >
                List of Customer
              </h2>
              <p
                className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg"
              >
                Don't give up. Today is hard, tomorrow will be bad. But the day after tomorrow will be sunny
              </p>
            </div>

            <div
              className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8"
            >
                {renderUserList()}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blog;