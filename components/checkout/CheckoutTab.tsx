import React, { useEffect, useState } from "react";

interface Props {
  children: typeof React.Children;
  isChecked?: boolean;
  isDefaultOpen?: boolean;
  title: string;
  number: number;
}
function CheckoutTab(props: Props) {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(!!props.isDefaultOpen);
  }, [props.isDefaultOpen]);
  return (
    <div className="checkout__tab checkout-tab">
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsActive((prevState) => !prevState);
        }}
        className="checkout-tab__button"
      >
        {!props.isChecked && (
          <span className="checkout-tab__button_no-checked">
            {props.number}
          </span>
        )}
        {!!props.isChecked && (
          <span className="checkout-tab__button_checked">
            <svg
              width="19"
              height="15"
              viewBox="0 0 19 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.6567 1.93985L17.7839 1.06703C17.4243 0.707474 16.8373 0.707474 16.4746 1.06703L7.32232 10.2225L2.52794 5.42808C2.16838 5.06849 1.58136 5.06849 1.2187 5.42808L0.345841 6.30091C-0.0137177 6.6605 -0.0137177 7.24749 0.345841 7.61014L6.66463 13.9289C6.84597 14.1102 7.07951 14.2024 7.31617 14.2024C7.55284 14.2024 7.78946 14.1102 7.96776 13.9289L18.6475 3.24912C19.0163 2.88342 19.0163 2.29949 18.6567 1.93985Z"
                fill="white"
              />
            </svg>
          </span>
        )}
        {props.title}
        <span
          className={
            "checkout-tab__button_arrow " +
            (isActive ? "checkout-tab__button_arrow_down" : "")
          }
        >
          <svg
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1523 14.1445C20.1523 14.4521 20.0381 14.7158 19.792 14.9443L12.9541 21.6416C12.7607 21.835 12.5146 21.9404 12.2246 21.9404C11.6445 21.9404 11.1787 21.4834 11.1787 20.8945C11.1787 20.6045 11.3018 20.3496 11.4951 20.1475L17.6562 14.1445L11.4951 8.1416C11.3018 7.93945 11.1787 7.67578 11.1787 7.39453C11.1787 6.80566 11.6445 6.34863 12.2246 6.34863C12.5146 6.34863 12.7607 6.4541 12.9541 6.64746L19.792 13.3359C20.0381 13.5732 20.1523 13.8369 20.1523 14.1445Z"
              fill="#4D505A"
            />
          </svg>
        </span>
      </button>
      <div className={"checkout-tab__content " + (isActive ? "active" : "")}>
        {props.children}
      </div>
    </div>
  );
}

export default CheckoutTab;
