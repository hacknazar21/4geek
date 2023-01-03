import React, { useState } from "react";
import SVG from "../common/SVG";
import Popup from "../common/Popup";
import FilterMenuItem from "../category/FilterMenuItem";
import PriceRange from "../common/UiKit/PriceRange";

function FilterMobile(props) {
  const [activeFilter, setActiveFilter] = useState(false);
  return (
    <aside className="aside-filter-mobile">
      <div className="aside-filter-mobile__items">
        <button
          onClick={() => {
            setActiveFilter(true);
          }}
          className="aside-filter-mobile__item"
        >
          <span>
            <SVG
              svg={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75 5.5C7.336 5.5 7 5.836 7 6.25C7 6.664 7.336 7 7.75 7C8.164 7 8.5 6.664 8.5 6.25C8.5 5.836 8.164 5.5 7.75 5.5ZM4.75 5.5H5.62825C5.93725 4.62625 6.7705 4 7.75 4C8.7295 4 9.56275 4.62625 9.87175 5.5H15.25C15.664 5.5 16 5.836 16 6.25C16 6.664 15.664 7 15.25 7H9.87175C9.56275 7.87375 8.7295 8.5 7.75 8.5C6.7705 8.5 5.93725 7.87375 5.62825 7H4.75C4.336 7 4 6.664 4 6.25C4 5.836 4.336 5.5 4.75 5.5ZM15.25 13C15.664 13 16 13.336 16 13.75C16 14.164 15.664 14.5 15.25 14.5H14.3717C14.0628 15.3737 13.2295 16 12.25 16C11.2705 16 10.4372 15.3737 10.1282 14.5H4.75C4.336 14.5 4 14.164 4 13.75C4 13.336 4.336 13 4.75 13H10.1282C10.4372 12.1263 11.2705 11.5 12.25 11.5C13.2295 11.5 14.0628 12.1263 14.3717 13H15.25ZM11.5 13.75C11.5 14.164 11.836 14.5 12.25 14.5C12.664 14.5 13 14.164 13 13.75C13 13.336 12.664 13 12.25 13C11.836 13 11.5 13.336 11.5 13.75Z"
                    fill="#564696"
                  />
                </svg>
              }
            />
          </span>
          Фильтры
        </button>
        <button className="aside-filter-mobile__item">
          Начиная с популярных
          <span>
            <SVG
              svg={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.6603 5.8564C7.50509 6.01253 7.41797 6.22374 7.41797 6.4439C7.41797 6.66405 7.50509 6.87526 7.6603 7.0314L10.6103 10.0231L7.6603 12.9731C7.50509 13.1292 7.41797 13.3404 7.41797 13.5606C7.41797 13.7807 7.50509 13.9919 7.6603 14.1481C7.73776 14.2262 7.82993 14.2882 7.93148 14.3305C8.03303 14.3728 8.14195 14.3946 8.25196 14.3946C8.36197 14.3946 8.47089 14.3728 8.57244 14.3305C8.67399 14.2882 8.76616 14.2262 8.84363 14.1481L12.377 10.6147C12.4551 10.5373 12.5171 10.4451 12.5594 10.3435C12.6017 10.242 12.6235 10.1331 12.6235 10.0231C12.6235 9.91305 12.6017 9.80413 12.5594 9.70258C12.5171 9.60103 12.4551 9.50887 12.377 9.4314L8.84363 5.8564C8.76616 5.77829 8.67399 5.7163 8.57244 5.67399C8.47089 5.63168 8.36197 5.6099 8.25196 5.6099C8.14195 5.6099 8.03303 5.63168 7.93148 5.67399C7.82993 5.7163 7.73776 5.77829 7.6603 5.8564Z"
                    fill="#212121"
                  />
                </svg>
              }
            />
          </span>
        </button>
      </div>
      <Popup
        className={"modal-full"}
        active={activeFilter}
        setActive={setActiveFilter}
        closeElement={
          <button
            onClick={() => {
              setActiveFilter(false);
            }}
            className="mobile-modal-header"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z"
                fill="#4D505A"
              />
            </svg>
            <h2 className="mobile-modal-header__title">Фильтры</h2>
          </button>
        }
      >
        <FilterMenuItem title={"Цена"} className="aside-filter__menu-item">
          <PriceRange
            initialMin={20000}
            initialMax={2000000}
            onChange={() => {}}
          />
        </FilterMenuItem>
        <FilterMenuItem title={"Категории"} className="aside-filter__menu-item">
          <button>Apple iPhone 14 Pro Max</button>
          <button>Apple iPhone 14 Pro</button>
          <button>Apple iPhone 14</button>
          <button>Apple iPhone 14 Plus</button>
          <button>Apple iPhone 13 Pro Max</button>
          <button>Apple iPhone 13 Pro</button>
          <button>Apple iPhone 13</button>
          <button>Apple iPhone 12 Plus</button>
          <button>Apple iPhone 12 Pro Max</button>
          <button>Apple iPhone 12 Pro</button>
          <button>Apple iPhone 12</button>
          <button>Apple iPhone 11 Plus</button>
          <button>Apple iPhone 11 Pro Max</button>
          <button>Apple iPhone 11 Pro</button>
          <button>Apple iPhone 11</button>
        </FilterMenuItem>
        <div className="aside-filter-mobile__container">
          <div className="aside-filter-mobile__actions">
            <button
              onClick={() => {
                setActiveFilter(false);
              }}
              className="aside-filter-mobile__action"
            >
              Показать результаты (389)
            </button>
            <button
              onClick={() => {
                setActiveFilter(false);
              }}
              className="aside-filter-mobile__action"
            >
              Сбросить фильтры
            </button>
          </div>
        </div>
      </Popup>
    </aside>
  );
}

export default FilterMobile;
