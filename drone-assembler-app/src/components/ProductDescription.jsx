import React from 'react'
import "../styles/prodDes.css"
import { useNavigate } from 'react-router-dom';

const ProductDescription = () => {
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate("/page2")
  }

  return (
    <>
    <nav>
        <div className='navBar'>
            <div id='nav'>
            <h2>Assemble your Drone</h2>
            </div>
        </div>
    </nav>
    <div className="product-description">
        <div className="info">
          <div id='imgContainer'>
            <img  src="https://img.freepik.com/premium-photo/highquality-aerial-shot-drone-with-digital-camera-flying_1021945-1961.jpg" alt="Drone1"/>
          </div>
          <div id='descriptionContainer'>
            <p>Welcome to the Drone Assembly Application! This interactive platform allows you to explore the intricacies of drone technology by assembling a virtual drone. Drones are sophisticated devices used for numerous purposes, from capturing stunning aerial photographs to conducting detailed surveys.</p>
            <p> In this application, you will start by learning about the drone and its components, then proceed to select the parts you wish to assemble. Using a drag-and-drop interface, you can build the drone step-by-step and finally view your assembled creation. </p>
            <h2>Drone Description</h2>
            <p>A drone, also known as an unmanned aerial vehicle (UAV), is an aircraft without a human pilot on board. Drones are used for a variety of applications including aerial photography, surveillance, agriculture, and delivery services. Modern drones are equipped with advanced technology such as GPS, sensors, cameras, and sophisticated control systems, allowing them to perform complex tasks autonomously or be controlled remotely by a user.</p>
          </div>
        </div>
        <div className='btnContainer'>
          <p>Click Start to begin assembling your custom drone!</p>
          <button onClick={handleClick} >Start</button>
        </div>
    </div>
    </>
  )
}

export default ProductDescription