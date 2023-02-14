import React from "react";
import Popup from "../common/Popup";
import Banner from "../../src/img/banner.png";
interface Props {
  active: boolean;
  setActive: (state: boolean) => void;
}

function SuccessPopup({ active, setActive }) {
  return (
    <Popup
      active={active}
      setActive={setActive}
      className={"success-popup"}
      closeElement={<></>}
    >
      <div className="success-popup__image">
        <img src={Banner.src} alt="Баннер успешной оплаты" />
      </div>
    </Popup>
  );
}

export default SuccessPopup;
