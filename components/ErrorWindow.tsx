import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";
interface Props {
  text: string;
  show: boolean;
  setShow: (state: boolean) => void;
}
function ErrorWindow({ text, show, setShow }: Props) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      timeout={800}
      classNames="error-window"
      unmountOnExit
    >
      <div ref={nodeRef} className="error-window">
        <div className="error-window__wrapper">
          <div className="error-window__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="36"
              viewBox="0 0 41 36"
              fill="none"
            >
              <path
                d="M40.9149 35.0357L21.0528 0.320363C20.939 0.121972 20.7298 0 20.5032 0C20.2766 0 20.0671 0.121972 19.9536 0.320363L10.0162 17.678L0.0850974 35.0357C-0.0280104 35.2341 -0.0283644 35.4784 0.0840337 35.6768C0.196787 35.8755 0.405275 35.9986 0.631482 36H40.3685C40.5947 35.9986 40.8032 35.8755 40.916 35.6768C41.0284 35.4784 41.028 35.2341 40.9149 35.0357ZM22.4062 30.857H18.5938V26.9997H22.4062V30.857ZM22.4062 24.4282H18.5938V14.5729H22.4062V24.4282Z"
                fill="#EC6646"
              />
            </svg>
          </div>
          <div className="error-window__text">
            <p>{text}</p>
          </div>
          <button
            aria-label="Закрыть окно ошибки"
            className="error-window__close"
            onClick={() => {
              setShow(false);
            }}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

export default ErrorWindow;
