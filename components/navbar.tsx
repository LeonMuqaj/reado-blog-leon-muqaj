"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import "../styles/components/navbar.scss";
import SearchIconNavbar from "../assets/icons/SearchIconNavbar";
import MailIcon from "../assets/icons/MailIcon";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const searchFromUrl = searchParams.get("search") || "";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/", label: "BLOG" },
    { href: "/", label: "PODCAST" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link href="/" className="navbar__logo">
            READO<span className="navbar__logo-tm">™</span>
          </Link>

          <div className="navbar__right navbar__right--desktop">
            <div className="navbar__nav">
              <Link href="/" className="navbar__link">
                HOME
              </Link>
              <Link href="/" className="navbar__link navbar__link--with-bullet">
                <span className="navbar__bullet">■</span>
                BLOG
              </Link>
              <Link href="/" className="navbar__link navbar__link--with-badge">
                PODCAST
                <span className="navbar__badge">5</span>
              </Link>
            </div>

            <div
              className="navbar__search"
              onClick={openSearchModal}
              style={{ cursor: "pointer" }}
            >
              <SearchIconNavbar className="navbar__search-icon" />
              <span
                className="navbar__search-input"
                style={{ color: searchFromUrl ? "#000" : "#333" }}
              >
                {searchFromUrl || "Search all"}
              </span>
            </div>

            <button className="navbar__subscribe-btn">
              SUBSCRIBE
              <MailIcon className="navbar__subscribe-icon" />
            </button>
          </div>

          <div className="navbar__mobile-actions">
            <div className="navbar__right navbar__right--mobile">
              <div
                className="navbar__search navbar__search--tablet"
                onClick={openSearchModal}
                style={{ cursor: "pointer" }}
              >
                <SearchIconNavbar className="navbar__search-icon" />
                <span
                  className="navbar__search-input"
                  style={{ color: searchFromUrl ? "#000" : "#333" }}
                >
                  {searchFromUrl || "Search"}
                </span>
              </div>

              <div className="navbar__search-mobile-wrapper">
                <button
                  className="navbar__search-toggle-btn"
                  onClick={openSearchModal}
                  aria-label="Open search"
                  type="button"
                >
                  <SearchIconNavbar className="navbar__search-icon" />
                </button>
              </div>

              <button
                className="navbar__subscribe-icon-btn"
                aria-label="Subscribe"
              >
                <MailIcon className="navbar__subscribe-icon" />
              </button>
            </div>

            <button
              className="navbar__hamburger"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="navbar-menu"
            >
              <div
                className={`navbar__hamburger-icon ${
                  isMenuOpen ? "navbar__hamburger-icon--open" : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="navbar__overlay" onClick={closeMenu} />
          )}

          {isMenuOpen && (
            <div
              className="navbar__hamburger-menu"
              id="navbar-menu"
              role="menu"
            >
              <div className="navbar__hamburger-content">
                <div className="navbar__mobile-nav">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="navbar__mobile-link"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <button className="navbar__subscribe-btn navbar__subscribe-btn--mobile">
                  SUBSCRIBE
                  <MailIcon className="navbar__subscribe-icon" />
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="navbar-separator">
          <span className="separator-symbol">+</span>
          <div className="separator-line"></div>
          <span className="separator-symbol">+</span>
        </div>
      </nav>

      <SearchBar isOpen={isSearchModalOpen} onClose={closeSearchModal} />
    </>
  );
};

export default Navbar;
