"use client";

import SearchIconNavbar from "@/assets/icons/SearchIconNavbar";
import "@/styles/components/search-bar/SearchBar.scss";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar = ({ isOpen, onClose }: SearchBarProps) => {
  const searchParams = useSearchParams();
  const searchFromUrl = searchParams.get("search") || "";
  const [query, setQuery] = useState(searchFromUrl);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(searchFromUrl);
  }, [searchFromUrl]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(
        `/?search=${encodeURIComponent(query.trim())}&t=${Date.now()}`
      );
      onClose();
    } else {
      router.push("/");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="search-modal" onClick={onClose}>
      <div
        className="search-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="search-modal__form" onSubmit={handleSubmit}>
          <SearchIconNavbar className="search-modal__icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal__input"
            placeholder="Search articles, topics, etc."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search articles"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
