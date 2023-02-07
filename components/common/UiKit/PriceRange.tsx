import React, { useEffect, useState } from "react";
import MultiRangeSlider from "../MultiRangeSlider";
let timer = null;

function PriceRange({ initialMin = 0, initialMax = 0, onChange }) {
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);
  useEffect(() => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      onChange(min, max);
    }, 600);
  }, [min, max]);
  return (
    <MultiRangeSlider
      min={initialMin}
      max={initialMax}
      onChange={(e) => {
        setMin(e.min);
        setMax(e.max);
      }}
    />
  );
}

export default PriceRange;
