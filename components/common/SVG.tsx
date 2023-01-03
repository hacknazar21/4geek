import React from "react";

interface SVG {
  svg: JSX.Element;
}
function Svg(props: SVG) {
  return props.svg;
}

export default Svg;
