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
            <img  src="https://media.macphun.com/img/uploads/macphun/blog/2347/pexels-emiliano-arano-1308660.jpg" alt="Drone2" />
          </div>
          <div id='descriptionContainer'>
            <p>An unmanned aerial vehicle (UAV), commonly known as a drone, is an aircraft without any human pilot, crew, or passengers on board.</p>
            <p>An unmanned aerial vehicle (UAV) is defined as a "powered, aerial vehicle that does not carry a human operator, uses aerodynamic forces to provide vehicle lift, can fly autonomously or be piloted remotely, can be expendable or recoverable, and can carry a lethal or nonlethal payload". UAV is a term that is commonly applied to military use cases.</p>
            <p>UAVs may be classified like any other aircraft, according to design configuration such as weight or engine type, maximum flight altitude, degree of operational autonomy, operational role, etc.</p>
            <p>Traditional internal combustion and jet engines remain in use for drones requiring long range. However, for shorter-range missions electric power has almost entirely taken over. Small drones mostly use lithium-polymer batteries (Li-Po), while some larger vehicles have adopted the hydrogen fuel cell. The energy density of modern Li-Po batteries is far less than gasoline or hydrogen. However electric motors are cheaper, lighter and quieter.</p>
            <p>In most modern UAV applications, video transmission is required. So instead of having separate links for C&C, telemetry and video traffic, a broadband link is used to carry all types of data. These broadband links can leverage quality of service techniques and carry TCP/IP traffic that can be routed over the Internet.</p>
            <h3>Applications</h3>
            <p>In recent years, autonomous drones have begun to transform various application areas as they can fly beyond visual line of sight (BVLOS) while maximizing production, reducing costs and risks, ensuring site safety, security and regulatory compliance, and protecting the human workforce in times of a pandemic.</p>
            <h4>GENERAL</h4>
            <p>Recreation, Disaster relief, archeology, conservation of biodiversity and habitat, law enforcement, crime, and terrorism.</p>
            <h4>COMMERCIAL</h4>
            <p>Aerial surveillance, filmmaking, journalism, scientific research, surveying, cargo transport, mining, manufacturing, Forestry, solar farming, thermal energy, ports and agriculture.
            </p>
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