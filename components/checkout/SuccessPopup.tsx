import Popup from "../common/Popup";
// @ts-ignore
import Banner from "../../src/img/banner.png";

interface Props {
  active: boolean;
  setActive: (state: boolean) => void;
}

function SuccessPopup({ active, setActive }: Props) {
  return (
    <Popup
      active={active}
      setActive={setActive}
      className={"success-popup"}
      closeElement={<></>}
    >
      <div className="success-popup__image">
        <img src={Banner.src} alt="Баннер успешной оплаты" />
        <button
          onClick={(event) => {
            event.preventDefault();
            setActive(false);
          }}
          aria-label={"Закрыть модальное окно"}
          className="success-popup__close"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </Popup>
  );
}

export default SuccessPopup;
