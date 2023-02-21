import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const SetupImage = (props) => (
  <Svg
    width={242}
    height={337}
    viewBox="0 0 242 337"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect
      x={241.438}
      y={255.625}
      width={212.151}
      height={371.388}
      transform="rotate(133.495 241.438 255.625)"
      fill="url(#pattern0)"
    />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_30_414"
          transform="matrix(0.00189868 0 0 0.0010846 -0.140805 0)"
        />
      </Pattern>
      <Image
        id="image0_30_414"
        width={675}
        height={922}
      />
    </Defs>
  </Svg>
);
export default SetupImage;