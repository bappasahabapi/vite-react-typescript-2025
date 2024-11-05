
import BookHeader from "./book/BookHeader";
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
        <BookHeader />
      </div>
      {/* <div className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px] text-white">
        <BookHeader />
      </div> */}
      
      <Footer />
    </div>
  );
}

export default App;
