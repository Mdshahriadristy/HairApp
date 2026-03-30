import React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownUpicon = ({ size = 24, color = '#F5F5F5' }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M8 20V10M8 20L5 17M8 20L11 17M16 4V14M16 4L19 7M16 4L13 7"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DownUpicon;