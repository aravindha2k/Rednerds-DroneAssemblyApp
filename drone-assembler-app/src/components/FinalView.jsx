
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/finalview.css"

const FinalView = () => {
  const location = useLocation();
  const assembledParts = location.state.assemblyParts;
  const navigate = useNavigate();

  const partStyles = {
    'Left arm with motor, Propellor': { top: '50px', left: '10px' , width: '250px', height: '350px'}, // Adjust top and left values as per your design
    "Frame with Flight Controller": { top: '50px', left: '260px', width: '180px', height: '240px' }, // Adjust top and left values as per your design
    'Camera': { top: '290px', left: '260px', width: '180px', height: '110px' }, // Adjust top and left values as per your design
    'Right arm with motor, Propellor': { top: '50px', left: '440px', width: '250px' , height: '350px'}, // Adjust top and left values as per your design
  };

  const renderAssembledImage = () => {
    return (
      <div className="assembled-image-container">
        {assembledParts.map((part, index) => (
          <img
            key={index}
            src={part.image}
            alt={part.name}
            className="assembled-part-image"
            style={partStyles[part.name]}
          />
        ))}
      </div>
    );
  };

  const handleFinish = ()=>{
    navigate("/");
  }

  return (
    <>
    <nav>
      <div className='navBar'>
        <div id='nav'>
          <h2>Final Assembled Drone View</h2>
        </div>
      </div>
    </nav>
    <div className="page4">
      {renderAssembledImage()}
    </div>
    <div className='btnContainer'>
      <p>Click Finish to go back to Main page</p>
      <button onClick={handleFinish} >Finish</button>
    </div>
    </>
    
  );
};

export default FinalView;
