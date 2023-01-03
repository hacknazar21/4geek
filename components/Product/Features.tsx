import React from "react";

function Features(props) {
  return (
    <section className="product__features product-features">
      <div className="product-features__box">
        <div className="product-features__section">
          <h3 className="product-features__section-title">
            Общие характеристики
          </h3>
          <div className="product-features__section-items">
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">Артикул</div>
              <div className="product-features__section-item-value">9913</div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Страна произврдитель
              </div>
              <div className="product-features__section-item-value">Китай</div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Срок службы товара
              </div>
              <div className="product-features__section-item-value">3 года</div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">Артикул</div>
              <div className="product-features__section-item-value">9913</div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Страна произврдитель
              </div>
              <div className="product-features__section-item-value">Китай</div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Срок службы товара
              </div>
              <div className="product-features__section-item-value">3 года</div>
            </div>
          </div>
        </div>
        <div className="product-features__section">
          <h3 className="product-features__section-title">Конструкция</h3>
          <div className="product-features__section-items">
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Влагозащита
              </div>
              <div className="product-features__section-item-value">
                Рейтинг IP68 по стандарту IEC 60529 (допускается погружение в
                воду на глубину до 4 метров длительностью до 30 минут)
              </div>
            </div>
          </div>
        </div>
        <div className="product-features__section">
          <h3 className="product-features__section-title">
            Память и процессор
          </h3>
          <div className="product-features__section-items">
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Процессор
              </div>
              <div className="product-features__section-item-value">
                A13 Bionic
              </div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Объем встроенной памяти
              </div>
              <div className="product-features__section-item-value">9913</div>
            </div>
          </div>
        </div>
        <div className="product-features__section">
          <h3 className="product-features__section-title">Связь</h3>
          <div className="product-features__section-items">
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Интерфейсы
              </div>
              <div className="product-features__section-item-value">
                Wi-Fi 802.11ax, Bluetooth 5.0, NFC
              </div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Стандарт сотовой связи
              </div>
              <div className="product-features__section-item-value">
                GSM 900/1800/1900, 3G, 4G LTE, LTE-A, VoLTE
              </div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Поддержка диапазонов LTE
              </div>
              <div className="product-features__section-item-value">
                FDD‑LTE (Bands 1, 2, 3, 4, 5, 7, 8, 12, 13, 14, 17, 18, 19, 20,
                25, 26, 29, 30, 66, 71), TD‑LTE (Bands 34, 38, 39, 40, 41, 42,
                46, 48)
              </div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Спутниковая навигация
              </div>
              <div className="product-features__section-item-value">
                GPS, ГЛОНАСС
              </div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Система A-GPS
              </div>
              <div className="product-features__section-item-value">есть</div>
            </div>
            <div className="product-features__section-item">
              <div className="product-features__section-item-name">
                Профиль A2DP
              </div>
              <div className="product-features__section-item-value">есть</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
