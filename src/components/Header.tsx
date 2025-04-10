"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Facebook,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import viTranslations from "@/locales/vi/header.json";
import enTranslations from "@/locales/en/header.json";
import { redirect } from "next/navigation";
import { cn } from "@/utils/cn";
import MailIcon from "@/public/icons/mail.svg";

export default function Header({ locale = "vi" }: { locale?: string }) {
  const t = locale === "en" ? enTranslations : viTranslations;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  // For mobile view only
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

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
    { name: t.nav.contact, href: "#", hasDropdown: false },
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
          <div className="flex items-center gap-6">
            <div className="flex items-center text-sm">
              <span className="mr-2">
                <MailIcon />
              </span>
              {t.contact.email}
            </div>
            <div className="hidden md:flex items-center text-sm">
              <span className="mr-2">
                <Phone size={16} />
              </span>
              {t.contact.phone}
            </div>
          </div>
          <div className="flex items-center gap-3 h-full">
            <Link href="#" aria-label="Facebook">
              <Facebook size={16} />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Youtube size={16} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={16} />
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
                    languageDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
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
                      locale === language.code &&
                        "text-primary-hover bg-gray-100"
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
                src="/images/logo.png"
                alt="Q3 Language"
                width={104}
                height={46}
                className="h-[46px] w-auto"
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
                      className={`text-text-primary hover:text-primary font-medium flex items-center focus:outline-none ${
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
                          className="block px-4 py-2 text-sm text-text-primary hover:bg-gray-100 hover:text-primary"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-text-primary hover:text-primary font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="bg-primary text-white px-4 py-2 rounded-full flex items-center text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              {t.cta}
              <ChevronRight size={16} className="ml-1" />
            </Link>
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
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-30 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-text-primary focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div className="border-b border-custom-border pb-2">
                    <button
                      className="flex justify-between items-center w-full py-2 text-text-primary font-medium"
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
                          ? "max-h-60 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 flex flex-col gap-2 py-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="text-sm text-text-secondary hover:text-primary py-1"
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
                    className="block py-2 text-text-primary hover:text-primary font-medium border-b border-custom-border"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="#"
              className="bg-primary text-white px-4 py-3 rounded-md flex items-center justify-center text-sm font-medium hover:bg-primary-hover transition-colors w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.cta}
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Language Selector in Mobile Menu */}
          <div className="mt-6 border-t border-custom-border pt-6">
            <h3 className="font-medium text-text-primary mb-2">
              {t.language.title}
            </h3>
            <div className="flex flex-col gap-2">
              {languages.map((language) => (
                <Link
                  key={language.code}
                  href={`/${language.code}`}
                  className={`text-sm py-1 ${
                    language.code === locale
                      ? "text-primary font-medium"
                      : "text-text-secondary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center text-sm">
              <Phone size={16} className="mr-2 text-text-secondary" />
              <span>{t.contact.phone}</span>
            </div>
            <div className="flex items-center text-sm">
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
                className="mr-2 text-text-secondary"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>{t.contact.email}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-text-secondary hover:text-primary"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Youtube"
              className="text-text-secondary hover:text-primary"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-text-secondary hover:text-primary"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
