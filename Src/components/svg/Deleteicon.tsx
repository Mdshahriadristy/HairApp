import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Deleteicon = ({ size = 18, color = '#F5F5F5' }) => {
  return (
    <Svg width={size * (14 / 18)} height={size} viewBox="0 0 14 18" fill="none">
      <Path
        d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
        fill={color}
      />
    </Svg>
  );
};

export default Deleteicon;