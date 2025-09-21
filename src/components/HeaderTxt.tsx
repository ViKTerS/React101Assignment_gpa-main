import React from 'react';

interface HeaderTxtProps {
  title: string;
  txtsize: string;
  status: boolean;
}

const HeaderTxt: React.FC<HeaderTxtProps> = ({ title, txtsize, status }) => {
  return (
    <h2 style={{ fontSize: `${txtsize}px`, color: status ? 'blue' : 'black' }}>
      {title}
    </h2>
  );
};

export default HeaderTxt;