import React from "react";
import Img from "../../src/img/placeholders/products/1.png";
function MyOrders(props) {
  return (
    <section className="profile-section orders__section">
      <div className="profile-blocks">
        <div style={{ flex: "1 1 auto" }} className="profile-block">
          <h2 className="profile-title">Мои заказы</h2>
          <div className="orders__box">
            <div className="orders__table-box">
              <table className="orders__table">
                <thead>
                  <tr>
                    <th>Номер заказа</th>
                    <th>Товар</th>
                    <th>Дата</th>
                    <th>Сумма</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>00000215</td>
                    <td>
                      <div className="orders__table-order">
                        <div className="orders__table-order-image">
                          <img src={Img.src} alt="" />
                        </div>
                        <div className="orders__table-order-name">
                          Apple Imac / 6
                        </div>
                      </div>
                    </td>
                    <td>7 ноября 2022</td>
                    <td>758 900 ₸ </td>
                  </tr>
                  <tr>
                    <td>00000215</td>
                    <td>
                      <div className="orders__table-order">
                        <div className="orders__table-order-image">
                          <img src={Img.src} alt="" />
                        </div>
                        <div className="orders__table-order-name">
                          Apple Imac / 6
                        </div>
                      </div>
                    </td>
                    <td>7 ноября 2022</td>
                    <td>758 900 ₸ </td>
                  </tr>
                  <tr>
                    <td>00000215</td>
                    <td>
                      <div className="orders__table-order">
                        <div className="orders__table-order-image">
                          <img src={Img.src} alt="" />
                        </div>
                        <div className="orders__table-order-name">
                          Apple Watch Ultra Pro Max 12S
                        </div>
                      </div>
                    </td>
                    <td>7 ноября 2022</td>
                    <td>758 900 ₸ </td>
                  </tr>
                  <tr>
                    <td>00000215</td>
                    <td>
                      <div className="orders__table-order">
                        <div className="orders__table-order-image">
                          <img src={Img.src} alt="" />
                        </div>
                        <div className="orders__table-order-name">
                          Apple Imac / 6
                        </div>
                      </div>
                    </td>
                    <td>7 ноября 2022</td>
                    <td>758 900 ₸ </td>
                  </tr>
                  <tr>
                    <td>00000215</td>
                    <td>
                      <div className="orders__table-order">
                        <div className="orders__table-order-image">
                          <img src={Img.src} alt="" />
                        </div>
                        <div className="orders__table-order-name">
                          Apple Imac / 6
                        </div>
                      </div>
                    </td>
                    <td>7 ноября 2022</td>
                    <td>758 900 ₸ </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="orders__show-all">
              Показать ещё
              <span>
                <svg
                  width="29"
                  height="29"
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyOrders;
