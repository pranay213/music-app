import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const BgImage = (props) => (
  <Svg
    width={390}
    height={844}
    viewBox="0 0 390 844"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect y={-5} width={390} height={849} fill="url(#pattern0)" />
    <Rect y={-5} width={390} height={849} fill="black" fillOpacity={0.7} />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_31_426"
          transform="matrix(0.000796824 0 0 0.000366032 -0.455128 0)"
        />
      </Pattern>
      <Image
        id="image0_31_426"
        width={2732}
        height={2732}
      />
    </Defs>
  </Svg>
);
export default BgImage;