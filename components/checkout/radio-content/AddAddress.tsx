import React from "react";

function AddAddress(props) {
  return (
    <div className="checkout-tab__radio-content">
      <div className="checkout-tab__radio-text">
        <p>
          У вас нет добавленных адресов. Добавьте, чтобы курьер смог доставить
          вам заказ.
        </p>
      </div>
      <div className="checkout-tab__radio-settings-buttons">
        <button className="checkout-tab__radio-settings-button checkout-tab__radio-settings-button_active">
          Добавить новый адрес
        </button>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="checkout-tab__submit"
      >
        Подтвердить
      </button>
    </div>
  );
}

export default AddAddress;
