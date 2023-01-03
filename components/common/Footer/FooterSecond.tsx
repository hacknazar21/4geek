import React from "react";

function FooterSecond(props) {
  return (
    <section className="footer-second">
      <div className="footer-second__container">
        <div className="footer-second__credits">
          <p>2021 Relume. All right reserved.</p>
        </div>
        <menu className="footer-second__menu">
          <ul className="footer-second__menu-list">
            <li className="footer-second__menu-item">
              <a href="" className="footer-second__menu-link">
                Privacy Policy
              </a>
            </li>
            <li className="footer-second__menu-item">
              <a href="" className="footer-second__menu-link">
                Terms of Service
              </a>
            </li>
            <li className="footer-second__menu-item">
              <a href="" className="footer-second__menu-link">
                Cookies Settings
              </a>
            </li>
          </ul>
        </menu>
        <div className="footer-second__social">
          <a href="" className="footer-second__social-link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.5999 11.9999C21.5999 17.3015 17.3015 21.5999 11.9999 21.5999C6.6983 21.5999 2.3999 17.3015 2.3999 11.9999C2.3999 6.6983 6.6983 2.3999 11.9999 2.3999C17.3015 2.3999 21.5999 6.6983 21.5999 11.9999ZM12.3439 9.4871C11.4103 9.8751 9.5439 10.6791 6.7455 11.8983C6.2911 12.0791 6.0527 12.2559 6.0311 12.4287C5.9943 12.7215 6.3607 12.8367 6.8583 12.9927C6.9263 13.0143 6.9967 13.0359 7.0687 13.0599C7.5591 13.2191 8.2183 13.4055 8.5607 13.4127C8.8719 13.4191 9.2191 13.2911 9.6023 13.0287C12.2167 11.2631 13.5663 10.3711 13.6511 10.3519C13.7111 10.3383 13.7943 10.3207 13.8503 10.3711C13.9063 10.4207 13.9007 10.5151 13.8951 10.5407C13.8583 10.6951 12.4231 12.0303 11.6791 12.7215C11.4471 12.9367 11.2831 13.0895 11.2495 13.1247C11.1743 13.2023 11.0975 13.2767 11.0239 13.3479C10.5679 13.7863 10.2271 14.1159 11.0431 14.6535C11.4351 14.9119 11.7487 15.1255 12.0615 15.3383C12.4031 15.5711 12.7439 15.8031 13.1855 16.0927C13.2975 16.1663 13.4047 16.2423 13.5095 16.3167C13.9071 16.6007 14.2647 16.8551 14.7063 16.8151C14.9623 16.7911 15.2279 16.5503 15.3623 15.8311C15.6799 14.1303 16.3055 10.4471 16.4503 8.9287C16.4591 8.80263 16.4537 8.67597 16.4343 8.5511C16.4227 8.45025 16.3736 8.35745 16.2967 8.2911C16.1823 8.1975 16.0047 8.1775 15.9247 8.1791C15.5639 8.1855 15.0103 8.3783 12.3439 9.4871Z"
                fill="#898D9E"
              />
            </svg>
          </a>
          <a href="" className="footer-second__social-link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0001 8.87579C10.2798 8.87579 8.87589 10.2797 8.87589 12C8.87589 13.7203 10.2798 15.1242 12.0001 15.1242C13.7204 15.1242 15.1243 13.7203 15.1243 12C15.1243 10.2797 13.7204 8.87579 12.0001 8.87579ZM21.3704 12C21.3704 10.7063 21.3821 9.42423 21.3095 8.13283C21.2368 6.63283 20.8946 5.30158 19.7978 4.2047C18.6985 3.10548 17.3696 2.76564 15.8696 2.69298C14.5759 2.62033 13.2939 2.63204 12.0025 2.63204C10.7087 2.63204 9.42667 2.62033 8.13527 2.69298C6.63527 2.76564 5.30402 3.10783 4.20714 4.2047C3.10792 5.30392 2.76808 6.63283 2.69542 8.13283C2.62277 9.42658 2.63449 10.7086 2.63449 12C2.63449 13.2914 2.62277 14.5758 2.69542 15.8672C2.76808 17.3672 3.11027 18.6985 4.20714 19.7953C5.30636 20.8945 6.63527 21.2344 8.13527 21.307C9.42902 21.3797 10.711 21.368 12.0025 21.368C13.2962 21.368 14.5782 21.3797 15.8696 21.307C17.3696 21.2344 18.7009 20.8922 19.7978 19.7953C20.897 18.6961 21.2368 17.3672 21.3095 15.8672C21.3845 14.5758 21.3704 13.2938 21.3704 12ZM12.0001 16.807C9.33995 16.807 7.19308 14.6602 7.19308 12C7.19308 9.33986 9.33995 7.19298 12.0001 7.19298C14.6603 7.19298 16.8071 9.33986 16.8071 12C16.8071 14.6602 14.6603 16.807 12.0001 16.807ZM17.004 8.11876C16.3829 8.11876 15.8814 7.6172 15.8814 6.99611C15.8814 6.37501 16.3829 5.87345 17.004 5.87345C17.6251 5.87345 18.1267 6.37501 18.1267 6.99611C18.1269 7.14359 18.0979 7.28966 18.0416 7.42595C17.9852 7.56224 17.9026 7.68607 17.7983 7.79036C17.694 7.89464 17.5701 7.97733 17.4339 8.03368C17.2976 8.09004 17.1515 8.11895 17.004 8.11876Z"
                fill="#898D9E"
              />
            </svg>
          </a>
          <a href="" className="footer-second__social-link">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1602 6.84024C17.2802 2.40024 11.4002 1.08024 6.84022 3.84024C2.40022 6.60024 0.960224 12.6002 3.84022 17.0402L4.08022 17.4002L3.12022 21.0002L6.72022 20.0402L7.08022 20.2802C8.64022 21.1202 10.3202 21.6002 12.0002 21.6002C13.8002 21.6002 15.6002 21.1202 17.1602 20.1602C21.6002 17.2802 22.9202 11.4002 20.1602 6.84024ZM17.6402 16.0802C17.1602 16.8002 16.5602 17.2802 15.7202 17.4002C15.2402 17.4002 14.6402 17.6402 12.2402 16.6802C10.2002 15.7202 8.52022 14.1602 7.32022 12.3602C6.60022 11.5202 6.24022 10.4402 6.12022 9.36024C6.12022 8.40024 6.48022 7.56024 7.08022 6.96024C7.32022 6.72024 7.56022 6.60024 7.80022 6.60024H8.40022C8.64022 6.60024 8.88022 6.60024 9.00022 7.08024C9.24022 7.68024 9.84022 9.12024 9.84022 9.24024C9.96022 9.36024 9.96022 9.60024 9.84022 9.72024C9.96022 9.96025 9.84022 10.2002 9.72022 10.3202C9.60022 10.4402 9.48022 10.6802 9.36022 10.8002C9.12022 10.9202 9.00022 11.1602 9.12022 11.4002C9.60022 12.1202 10.2002 12.8402 10.8002 13.4402C11.5202 14.0402 12.2402 14.5202 13.0802 14.8802C13.3202 15.0002 13.5602 15.0002 13.6802 14.7602C13.8002 14.5202 14.4002 13.9202 14.6402 13.6802C14.8802 13.4402 15.0002 13.4402 15.2402 13.5602L17.1602 14.5202C17.4002 14.6402 17.6402 14.7602 17.7602 14.8802C17.8802 15.2402 17.8802 15.7202 17.6402 16.0802Z"
                fill="#898D9E"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FooterSecond;
