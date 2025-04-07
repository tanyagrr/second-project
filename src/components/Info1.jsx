function Info1() {
  return (
    <>
      <div className="section1">
        <div className="text">
          <h1 className="heading1">The Content Operating System</h1>
          <p className="p1">
            A fully customizable all-code backend for content-driven websites
            and apps—their builders and creators.
          </p>
          <div className="start-links">
            <a className="link start-building" href="/">
              Start building
            </a>
            <a className="link book-demo" href="/">
              Book a demo
            </a>
          </div>
          <button className="button copy-button">
            npm create sanity@latest
            <span className="copy">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#9499ad"
                class="bi bi-copy"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                />
              </svg>
            </span>
          </button>
        </div>
        <img
          alt=""
          className="pic"
          fetchpriority="high"
          loading="eager"
          decoding="async"
          data-nimg="1"
          srcset="https://cdn.sanity.io/images/3do82whm/next/a119c468f61ed6d8770a2f5aac5d41d9a3804394-3232x1868.png?w=3840&amp;q=75&amp;fit=clip&amp;auto=format 1x"
          src="https://cdn.sanity.io/images/3do82whm/next/a119c468f61ed6d8770a2f5aac5d41d9a3804394-3232x1868.png?w=3840&amp;q=75&amp;fit=clip&amp;auto=format"
        />
      </div>
      <div className="trusted-by">
        <p className="trusted-by-text">TRUSTED BY LEADERS AND INNOVATORS</p>
        <span className="line"></span>
      </div>
      <div className="companies-logos"></div>
    </>
  );
}

export default Info1;
