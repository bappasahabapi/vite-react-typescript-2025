import CoreConcepts from "./CoreConcepts";
import Examples from "./Examples";
import Header from "./Header";


function HomePage() {
  return (
    <>
      <main>
        <Header />
        <Examples />
        <hr /> <br />
        <CoreConcepts />
      </main>
    </>
  );
}

export default HomePage;
