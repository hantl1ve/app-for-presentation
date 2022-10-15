import './main.css'
import { useRef } from 'react'
import RandomBackground from '../random-background/random-backgorund';
import AboutMe from '../aboutMe/aboutMe';
import Flexbox from '../flexbox/flexbox';

export default function Main() {

  const changeAnimation = () => {
    if (helloDiv.current.classList.contains('helloAnimation')) {
      helloDiv.current.classList.remove('helloAnimation');
    } else {
      helloDiv.current.classList.add('helloAnimation');
    }
  }

  const helloDiv = useRef();

  return (
    <div className='main'>
      <button className='animationButton' onClick={changeAnimation}>Click me, pls, for start/stop animation</button>
      <div>
        <h1 className='hello' ref={helloDiv}>Hello</h1>
      </div>
      <RandomBackground />
      <AboutMe/>
      <Flexbox />
    </div>
  )
};
