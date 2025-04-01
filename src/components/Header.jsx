function Header() {
  return (
    <>
      <div className="header-left">
        <svg
          className="logo"
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.25"
            y="0.25"
            width="34.5"
            height="34.5"
            rx="5.75"
            fill="#ef4434"
            stroke="url(#sanity-monogram-border-gradient)"
            stroke-width="0.5"
          ></rect>
          <path
            d="M10.7797 9.06799C10.7797 12.0754 12.6701 13.8648 16.4546 14.8084L20.4649 15.7219C24.0466 16.5301 26.2277 18.5376 26.2277 21.8081C26.2556 23.2329 25.7841 24.6239 24.8922 25.7478C24.8922 22.4848 23.1741 20.7217 19.0299 19.6616L15.0923 18.7819C11.9392 18.0752 9.50545 16.4249 9.50545 12.8724C9.48886 11.5005 9.93714 10.1621 10.7797 9.06799"
            fill="white"
          ></path>
          <path
            d="M22.4279 21.0074C24.1384 22.0825 24.8884 23.5862 24.8884 25.7441C23.4726 27.526 20.9853 28.5259 18.0617 28.5259C13.1407 28.5259 9.69678 26.1463 8.93146 22.0111H13.6573C14.2657 23.9095 15.8767 24.7892 18.0273 24.7892C20.6524 24.7892 22.3973 23.4133 22.4317 20.9999"
            fill="#ffffffb3"
          ></path>
          <path
            d="M13.2364 13.5265C12.4553 13.0704 11.8145 12.4152 11.382 11.6302C10.9494 10.8452 10.7413 9.9598 10.7797 9.06799C12.1458 7.30114 14.5221 6.22223 17.4189 6.22223C22.4317 6.22223 25.3323 8.82364 26.0479 12.4852H21.5019C21.0006 11.0416 19.7454 9.91758 17.4571 9.91758C15.0119 9.91758 13.3435 11.316 13.2479 13.5265"
            fill="#ffffffb3"
          ></path>
          <defs>
            <linearGradient
              id="sanity-monogram-border-gradient"
              x1="17.5"
              y1="0"
              x2="17.5"
              y2="35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ffffffb3"></stop>
              <stop offset="0.105" stop-color="var(--red-400)"></stop>
              <stop offset="1" stop-color="var(--red-600)"></stop>
            </linearGradient>
          </defs>
        </svg>
        <nav>
          <ul>
            <li>
              <button className="nav-el button products">Products</button>
            </li>
            <li>
              <button className="nav-el button solutions">Solutions</button>
            </li>
            <li>
              <button className="nav-el button developers">Developers</button>
            </li>
            <li>
              <button className="nav-el button resources">Resources</button>
            </li>
            <li>
              <a className="nav-el link enterprise" href="/">
                Enterprise
              </a>
            </li>
            <li>
              <a className="nav-el link pricing" href="/">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <a className="link login" href="/">
          Log in
        </a>
        <a className="link contact-sales" href="/">
          Contact Sales
        </a>
        <a className="link get-started" href="/">
          Get Started
        </a>
      </div>
    </>
  );
}

export default Header;
