import "./Home.css";
import  sq  from "./assets/squirrelst.png";

function Home() {
  const text = '2교시 끝'
  const text1 = '장실다녀오셈'

  return(
    <div className="container">
      <img src="squirrel.png" alt="" />
      <h2>{text}</h2>
      <img src={sq} alt="" />
      <p>{text1}</p>
    </div>
  );
}
export default Home;