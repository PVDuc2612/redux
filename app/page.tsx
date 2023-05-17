import Blog from "./components/blog/Blog";
import AddModal from "./components/modal/Addmodal";


export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <Blog />
      <div className="float-right">
        <AddModal />
      </div>
    </div>
  )
}