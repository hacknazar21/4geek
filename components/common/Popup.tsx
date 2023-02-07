import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
interface Props {
  active: boolean;
  setActive: Function;
  children: typeof React.Children;
  buttons?: JSX.Element;
  className: string;
  closeElement?: JSX.Element;
}
function Popup(props: Props) {
  const nodeRef = useRef(null);
  useEffect(() => {
    if (props.active) {
      document.documentElement.classList.add("lock");
    } else {
      document.documentElement.classList.remove("lock");
    }
  }, [props.active]);
  return (
    <div
      className={
        "modal " + props.className + " " + (props.active ? "open" : "")
      }
      onClick={() => {
        props.setActive(false);
      }}
      ref={nodeRef}
    >
      <div
        className="modal__content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {props.closeElement}
        {props.children}
        {!props.closeElement && (
          <button
            onClick={(event) => {
              event.preventDefault();
              props.setActive(false);
            }}
            className="modal__close"
            aria-label={"Закрыть модальное окно"}
          >
            <span></span>
            <span></span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Popup;
