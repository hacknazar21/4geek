import React from "react";
import { IPoint } from "../../../interfaces/Points";
import { Simulate } from "react-dom/test-utils";
import keyUp = Simulate.keyUp;
interface Props {
  points: IPoint[];
  onPointChoose: (point_id) => void;
}
function Points({ points, onPointChoose }: Props) {
  function pointClickHandler(e) {
    const points = e.target
      .closest(".points__box-items")
      .querySelectorAll(".point_active");
    if (points.length)
      points.forEach((point) => {
        point.classList.remove("point_active");
      });
    e.target.closest(".points__item").classList.add("point_active");
  }
  return (
    <div className="points">
      <div className="points__box">
        <div className="points__city">
          Ваш город: <span>Алмата</span>
        </div>
        <div className="points__section-title">Бесплатно</div>
        <div className="points__section-title">Самовывоз из 5 магазинов:</div>
        <div className="points__box-items points__items">
          {points.map((point, id) => (
            <div
              key={point.id}
              onClick={pointClickHandler}
              className={"points__item point " + (id === 0 && "point_active")}
            >
              <div className="point__name">
                <p>{point.address}</p>
              </div>
              <div className="point__time">
                <p>время работы:</p>
                {point.working_hours}
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onPointChoose(point.id);
                }}
                className="point__button"
              >
                Забрать здесь
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Points;
