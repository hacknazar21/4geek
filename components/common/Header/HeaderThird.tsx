import React, { useState } from "react";
import ProductCard from "../UiKit/ProductCard";
import Link from "next/link";
import { ICategory } from "../../../interfaces/Category";
interface Props {
  categories: ICategory[];
}

let timer;
function HeaderThird(props: Props) {
  const [isHover, setIsHover] = useState();
  return (
    <section className="header-categories">
      <div className="header-categories__container">
        <menu className="header-categories__menu header-menu">
          {isHover && <div className="hover-background"></div>}
          <ul className="header-menu__list">
            {props.categories.map((category) => (
              <li
                onMouseEnter={(event) => {
                  if (!timer)
                    timer = setTimeout(() => {
                      setIsHover(true);
                      document.documentElement.classList.add("lock");
                      event.target
                        .closest("li.header-menu__list-item")
                        .classList.add("hover");
                    }, 300);
                }}
                onMouseLeave={(event) => {
                  if (!!timer) {
                    clearTimeout(timer);
                    timer = null;
                    setIsHover(false);
                    document.documentElement.classList.remove("lock");
                    event.target
                      .closest("li.header-menu__list-item")
                      .classList.remove("hover");
                  }
                }}
                key={category.id}
                className="header-menu__list-item"
              >
                <Link
                  href="/catalog/[link]"
                  as={"/catalog/" + category.lookup_slug}
                  className="header-menu__link"
                >
                  {category.name}
                  {!!category.children && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.1666 7.64168C14.0104 7.48647 13.7992 7.39935 13.5791 7.39935C13.3589 7.39935 13.1477 7.48647 12.9916 7.64168L9.99992 10.5917L7.04992 7.64168C6.89378 7.48647 6.68257 7.39935 6.46242 7.39935C6.24226 7.39935 6.03105 7.48647 5.87492 7.64168C5.79681 7.71915 5.73481 7.81132 5.69251 7.91287C5.6502 8.01442 5.62842 8.12334 5.62842 8.23335C5.62842 8.34336 5.6502 8.45228 5.69251 8.55383C5.73481 8.65538 5.79681 8.74754 5.87492 8.82501L9.40825 12.3583C9.48572 12.4365 9.57789 12.4984 9.67944 12.5408C9.78098 12.5831 9.88991 12.6048 9.99992 12.6048C10.1099 12.6048 10.2188 12.5831 10.3204 12.5408C10.4219 12.4984 10.5141 12.4365 10.5916 12.3583L14.1666 8.82501C14.2447 8.74754 14.3067 8.65538 14.349 8.55383C14.3913 8.45228 14.4131 8.34336 14.4131 8.23335C14.4131 8.12334 14.3913 8.01442 14.349 7.91287C14.3067 7.81132 14.2447 7.71915 14.1666 7.64168Z"
                        fill="white"
                        fillOpacity="0.5"
                      />
                    </svg>
                  )}
                </Link>
                {!!category.children && (
                  <div className="header-categories__submenu-box">
                    <menu className="header-categories__submenu">
                      <ul className="header-categories-submenu__list">
                        {category.children?.map((child) => (
                          <li
                            key={child.id}
                            className="header-categories-submenu__list-item"
                          >
                            <Link
                              href="/catalog/[link]"
                              as={"/catalog/" + child.lookup_slug}
                              className="header-categories-submenu__link"
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </menu>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </menu>
      </div>
    </section>
  );
}
export default HeaderThird;
