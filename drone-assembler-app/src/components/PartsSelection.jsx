import React, { useState } from 'react'
import '../styles/partsSelect.css'
import FLC from '../assets/Frame with Flight controller.jpg'
import leftarm from '../assets/left arms.jpg'
import rightarm from '../assets/right arms.jpg'
import camera from '../assets/camera.jpg'
import battery from '../assets/battery.jpeg'
import { useNavigate } from 'react-router-dom'

const PartsSelection = () => {
    const [selectedParts, setSelectedParts] = useState([]);
    const navigate = useNavigate();

    const partsData = [
        {
            name: 'Frame with Flight Controller',
            image: FLC,
        },
        {
            name: 'Left arm with motor, Propellor',
            image: leftarm,
        },
        {
            name: 'Right arm with motor, Propellor',
            image: rightarm,
        },
        {
            name: 'Camera',
            image: camera,
        },
        {
            name: 'Battery',
            image: battery,
        },
    ];

    const handleSelectPart = (part) => {
        setSelectedParts((prev) => {
            const isSelected = prev.some(p => p.name === part.name);
            if (isSelected) {
                return prev.filter(p => p.name !== part.name);
            } else {
                return [...prev, part];
            }
        });
        console.log(selectedParts);
    };

    const handleClick = ()=>{
        navigate('/page3', { state: { selectedParts } })
    }

    const handleBack = () => {
        navigate("/")
    }

    return (
        <>
            <nav>
                <div className='navBar'>
                    <div id='nav'>
                        <h2>Select Parts for your Drone</h2>
                    </div>
                </div>
            </nav>
            <div className="parts-list">
                {partsData.map((part) => (
                    <div
                        key={part.name}
                        className={`part-card ${selectedParts.some(p => p.name === part.name) ? 'selected' : ''}`}
                        onClick={() => handleSelectPart(part)}
                    >
                        <img src={part.image} alt={part.name} />
                        <p>{part.name}</p>
                    </div>
                ))}
            </div>
            <div className='btnContainer'>
                <button onClick={handleBack} >Back</button>
                <p>Click Next to begin assembling your drone with selected parts</p>
                <button onClick={handleClick} >Next</button>
            </div>
        </>
    )
}

export default PartsSelection