// @flow
import React from 'react';
import logo from '../../image/logo.svg';
import './style.less';

type Props = {
  color?: string,
  dots?: string,
};

function Logo(props: Props) {
  const { color, dots } = props;
  const dotsColor = dots || color;
  return (
    <div className="logo-wrapper">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="128"
        height="60"
        viewBox="0 0 656.8 228"
        xmlSpace="preserve"
      >
        <g id="XMLID_30_" fill={color}>
          <path
            id="XMLID_31_"
            d="M9.1,125.3c0-7.6,1.3-14.8,4-21.6c2.6-6.8,6.3-12.7,11.1-17.8c4.8-5.1,10.5-9.1,17.2-12
          c6.7-2.9,14-4.4,22.1-4.4c10.3,0,19.2,2.3,26.8,7c7.6,4.7,13.4,10.9,17.3,18.8l-13.7,4.4c-3.1-5.5-7.3-9.9-12.8-13
          C75.5,83.6,69.5,82,62.8,82c-5.6,0-10.7,1.1-15.5,3.3c-4.8,2.2-8.9,5.2-12.5,9.1c-3.5,3.8-6.3,8.4-8.3,13.6c-2,5.3-3,11-3,17.3
          c0,6.1,1,11.9,3.1,17.3c2.1,5.4,4.9,10.1,8.5,14c3.6,4,7.8,7.1,12.6,9.4c4.8,2.3,9.9,3.4,15.3,3.4c3.5,0,6.9-0.5,10.3-1.5
          c3.4-1,6.6-2.3,9.5-4.1c2.9-1.7,5.4-3.7,7.5-5.9c2.1-2.2,3.5-4.6,4.4-7.1l13.9,4.2c-1.5,3.9-3.7,7.5-6.7,10.7
          c-2.9,3.3-6.3,6.1-10.3,8.5c-4,2.4-8.3,4.3-13.1,5.6c-4.8,1.3-9.8,2-14.9,2c-7.9,0-15.2-1.5-21.9-4.5c-6.7-3-12.4-7.1-17.3-12.3
          c-4.9-5.2-8.6-11.2-11.3-18C10.5,140.4,9.1,133.1,9.1,125.3z"
          />
          <path
            id="XMLID_33_"
            d="M164.8,181.9c-11.8,0-20.6-3.9-26.3-11.8c-5.8-7.8-8.6-19.5-8.6-35.1V71.4H144v61.2
          c0,24.6,8.4,36.8,25.2,36.8c4.2,0,8.3-0.7,12.3-2.1c4-1.4,7.7-3.4,11.1-6c3.4-2.6,6.5-5.8,9.2-9.4c2.7-3.6,4.9-7.7,6.6-12.3V71.4
          h14.2v90.1c0,3.9,1.7,5.8,5,5.8v12.5c-1.7,0.3-3,0.4-4.1,0.4c-1,0-1.8,0-2.2,0c-3.3-0.1-6-1.3-8.1-3.5c-2.1-2.2-3.1-5.2-3.1-9
          v-12.5c-4.7,8.5-11.1,15-19.3,19.7C182.6,179.6,174,181.9,164.8,181.9z"
          />
          <path
            id="XMLID_35_"
            d="M308.6,83.9c-9.6,0.3-17.9,2.9-25,7.9c-7.1,5-12.1,11.9-15,20.6v67.4h-14.2V71.4h13.3v26
          c4-8.3,9.4-14.8,16.2-19.6c6.8-4.7,14.1-7.1,21.9-7.1c1.1,0,2,0.1,2.7,0.2V83.9z"
          />
          <path
            id="XMLID_37_"
            d="M369,181.9c-7.9,0-15.2-1.5-21.8-4.5c-6.6-3-12.3-7.1-17.2-12.3c-4.9-5.2-8.6-11.2-11.3-18
          c-2.7-6.8-4.1-14.1-4.1-21.9c0-7.6,1.4-14.8,4.1-21.5c2.7-6.7,6.5-12.6,11.2-17.7c4.8-5.1,10.5-9.1,17.2-12.1
          c6.7-3,13.9-4.5,21.6-4.5c7.9,0,15.2,1.5,21.8,4.5c6.6,3,12.2,7,17,12.2c4.7,5.1,8.4,11,11,17.7c2.6,6.7,4,13.7,4,21.2
          c0,1.1,0,2.2,0,3.3c0,1.1-0.1,1.9-0.2,2.3h-92.8c0.4,5.8,1.8,11.2,4.1,16.1c2.3,4.9,5.2,9.2,8.8,12.8c3.6,3.6,7.7,6.4,12.4,8.4
          c4.6,2,9.6,3,14.9,3c3.5,0,6.9-0.5,10.4-1.5c3.5-1,6.7-2.3,9.6-4s5.5-3.7,7.9-6.1c2.4-2.4,4.2-5.1,5.4-8l12.3,3.3
          c-1.7,4-4,7.7-7.1,10.9c-3.1,3.3-6.6,6.1-10.6,8.5c-4,2.4-8.5,4.3-13.3,5.6C379.3,181.3,374.3,181.9,369,181.9z M409,119.9
          c-0.4-5.8-1.8-11.1-4.1-15.9c-2.3-4.8-5.2-8.9-8.7-12.4c-3.5-3.5-7.6-6.2-12.3-8.1c-4.7-1.9-9.6-2.9-14.9-2.9c-5.3,0-10.3,1-15,2.9
          c-4.7,1.9-8.8,4.7-12.4,8.1c-3.5,3.5-6.4,7.6-8.5,12.5c-2.2,4.9-3.4,10.1-3.8,15.8H409z"
          />
          <path
            id="XMLID_40_"
            d="M445,27.9h14.2v127.4c0,4,1.1,7.2,3.3,9.5c2.2,2.3,5.3,3.4,9.4,3.4c1.5,0,3.3-0.2,5.4-0.6s4-1,5.8-1.7
          l2.5,11.4c-2.6,1.1-5.9,2-9.7,2.7c-3.8,0.7-7.1,1-9.9,1c-6.5,0-11.7-1.8-15.4-5.5c-3.7-3.7-5.6-8.8-5.6-15.5V27.9z"
          />
          <path
            id="XMLID_42_"
            d="M504.9,213.2c1.1,0.1,2.2,0.2,3.2,0.3c1,0.1,2,0.1,3,0.1c2.5,0,4.5-0.3,5.9-1c1.5-0.7,2.9-2.2,4.3-4.6
          c1.4-2.4,2.9-5.8,4.7-10.2c1.7-4.4,4.2-10.4,7.4-17.9L486.2,71.4h14.6l40.2,95.3l37.3-95.3h13.5l-56.2,139.9
          c-1.5,4-4.1,7.5-7.6,10.5c-3.5,3-8.4,4.5-14.5,4.5c-1.4,0-2.7,0-4-0.1c-1.2-0.1-2.8-0.2-4.6-0.5V213.2z"
          />
        </g>
        <circle fill={dotsColor} id="XMLID_2_" cx="627.5" cy="91.3" r="15" />
        <circle fill={dotsColor} id="XMLID_4_" cx="627.5" cy="143.6" r="15" />
      </svg>
    </div>
  );
}
Logo.defaultProps = {
  color: '#fff',
};
export default Logo;
