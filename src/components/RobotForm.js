import React, { useState } from 'react';

function RobotForm({ onAdd }) {
  const [robot, setRobot] = useState({
    name: '',
    type: '',
    mass: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRobot((prevRobot) => ({
      ...prevRobot,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const robotToAdd = { ...robot, mass: robot.mass < 500 ? '' : robot.mass };
    onAdd(robotToAdd);
    setRobot({ name: '', type: '', mass: '' });
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        value={robot.name}
        onChange={handleChange}
      />
      <label htmlFor="type">Type:</label>
      <input
        type="type"
        id="type"
        name="type"
        placeholder="type"
        value={robot.type}
        onChange={handleChange}
      />
      <label htmlFor="mass">Mass:</label>
      <input
        type="type"
        id="mass"
        name="mass"
        placeholder="mass"
        value={robot.mass}
        onChange={handleChange}
      />
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default RobotForm;
