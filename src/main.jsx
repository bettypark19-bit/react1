import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Home from "./Home.jsx";

// 리액트에서 대문자로 시작하는 식별자 => 컴포넌트
//컴포넌트의 호출은 <컴포넌트/> 처럼 태그 형식으로 사용한다.
//컴포넌트는 다 src 폴더 안에서 작성한다.
const mango = document.querySelector('#mango');
createRoot(mango).render(

<div>
  <Home/>
  <Home/>
  <Home/>
  <Home/>
  </div>

)