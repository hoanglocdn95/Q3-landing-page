"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import viTranslations from "@/locales/vi/header.json";
import enTranslations from "@/locales/en/header.json";
import { redirect } from "next/navigation";
import { cn } from "@/utils/cn";
import { Button } from "../ui/button";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FacebookDarkIcon,
  FacebookLightIcon,
  InstagramDarkIcon,
  InstagramLightIcon,
  MailLightIcon,
  PhoneLightIcon,
  XDarkIcon,
  XLightIcon,
  YoutubeDarkIcon,
  YoutubeLightIcon,
} from "../icons";

export default function Header({ locale = "vi" }: { locale?: string }) {
  const t = locale === "en" ? enTranslations : viTranslations;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [languageDropdownMobileOpen, setLanguageDropdownMobileOpen] = useState(false);

  // For mobile view only
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const languageDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns when clicking outside (for mobile)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Close language dropdown
      if (
        languageDropdownOpen &&
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setLanguageDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageDropdownOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const navItems = [
    { name: t.nav.about, href: "#", hasDropdown: false },
    {
      name: t.nav.courses,
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: t.courses.pte, href: "#" },
        { name: t.courses.ielts, href: "#" },
        { name: t.courses.toeic, href: "#" },
        { name: t.courses.conversation, href: "#" },
      ],
    },
    {
      name: t.nav.knowledge,
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: t.knowledge.pteTips, href: "#" },
        { name: t.knowledge.learningTips, href: "#" },
        { name: t.knowledge.news, href: "#" },
      ],
    },
    { name: t.nav.policy, href: "#", hasDropdown: false },
    { name: t.nav.contact, href: `/${locale}/contact/`, hasDropdown: false },
  ];

  const languages = [
    { code: "vi", name: t.language.vi },
    { code: "en", name: t.language.en },
  ];

  const handleChangeLanguage = (language: string) => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;

      const newPathname = pathname.replace(/\/(en|vi)\//, `/${language}/`);

      redirect(newPathname);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white h-12">
        <div className="section-container flex justify-between items-center h-full">
          <div className="flex items-center md:gap-6 gap-2 justify-between md:justify-start w-full md:w-auto">
            <div className="flex items-center text-sm">
              <span className="md:mr-2 mr-1">
                <MailLightIcon />
              </span>
              {t.contact.email}
            </div>
            <div className="flex items-center text-sm">
              <span className="md:mr-2 mr-1">
                <PhoneLightIcon />
              </span>
              {t.contact.phone}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 h-full">
            <Link href="#" aria-label="Youtube">
              <YoutubeLightIcon />
            </Link>
            <Link href="#" aria-label="Instagram">
              <InstagramLightIcon />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FacebookLightIcon />
            </Link>
            <Link href="#" aria-label="Twitter">
              <XLightIcon />
            </Link>

            {/* Language Dropdown */}
            <div
              className="relative group h-full flex"
              ref={languageDropdownRef}
              onMouseEnter={() => setLanguageDropdownOpen(true)}
              onMouseLeave={() => setLanguageDropdownOpen(false)}
            >
              <button
                className="flex items-center ml-2 text-sm focus:outline-none"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                aria-expanded={languageDropdownOpen}
                aria-haspopup="true"
              >
                <span>{locale === "en" ? t.language.en : t.language.vi}</span>
                <ChevronDownIcon className="text-[#8A8A8A]" />
              </button>

              {/* Language Dropdown Menu */}
              <div
                className={`absolute top-full right-0 w-40 bg-white rounded-md shadow-lg py-1 z-50 text-text-primary transition-opacity duration-150
                  ${
                    languageDropdownOpen
                      ? "opacity-100"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
              >
                {languages.map((language) => (
                  <div
                    key={language.code}
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-gray-100",
                      locale === language.code && "text-primary-hover bg-gray-100"
                    )}
                    onClick={() => {
                      handleChangeLanguage(language.code);
                    }}
                  >
                    {language.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white py-4 shadow-sm relative z-20">
        <div className="section-container flex justify-between items-center">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-mobile.png"
                alt="Q3 Language"
                width={104}
                height={46}
                className="h-[36px] w-[81px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                ref={(el) => {
                  if (el) dropdownRefs.current[item.name] = el;
                }}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`text-[#111111] hover:text-primary font-semibold flex items-center focus:outline-none ${
                        activeDropdown === item.name ? "text-primary" : ""
                      }`}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-150
                        ${
                          activeDropdown === item.name
                            ? "opacity-100 visible"
                            : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                        }`}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-[#111111] font-semibold hover:bg-gray-100 hover:text-primary"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#111111] hover:text-primary font-semibold"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="#">
                {t.cta}
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full max-w-md bg-white z-30 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto flex flex-col bg-[url('/images/sidebar-bg.png')] bg-no-repeat bg-bottom bg-contain",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-primary focus:outline-none"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
            <Image
              src="/images/logo-mobile.png"
              alt="Q3 Language"
              width={100}
              height={40}
              className="h-[36px] w-[81px]"
            />
          </div>
          <Link
            href="#"
            className="bg-primary text-white px-4 py-2 rounded-full flex items-center text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            {t.cta}
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>

        <nav className="px-6 py-4 flex-grow">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full py-2 text-[#111111] font-medium"
                      onClick={() => toggleMobileDropdown(item.name)}
                      aria-expanded={activeMobileDropdown === item.name}
                    >
                      {item.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${
                          activeMobileDropdown === item.name ? "rotate-180" : ""
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeMobileDropdown === item.name
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 flex flex-col gap-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block text-[#111111] hover:text-primary font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 text-[#111111] hover:text-primary font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Language Selector in Mobile Menu */}
          <div className="pb-6 mt-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-3">
                <Link href="#" aria-label="Youtube">
                  <YoutubeDarkIcon />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <InstagramDarkIcon />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <FacebookDarkIcon />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <XDarkIcon />
                </Link>
              </div>

              <div className="relative">
                <button
                  className="flex items-center text-text-primary focus:outline-none"
                  onClick={() => setLanguageDropdownMobileOpen(!languageDropdownMobileOpen)}
                >
                  <span>{locale === "en" ? t.language.en : t.language.vi}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`ml-1 transition-transform duration-200 ${
                      languageDropdownMobileOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Language Dropdown Menu */}
                <div
                  className={`absolute right-0 top-full mb-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 text-text-primary transition-opacity duration-150
            ${languageDropdownMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setLanguageDropdownMobileOpen(false);
                        setMobileMenuOpen(false);
                        handleChangeLanguage(language.code);
                      }}
                    >
                      {language.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
