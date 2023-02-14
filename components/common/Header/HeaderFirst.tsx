import React from "react";
import Link from "next/link";

function HeaderFirst(props) {
  return (
    <section className="header-first">
      <div className="header-first__container">
        <div className="header-first__location">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0497 8.02499C16.9327 6.80742 16.5023 5.64089 15.8006 4.63901C15.0989 3.63712 14.1497 2.83402 13.0455 2.3079C11.9412 1.78179 10.7196 1.55059 9.49942 1.63683C8.27928 1.72306 7.10227 2.12379 6.08299 2.79999C5.20732 3.38553 4.4722 4.15774 3.93044 5.06115C3.38869 5.96456 3.05374 6.97675 2.94966 8.02499C2.84756 9.06637 2.97855 10.1174 3.33313 11.1019C3.68771 12.0864 4.25699 12.9795 4.99966 13.7167L9.41632 18.1417C9.49379 18.2198 9.58596 18.2818 9.68751 18.3241C9.78906 18.3664 9.89798 18.3882 10.008 18.3882C10.118 18.3882 10.2269 18.3664 10.3285 18.3241C10.43 18.2818 10.5222 18.2198 10.5997 18.1417L14.9997 13.7167C15.7423 12.9795 16.3116 12.0864 16.6662 11.1019C17.0208 10.1174 17.1518 9.06637 17.0497 8.02499ZM13.833 12.5417L9.99966 16.375L6.16632 12.5417C5.6014 11.9767 5.16866 11.2936 4.89921 10.5415C4.62977 9.78932 4.53031 8.98682 4.60799 8.19166C4.68617 7.38425 4.94279 6.60429 5.3593 5.9082C5.7758 5.2121 6.34179 4.61725 7.01632 4.16666C7.90044 3.57936 8.93825 3.26607 9.99966 3.26607C11.0611 3.26607 12.0989 3.57936 12.983 4.16666C13.6555 4.61551 14.2202 5.20773 14.6366 5.90077C15.053 6.59382 15.3108 7.37049 15.3913 8.17499C15.4715 8.97285 15.3733 9.77856 15.1038 10.5338C14.8343 11.289 14.4002 11.9749 13.833 12.5417ZM9.99966 4.99999C9.25798 4.99999 8.53295 5.21993 7.91627 5.63198C7.29958 6.04404 6.81894 6.62971 6.53511 7.31493C6.25128 8.00015 6.17702 8.75415 6.32171 9.48158C6.46641 10.209 6.82356 10.8772 7.34801 11.4016C7.87245 11.9261 8.54064 12.2832 9.26807 12.4279C9.9955 12.5726 10.7495 12.4984 11.4347 12.2145C12.1199 11.9307 12.7056 11.4501 13.1177 10.8334C13.5297 10.2167 13.7497 9.49167 13.7497 8.74999C13.7475 7.75611 13.3517 6.80356 12.6489 6.10077C11.9461 5.39799 10.9935 5.00219 9.99966 4.99999ZM9.99966 10.8333C9.58761 10.8333 9.18482 10.7111 8.84222 10.4822C8.49962 10.2533 8.23259 9.92793 8.07491 9.54725C7.91723 9.16657 7.87597 8.74768 7.95635 8.34355C8.03674 7.93943 8.23516 7.56821 8.52652 7.27685C8.81788 6.98549 9.18909 6.78708 9.59322 6.70669C9.99735 6.6263 10.4162 6.66756 10.7969 6.82524C11.1776 6.98293 11.503 7.24995 11.7319 7.59256C11.9608 7.93516 12.083 8.33795 12.083 8.74999C12.083 9.30253 11.8635 9.83243 11.4728 10.2231C11.0821 10.6138 10.5522 10.8333 9.99966 10.8333Z"
              fill="#564696"
            />
          </svg>
          <span>город Алматы</span>
        </div>
        <menu className="header-first__menu">
          <ul className="header-first__list">
            <li className="header-first__list-item">
              <Link href="/about" className="header-first__list-link">
                О компании
              </Link>
            </li>
            <li className="header-first__list-item">
              <Link href="/promotions" className="header-first__list-link">
                Акции
              </Link>
            </li>
            <li className="header-first__list-item">
              <a href="" className="header-first__list-link">
                Блог
              </a>
            </li>
            <li className="header-first__list-item">
              <a href="" className="header-first__list-link">
                Видео
              </a>
            </li>
            <li className="header-first__list-item">
              <a href="" className="header-first__list-link">
                Доставка
              </a>
            </li>
            <li className="header-first__list-item">
              <a href="tel:+77757222255" className="header-first__list-link">
                +7 (775) 722-22-55
              </a>
            </li>
          </ul>
        </menu>
      </div>
    </section>
  );
}

export default HeaderFirst;
