import React, { useContext } from "react";
import Link from "next/link";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import SVG from "../common/SVG";
import { useRouter } from "next/router";
import HeaderMobile from "../common/HeaderMobile";
interface Link {
  display_name: string;
  link: string;
  icon?: JSX.Element;
}
function Profile(props) {
  const router = useRouter();
  const { profile } = useContext(ProfileContext);
  const { logout } = useContext(AuthContext);
  const links: Link[] = [
    {
      display_name: "Мой профиль",
      link: "/profile/my-profile",
      icon: (
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
                d="M10.0012 9.78131C12.2248 9.78131 14.0276 7.59171 14.0276 4.89069C14.0276 2.1896 13.4358 0 10.0012 0C6.56661 0 5.97461 2.1896 5.97461 4.89069C5.97461 7.59171 7.77741 9.78131 10.0012 9.78131Z"
                fill="#564696"
              />
              <path
                d="M17.6055 17.3773C17.6076 17.3322 17.6062 17.0645 17.6055 17.3773V17.3773Z"
                fill="#564696"
              />
              <path
                d="M17.5961 17.0512C17.5215 12.3459 16.907 11.0052 12.2045 10.1565C12.2045 10.1565 11.5426 11 9.99973 11C8.45687 11 7.79482 10.1565 7.79482 10.1565C3.14367 10.9959 2.49179 12.3168 2.40607 16.8983C2.39905 17.2724 2.39579 17.2921 2.39453 17.2487C2.39482 17.33 2.39516 17.4806 2.39516 17.743C2.39516 17.743 3.5147 19.9999 9.99973 19.9999C16.4846 19.9999 17.6043 17.743 17.6043 17.743C17.6043 17.5744 17.6044 17.4571 17.6046 17.3774C17.6033 17.4042 17.6008 17.3522 17.5961 17.0512Z"
                fill="#564696"
              />
            </svg>
          }
        />
      ),
    },
    {
      display_name: "Изменить пароль",
      link: "/profile/change-password",
      icon: (
        <SVG
          svg={
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1885_1288)">
                <path
                  d="M17.0642 9.19779H16.2182H16.218V6.21801C16.2179 3.06514 13.6529 0.5 10.4999 0.5C7.34716 0.5 4.78201 3.06514 4.78201 6.21805V9.19783H3.93585C3.26696 9.19783 2.72461 9.74009 2.72461 10.409V11.1459V19.552V20.2888C2.72461 20.9577 3.26691 21.5 3.93585 21.5H10.5H17.0642C17.7331 21.5 18.2753 20.9577 18.2753 20.2888V19.552V11.1459V10.409C18.2753 9.74005 17.7331 9.19779 17.0642 9.19779ZM11.7892 17.8739H9.2108L9.67227 15.675C9.24071 15.4003 8.95245 14.9208 8.95245 14.3714C8.95245 13.5167 9.64536 12.8239 10.5 12.8239C11.3546 12.8239 12.0474 13.5167 12.0474 14.3714C12.0474 14.9208 11.7592 15.4003 11.3277 15.6749L11.7892 17.8739ZM14.1777 9.19779H10.5H6.82246H6.82224V6.21801C6.82224 4.18991 8.47197 2.54023 10.5 2.54023C12.5281 2.54023 14.1777 4.18995 14.1777 6.21801V9.19779Z"
                  fill="#C7C7C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1885_1288">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
        />
      ),
    },
    {
      display_name: "Адрес доставки",
      link: "/profile/delivery-address",
      icon: (
        <SVG
          svg={
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1885_1296)">
                <path
                  d="M10.4997 0.5C6.26631 0.5 2.82227 4.00594 2.82227 8.31534C2.82227 10.7258 4.04142 13.6516 6.44596 17.0114C8.20562 19.4702 9.9396 21.2238 10.0126 21.2973C10.1467 21.4323 10.3231 21.5 10.4998 21.5C10.6713 21.5 10.843 21.4361 10.976 21.3079C11.0492 21.2375 12.7875 19.5549 14.5505 17.1301C16.957 13.8201 18.1772 10.8544 18.1772 8.3153C18.1771 4.00594 14.7329 0.5 10.4997 0.5ZM10.4997 11.6893C8.43001 11.6893 6.74628 10.0056 6.74628 7.93594C6.74628 5.86633 8.43006 4.18255 10.4997 4.18255C12.5693 4.18255 14.2531 5.86633 14.2531 7.93594C14.2531 10.0056 12.5692 11.6893 10.4997 11.6893Z"
                  fill="#C7C7C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1885_1296">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
        />
      ),
    },
    {
      display_name: "Мои заказы",
      link: "/profile/my-orders",
      icon: (
        <SVG
          svg={
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1885_728)">
                <path
                  d="M14.627 4.42548H18.5502L14.627 0.52301V4.42548Z"
                  fill="#C7C7C7"
                />
                <path
                  d="M13.3967 5.65603V0.5H2.44727V21.5H18.5527V5.65603H13.3967ZM5.97613 14.5957V13.3652H15.0238V14.5957H5.97613ZM12.6763 16.6055V17.836H8.32366V16.6055H12.6763ZM15.0238 10.125V11.3555H5.97613V10.125H15.0238ZM5.97613 8.11525V6.88478H10.5V8.11525H5.97613Z"
                  fill="#C7C7C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1885_728">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
        />
      ),
    },
    {
      display_name: "Бонусы",
      link: "/profile/bonuses",
      icon: (
        <SVG
          svg={
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1885_2093)">
                <path
                  d="M20.4134 10.464C20.9455 9.94548 21.1333 9.18452 20.9037 8.47839C20.6744 7.77198 20.0752 7.26679 19.3399 7.15994L14.8 6.50029C14.5695 6.46666 14.3704 6.32199 14.2674 6.11331L12.2371 1.99911C11.9083 1.33322 11.2427 0.919579 10.5 0.919579C9.75725 0.919579 9.09161 1.33322 8.76287 1.99911C8.76287 1.99915 6.73256 6.11327 6.73256 6.11327C6.62953 6.32203 6.43039 6.4667 6.2003 6.50025L1.66011 7.1599C0.924785 7.26679 0.325588 7.77198 0.0964335 8.47802C-0.133377 9.18452 0.0544335 9.94552 0.586447 10.4638L3.87172 13.6665C4.03836 13.8289 4.11441 14.0628 4.07515 14.2919L3.29947 18.8141C3.17412 19.5462 3.46939 20.2721 4.07007 20.7084C4.67087 21.145 5.45262 21.2015 6.11035 20.856L10.171 18.7211C10.377 18.6129 10.6229 18.6129 10.8287 18.721L14.8897 20.856C15.5474 21.2016 16.3291 21.145 16.9299 20.7084C17.5306 20.2721 17.8259 19.5462 17.7005 18.8141L16.9248 14.2922C16.8856 14.0628 16.9616 13.8289 17.1283 13.6664L20.4134 10.464Z"
                  fill="#C7C7C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1885_2093">
                  <rect
                    width="21"
                    height="21"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
        />
      ),
    },
    {
      display_name: "Рассылки",
      link: "/profile/mailing",
      icon: (
        <SVG
          svg={
            <svg
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1885_1307)">
                <path
                  d="M11.1074 10.6529C10.9091 10.7769 10.686 10.8265 10.4876 10.8265C10.2893 10.8265 10.0661 10.7769 9.86777 10.6529L0 4.62812V12.6364C0 14.3471 1.38843 15.7356 3.09917 15.7356H17.9008C19.6116 15.7356 21 14.3471 21 12.6364V4.62812L11.1074 10.6529Z"
                  fill="#C7C7C7"
                />
                <path
                  d="M17.9013 0.264465H3.09961C1.6368 0.264465 0.39713 1.30579 0.0996094 2.69422L10.5128 9.04132L20.9013 2.69422C20.6037 1.30579 19.3641 0.264465 17.9013 0.264465Z"
                  fill="#C7C7C7"
                />
              </g>
              <defs>
                <clipPath id="clip0_1885_1307">
                  <rect
                    width="21"
                    height="15.5077"
                    fill="white"
                    transform="translate(0 0.246155)"
                  />
                </clipPath>
              </defs>
            </svg>
          }
        />
      ),
    },
  ];
  return (
    <>
      <HeaderMobile title={"Личный кабинет"} />
      <div className="profile-menu-box">
        <menu className="profile-menu">
          <ul className="profile-menu__list">
            <li className="profile-menu__list-item">
              <div className="profile-menu__avatar">
                {!!profile?.placeholder_avatar && (
                  <div className="profile-menu__avatar-image">
                    <img src={profile?.placeholder_avatar} alt="" />
                  </div>
                )}
                <div className="profile-menu__avatar-name">
                  {profile?.first_name} {profile?.last_name}
                </div>
              </div>
            </li>
          </ul>
          <ul className="profile-menu__list">
            {links.map((link: Link, id) => (
              <li key={id + link} className="profile-menu__list-item">
                <Link href={link.link} className="profile-menu__list-link">
                  <span>{link.icon}</span>
                  <p>{link.display_name}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="profile-menu__list">
            <li className="profile-menu__list-item">
              <button onClick={logout} className="profile-menu__list-link exit">
                <span>
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1885_1154)">
                      <path
                        d="M13.1249 11.8757C12.641 11.8757 12.2499 12.2678 12.2499 12.7507V16.2507C12.2499 16.7328 11.8579 17.1257 11.3748 17.1257H8.74985V4.0008C8.74985 3.25355 8.27385 2.58593 7.55817 2.33744L7.2991 2.25076H11.3748C11.8579 2.25076 12.2499 2.64361 12.2499 3.12586V5.75084C12.2499 6.23373 12.641 6.62577 13.1249 6.62577C13.6087 6.62577 13.9998 6.23373 13.9998 5.75084V3.12586C13.9998 1.67863 12.8221 0.500885 11.3748 0.500885H1.96873C1.9354 0.500885 1.90753 0.515785 1.87516 0.520111C1.83303 0.516586 1.79281 0.500885 1.75003 0.500885C0.784896 0.500885 0 1.28562 0 2.25076V18.0006C0 18.7479 0.476001 19.4155 1.19168 19.664L6.45749 21.4193C6.63597 21.4744 6.81349 21.5007 6.99998 21.5007C7.96512 21.5007 8.74985 20.7158 8.74985 19.7507V18.8757H11.3748C12.8221 18.8757 13.9998 17.698 13.9998 16.2507V12.7507C13.9998 12.2678 13.6087 11.8757 13.1249 11.8757Z"
                        fill="#E84D28"
                      />
                      <path
                        d="M20.7436 8.63151L17.2435 5.1316C16.9934 4.88135 16.6171 4.80604 16.2899 4.94159C15.9636 5.07729 15.75 5.3966 15.75 5.7502V8.37517H12.2501C11.767 8.37517 11.375 8.76706 11.375 9.25011C11.375 9.73316 11.767 10.125 12.2501 10.125H15.75V12.75C15.75 13.1036 15.9636 13.4229 16.2899 13.5586C16.6171 13.6942 16.9934 13.6189 17.2435 13.3688L20.7436 9.8687C21.0857 9.52664 21.0857 8.97357 20.7436 8.63151Z"
                        fill="#E84D28"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1885_1154">
                        <rect
                          width="21"
                          height="21"
                          fill="white"
                          transform="translate(0 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <p>Выйти</p>
              </button>
            </li>
          </ul>
        </menu>
      </div>
    </>
  );
}

export default Profile;
