import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import TaskBoard from "./task/TaskBoard";


function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center  !bg-[#191D26] ">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
