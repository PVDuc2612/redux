'use client'
import { useSelector } from "react-redux";
import Detail from "./Detail";





const Blog = () => {
  // useSelector((state) => state.property.alias)
  // reducer:{
  //   blog: blogReducer
  // }
  const postList = useSelector((state) => state.blog.postList)
  console.log(postList)


    return (
        <div>
        <div className=" py-6 sm:py-8 lg:py-8">
          <div className="">
            <div className="mb-10 md:mb-16">
              <h2
                className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl"
              >
                Blog Today
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
                <Detail />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blog;