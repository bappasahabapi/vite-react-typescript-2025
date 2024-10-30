import logo from "../../../src/assets/react-core-concepts.png";
import logo1 from "../../../src/assets/bappa1.png";
import logo2 from "../../../src/assets/favicon.png";



const img: string[] = [logo, logo1, logo2];

const description: string[] = [
  "Dynamic Content",
  "Fundamentals",
  "Core",
  "JSX",
] ;

//get random image
function getRanddomIndex(max: number) {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
  const dynamicImg = img[getRanddomIndex(2)];
  const dynamicDescription = description[getRanddomIndex(4)];

  return (
    <header>
      <img src={dynamicImg} alt="bappa" />
      <h1>Header Componet</h1>
      <p>React Essentials v18.2</p>
      <p>
        <span>{dynamicDescription} </span> React Concept for every app |
        component, jsx, props, state
      </p>
      <hr />
    </header>
  );
};

export default Header;
