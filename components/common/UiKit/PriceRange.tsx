import React, { useEffect, useState } from "react";
import MultiRangeSlider from "../MultiRangeSlider";

function PriceRange({ initialMin = 0, initialMax = 0, onChange }) {
  const [min, setMin] = useState(initialMin);
  const [max, setMax] = useState(initialMax);
  useEffect(() => {
    onChange(min, max);
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
