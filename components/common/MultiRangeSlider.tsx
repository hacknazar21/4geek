import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
  KeyboardEvent,
} from "react";
import classnames from "classnames";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: Function;
}
let timeOut1 = null;
let timeOut2 = null;
const MultiRangeSlider: ({
  min,
  max,
  onChange,
}: {
  min: number;
  max: number;
  onChange: Function;
}) => JSX.Element = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [minInput, setMinInput] = useState(min.toLocaleString());
  const [maxVal, setMaxVal] = useState(max);
  const [maxInput, setMaxInput] = useState(max.toLocaleString());
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);
  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);
  // Get min and max values when their state changes
  useEffect(() => {
    setMinInput(minVal.toLocaleString());
    setMaxInput(maxVal.toLocaleString());
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);
  function onBlurMaxInput(event) {
    if (
      isNaN(event.target.value.replace(/[^0-9-.]/g, "")) ||
      !event.target.value ||
      event.target.value === ""
    ) {
      setMaxInput(max.toLocaleString());
      setMaxVal(max);
      return;
    }
    const value = Math.max(
      Math.min(+event.target.value.replace(/[^0-9-.]/g, ""), max),
      minVal + 1
    );
    setMaxVal(value);
    setMaxInput(value.toLocaleString());
  }
  function onBlurMinInput(event) {
    console.log(parseInt(event.target.value));
    if (
      isNaN(event.target.value.replace(/[^0-9-.]/g, "")) ||
      !event.target.value ||
      event.target.value === ""
    ) {
      setMinInput(min.toLocaleString());
      setMinVal(min);
      return;
    }

    const value = Math.min(
      Math.max(+event.target.value.replace(/[^0-9-.]/g, ""), min),
      maxVal - 1
    );
    setMinVal(value);
    setMinInput(value.toLocaleString());
  }

  return (
    <div className="price-range">
      <div className="price-range__prices-box">
        <div className="price-range__price-box">
          от
          <input
            onBlur={onBlurMinInput}
            onInput={(event: ChangeEvent<HTMLInputElement>) => {
              if (!isNaN(parseInt(event.target.value)))
                setMinInput(
                  parseInt(
                    event.target.value.replace(/[^0-9-.]/g, "")
                  ).toLocaleString()
                );
            }}
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
              if (event.key == "ArrowUp") {
                setMinInput((prevState) =>
                  (
                    parseInt(prevState.replace(/[^0-9-.]/g, "")) + 1
                  ).toLocaleString()
                );
              } else if (event.key == "ArrowDown") {
                setMinInput((prevState) =>
                  (
                    parseInt(prevState.replace(/[^0-9-.]/g, "")) - 1
                  ).toLocaleString()
                );
              }
            }}
            type="text"
            name="min"
            value={minInput}
          />
        </div>
        <div className="price-range__price-box">
          до
          <input
            onBlur={onBlurMaxInput}
            onInput={(event: ChangeEvent<HTMLInputElement>) => {
              if (!isNaN(parseInt(event.target.value)))
                setMaxInput(
                  parseInt(
                    event.target.value.replace(/[^0-9-.]/g, "")
                  ).toLocaleString()
                );
            }}
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
              if (event.key == "ArrowUp") {
                setMaxInput((prevState) =>
                  (
                    parseInt(prevState.replace(/[^0-9-.]/g, "")) + 1
                  ).toLocaleString()
                );
              } else if (event.key == "ArrowDown") {
                setMaxInput((prevState) =>
                  (
                    parseInt(prevState.replace(/[^0-9-.]/g, "")) - 1
                  ).toLocaleString()
                );
              }
            }}
            type="text"
            name="max"
            value={maxInput}
          />
        </div>
      </div>
      <div className="slider-range-container">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100,
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />
        <div className="slider-range">
          <div className="slider-range__track"></div>
          <div ref={range} className="slider-range__range"></div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
