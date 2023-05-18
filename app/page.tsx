import Container from "./components/Container";
import Blog from "./components/blog/Blog";
import AddModal from "./components/modal/Addmodal";
import Navbar from "./components/navbar/Navbar";


export default function Home() {
  return (
    <Container>
      <Blog />
      <div className="float-right">
        <AddModal />
      </div>
    </Container>
  )
}