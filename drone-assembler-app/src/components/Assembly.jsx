
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDrag, useDrop } from 'react-dnd';
import '../styles/assemble.css'; 

const Part = ({ part, onDrag }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'PART',
    item: { name: part.name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className="part"
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      onClick={() => onDrag(part.name)}
    >
      <img src={part.image} alt={part.name} />
      <p>{part.name}</p>
    </div>
  );
};

const PartsPanel = ({ parts, onDrag }) => {
  return (
    <div className="parts-panel">
      {parts.map((part, index) => (
        <Part key={index} part={part} onDrag={onDrag} />
      ))}
    </div>
  );
};

const AssemblyArea = ({ selectedParts, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'PART',
    drop: (item) => {
      onDrop(item.name);
    },
  });

  return (
    <div className="assembly-area" ref={drop}>
      {selectedParts.map((part, index) => (
        <div key={index} className="assembled-part">
          <img src={part.image} alt={part.name} />
          <p>{part.name}</p>
        </div>
      ))}
    </div>
  );
};

const Assembly = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedParts = location.state.selectedParts;
  const [assemblyParts, setAssemblyParts] = useState([]);
  const [droppedParts, setDroppedParts] = useState([]);

  const handleDrag = (partName) => {
    if (!droppedParts.includes(partName)) {
      setDroppedParts([...droppedParts, partName]);
    }
  };

  const handleDrop = (partName) => {
    if (!assemblyParts.find((part) => part.name === partName)) {
      const partToAdd = selectedParts.find((part) => part.name === partName);
      if (partToAdd) {
        setAssemblyParts((prevParts) => [...prevParts, partToAdd]);
      }
    }
  };

  const handleClick = ()=>{
    navigate('/page4', { state: { assemblyParts } })
  }

  const handleBack = ()=>{
    navigate('/page2')
  }

  return (
    <>
    <nav>
      <div className='navBar'>
        <div id='nav'>
          <h2>Drop parts for Assembling Drone</h2>
        </div>
      </div>
    </nav>
    <div className="page3">
      <div className="parts-container">
        <PartsPanel parts={selectedParts} onDrag={handleDrag} />
      </div>
      <div className="assembly-container">
        <AssemblyArea selectedParts={assemblyParts} onDrop={handleDrop} />
      </div>
    </div>
    <div className='btnContainer'>
      <button onClick={handleBack} >Back</button>
      <p>Click Next to view your final assembled drone</p>
      <button onClick={handleClick} >Next</button>
      
    </div>
    </>
  );
};

export default Assembly;
