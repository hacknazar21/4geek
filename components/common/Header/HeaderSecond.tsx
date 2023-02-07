import React, { useContext, useEffect, useRef, useState } from "react";
import Logo from "../../../src/img/logo.png";
import Link from "next/link";
import Search from "../Search";
import { BasketContext } from "../../../context/BasketContext";
import { AuthContext } from "../../../context/AuthContext";
import { useMobile } from "../../../hooks/hooks.mobile";

function HeaderSecond(props) {
  const { basket } = useContext(BasketContext);
  const [quantity, setQuantity] = useState(0);
  const { token } = useContext(AuthContext);
  const [authLink, setAuthLink] = useState("/auth/login");
  const { isMobile } = useMobile();
  const headerRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  let scrollPos = 0;

  useEffect(() => {
    if (!!headerRef.current) {
      window.addEventListener("scroll", scrollHandler, false);
      return () => {
        window.removeEventListener("scroll", scrollHandler, false);
      };
    }
  }, [headerRef]);
  useEffect(() => {
    if (!!token) {
      if (!isMobile) setAuthLink("/profile/my-profile");
      else setAuthLink("/profile/");
    }
  }, [token]);
  useEffect(() => {
    if (!!basket) {
      let quantityData = 0;
      basket.lines.map((line) => {
        quantityData += line.quantity;
      });
      setQuantity(quantityData);
    }
  }, [basket]);

  async function scrollHandler(event: any) {
    const st = window.scrollY;
    if (st > scrollPos) {
      headerRef?.current?.classList.remove("scroll-up");
      headerRef?.current?.classList.add("scroll-down");
    } else {
      headerRef?.current?.classList.remove("scroll-down");
      headerRef?.current?.classList.add("scroll-up");
    }
    scrollPos = st;
    if (window.scrollY > 0 && !scroll) {
      await setScroll(true);
      headerRef?.current?.classList.add("scroll");
      document.body.classList.add("scroll");
    } else if (window.scrollY <= 0) {
      await setScroll(false);
      headerRef?.current?.classList.remove("scroll");
      document.body.classList.remove("scroll");
      headerRef?.current?.classList.remove("scroll-down");
      headerRef?.current?.classList.remove("scroll-up");
    }
  }

  return (
    <section ref={headerRef} className="header-second">
      <div className="header-second__container">
        <Link href="/" className="header-second__logo">
          <img src={Logo.src} alt="" />
        </Link>
        <Search className="header-second__main-search" />
        <div className="header-second__actions">
          <div className="header-second__links">
            <div className="header-second__link">
              <Link href={authLink}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M14 13.8477C16.127 13.8477 17.8496 11.9668 17.8496 9.66406C17.8496 7.39648 16.127 5.59473 14 5.59473C11.8818 5.59473 10.1416 7.42285 10.1504 9.68164C10.1592 11.9756 11.873 13.8477 14 13.8477ZM14 12.3096C12.7871 12.3096 11.7588 11.1582 11.7588 9.68164C11.75 8.24023 12.7783 7.13281 14 7.13281C15.2305 7.13281 16.2412 8.22266 16.2412 9.66406C16.2412 11.1406 15.2217 12.3096 14 12.3096ZM8.51562 22.0215H19.4756C20.9961 22.0215 21.7256 21.5381 21.7256 20.501C21.7256 18.084 18.7109 14.8672 14 14.8672C9.28906 14.8672 6.26562 18.084 6.26562 20.501C6.26562 21.5381 6.99512 22.0215 8.51562 22.0215ZM8.24316 20.4834C8.03223 20.4834 7.95312 20.4131 7.95312 20.2549C7.95312 18.9102 10.124 16.4053 14 16.4053C17.8672 16.4053 20.0381 18.9102 20.0381 20.2549C20.0381 20.4131 19.959 20.4834 19.748 20.4834H8.24316Z"
                    fill="#1C1C1E"
                  />
                </svg>
              </Link>
            </div>
            <div className="header-second__link">
              <Link href="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1598 4.99998C19.0998 3.93719 17.6946 3.28852 16.1981 3.17115C14.7017 3.05378 13.2126 3.47545 11.9998 4.35998C10.7274 3.41362 9.14378 2.98449 7.56771 3.15902C5.99164 3.33355 4.54023 4.09876 3.50576 5.30057C2.47129 6.50237 1.93061 8.0515 1.99259 9.636C2.05457 11.2205 2.71461 12.7227 3.83979 13.84L10.0498 20.06C10.5698 20.5718 11.2702 20.8586 11.9998 20.8586C12.7294 20.8586 13.4298 20.5718 13.9498 20.06L20.1598 13.84C21.3274 12.6652 21.9827 11.0763 21.9827 9.41998C21.9827 7.76371 21.3274 6.17472 20.1598 4.99998ZM18.7498 12.46L12.5398 18.67C12.4691 18.7413 12.385 18.798 12.2923 18.8366C12.1996 18.8753 12.1002 18.8952 11.9998 18.8952C11.8994 18.8952 11.7999 18.8753 11.7072 18.8366C11.6146 18.798 11.5305 18.7413 11.4598 18.67L5.24979 12.43C4.46555 11.6283 4.0264 10.5514 4.0264 9.42998C4.0264 8.30852 4.46555 7.23164 5.24979 6.42998C6.04894 5.64097 7.12676 5.19855 8.24979 5.19855C9.37281 5.19855 10.4506 5.64097 11.2498 6.42998C11.3428 6.52371 11.4534 6.59811 11.5752 6.64887C11.6971 6.69964 11.8278 6.72578 11.9598 6.72578C12.0918 6.72578 12.2225 6.69964 12.3444 6.64887C12.4662 6.59811 12.5768 6.52371 12.6698 6.42998C13.4689 5.64097 14.5468 5.19855 15.6698 5.19855C16.7928 5.19855 17.8706 5.64097 18.6698 6.42998C19.4648 7.22113 19.9184 8.29217 19.9333 9.41367C19.9483 10.5352 19.5234 11.6179 18.7498 12.43V12.46Z"
                    fill="#212121"
                  />
                </svg>
              </Link>
            </div>
            <div id={"basket"} className="header-second__link">
              <Link href="/basket">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7393 18.6553H20.9697C21.3828 18.6553 21.7607 18.3301 21.7607 17.8643C21.7607 17.4072 21.3828 17.082 20.9697 17.082H10.9414C10.5195 17.082 10.2559 16.792 10.1943 16.3438L10.0625 15.4297H21.04C22.3848 15.4297 23.0967 14.6123 23.29 13.2764L23.9492 8.87305C23.9668 8.75879 23.9844 8.60938 23.9844 8.5127C23.9844 7.99414 23.624 7.64258 23.0176 7.64258H8.92871L8.79688 6.69336C8.68262 5.92871 8.375 5.54199 7.39941 5.54199H4.38477C3.94531 5.54199 3.55859 5.92871 3.55859 6.37695C3.55859 6.83398 3.94531 7.2207 4.38477 7.2207H7.13574L8.49805 16.5195C8.69141 17.8467 9.39453 18.6553 10.7393 18.6553ZM22.1562 9.21582L21.6025 13.1182C21.5322 13.5664 21.2949 13.8477 20.8643 13.8477L9.83398 13.8564L9.15723 9.21582H22.1562ZM11.46 23.0674C12.3125 23.0674 12.998 22.3818 12.998 21.5293C12.998 20.6768 12.3125 19.9912 11.46 19.9912C10.6074 19.9912 9.92188 20.6768 9.92188 21.5293C9.92188 22.3818 10.6074 23.0674 11.46 23.0674ZM19.5811 23.0674C20.4336 23.0674 21.1104 22.3818 21.1104 21.5293C21.1104 20.6768 20.4336 19.9912 19.5811 19.9912C18.7285 19.9912 18.0342 20.6768 18.0342 21.5293C18.0342 22.3818 18.7285 23.0674 19.5811 23.0674Z"
                    fill="#1C1C1E"
                  />
                </svg>
              </Link>
              <div className="header-second__link-text">
                <div className="header-second__link-title">Корзина</div>
                <div className="header-second__link-subtitle">
                  {quantity > 0 ? `${quantity} товаров` : "Нет товаров"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSecond;
