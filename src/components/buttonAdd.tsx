import React from 'react';

interface ButtonCalculateProps {
  onClick: () => void;
}

const ButtonCalculate: React.FC<ButtonCalculateProps> = ({ onClick }) => (
  <button onClick={onClick}>คำนวณ GPA</button>
);

export default ButtonCalculate;