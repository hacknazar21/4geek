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
    <CSSTransition
      nodeRef={nodeRef}
      in={props.active}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div
        className={"modal " + props.className}
        onClick={() => {
          props.setActive(false);
          window.location.hash = "";
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
                window.location.hash = "";
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
    </CSSTransition>
  );
}

export default Popup;
