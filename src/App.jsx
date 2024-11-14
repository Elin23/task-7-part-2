import { useEffect, useState } from 'react'
import './App.css'
import { IoHappyOutline } from "react-icons/io5";
import PopUpComponent from './PopUpComponent/PopUpComponent';

function App() {
  const [count, setCount] = useState(0);
  const [isBtnDisable, setIsBtnDisable] = useState(false);
  const [eventValue, setEventValue] = useState("Welcome to My React App")
  const [showPopup, setShowPopup] = useState(false);
  const [bgColor, setBgColor] = useState("#242424");

  useEffect(() => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }, []);

  const popUp = (value) => {
    setEventValue("Count Value = " + value);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  }

  const handleCountIncrement = () => {
    const increment = count >= 100 ? 100 : count >= 10 ? 10 : 1;
    
    if (count + increment === 1000) {
      popUp(1000);
      setCount(1000);
      setIsBtnDisable(true);
      return;
    }
    
    if ((count + increment) === 10 || 
        (count + increment) === 100) {
      popUp(count + increment);
    }
    
    if (count + increment > 1000) {
      setIsBtnDisable(true);
      return;
    }
    
    setCount(count + increment);
  };

  const handleCountDecrement = () => {
    const decrement = count > 100 ? 100 : count > 10 ? 10 : 1;

    if ((count - decrement) === 10 || 
        (count - decrement) === 100 || 
        (count - decrement) === 1000) {
      popUp(count - decrement);
    }

    if (count - decrement < 0) {
      setCount(0);
      setIsBtnDisable(false);
    } else {
      setCount(count - decrement);
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    
    if (count >= 1000) {
      setBgColor('#6C5B7B');
    } else if (count >= 100) {
      setBgColor('#ffdde1');
    } else if (count >= 10) {
      setBgColor('#D3CCE3');
    } else {
      setBgColor('#242424');
    }
    
    root.style.setProperty('background-color', bgColor);
  }, [count, bgColor]);

  return (
    <>
      {showPopup && <PopUpComponent event={eventValue} />}
      <div className="card">
        <button onClick={handleCountIncrement} disabled={isBtnDisable}>
          Increment:  {count}
        </button>
        {isBtnDisable &&
          <button onClick={handleCountDecrement} style={{marginLeft: "10px"}}>
            Decrement:  {count}
          </button>}
      </div>
      <p className="read-the-docs">
        Click the button to test the increment and decrement functionality <IoHappyOutline />
      </p>
    </>
  )
}

export default App
