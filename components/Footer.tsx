"use client";

import "../styles/components/footer.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      {/* Top Separator */}
      <div className="footer__separator">
        <span className="footer__separator-marker">+</span>
        <div className="footer__separator-line"></div>
        <span className="footer__separator-marker">+</span>
      </div>

      <div className="footer__content">
        {/* Left Section - Brand & Subscribe */}
        <div className="footer__brand-section">
          <h2 className="footer__logo">
            READO<span className="footer__logo-tm">™</span>
          </h2>
          <h3 className="footer__tagline">Never miss an update</h3>

          <form
            className="footer__subscribe-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Subscribe with your email"
              className="footer__subscribe-input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="footer__subscribe-btn">
              SUBSCRIBE
            </button>
          </form>

          <p className="footer__privacy-note">
            By subscribing to Reado's newsletter, you agree to our{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </div>

        {/* Right Section - Navigation Columns */}
        <div className="footer__nav-section">
          {/* Pages Column */}
          <div className="footer__nav-column-wrapper">
            <div className="footer__nav-column-separator">
              <span className="marker top">+</span>
              <div className="line"></div>
              <span className="marker bottom">+</span>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Pages</h4>
              <ul className="footer__nav-list">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/blog">BLOG</Link>
                </li>
                <li>
                  <Link href="/authors">AUTHORS</Link>
                </li>
                <li>
                  <Link href="/categories">CATEGORIES</Link>
                </li>
                <li>
                  <Link href="/podcast">PODCAST</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT/CONTACT</Link>
                </li>
                <li>
                  <Link href="/subscribe">SUBSCRIBE</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories Column */}
          <div className="footer__nav-column-wrapper">
            <div className="footer__nav-column-separator">
              <span className="marker top">+</span>
              <div className="line"></div>
              <span className="marker bottom">+</span>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Categories</h4>
              <ul className="footer__nav-list">
                <li>
                  <Link href="/category/finance">FINANCE</Link>
                </li>
                <li>
                  <Link href="/category/health">HEALTH</Link>
                </li>
                <li>
                  <Link href="/category/business">BUSINESS</Link>
                </li>
                <li>
                  <Link href="/category/food">FOOD</Link>
                </li>
                <li>
                  <Link href="/category/travel">TRAVEL</Link>
                </li>
                <li>
                  <Link href="/category/lifestyle">LIFESTYLE</Link>
                </li>
                <li>
                  <Link href="/category/tech">TECH</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials Column */}
          <div className="footer__nav-column-wrapper">
            <div className="footer__nav-column-separator">
              <span className="marker top">+</span>
              <div className="line"></div>
              <span className="marker bottom">+</span>
            </div>
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Socials</h4>
              <ul className="footer__nav-list">
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    TWITTER/X
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    PINTEREST
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="footer__separator">
        <span className="footer__separator-marker">+</span>
        <div className="footer__separator-line"></div>
        <span className="footer__separator-marker">+</span>
      </div>

      <div className="footer__bottom">
        <div className="footer__credits-left">
          Designed by <strong>Webestica</strong>, Powered by{" "}
          <strong>Framer</strong>
        </div>
        <div className="footer__copyright">
          © 2025 Reado. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
