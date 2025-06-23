'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import viTranslations from '@/locales/vi/header.json';
import enTranslations from '@/locales/en/header.json';
import home_viTranslations from '@/locales/vi/home.json';
import home_enTranslations from '@/locales/en/home.json';
import { redirect, useRouter } from 'next/navigation';
import { cn } from '@/utils/cn';
import { ELocale } from '@/constants/enum';
import { Button } from '../ui/button';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FacebookDarkIcon,
  FacebookLightIcon,
  InstagramDarkIcon,
  // InstagramLightIcon,
  MailLightIcon,
  PhoneLightIcon,
  XDarkIcon,
  // XLightIcon,
  YoutubeDarkIcon,
  YoutubeLightIcon,
} from '../icons';
import { ComingSoonPopup } from '@/components/ui/dialog';

export default function Header({ locale = 'vi' }: { locale?: string }) {
  const t = locale === ELocale.EN ? enTranslations : viTranslations;
  const t_home =
    locale === ELocale.EN ? home_enTranslations : home_viTranslations;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [languageDropdownMobileOpen, setLanguageDropdownMobileOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [titleCourse, setTitleCourse] = useState<string>('');
  const router = useRouter();

  // For mobile view only
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const languageDropdownRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [languageDropdownOpen]);

  const toggleMobileDropdown = (name: string) => {
    setActiveMobileDropdown(activeMobileDropdown === name ? null : name);
  };

  const navItems = [
    { name: t.nav.about, href: `/${locale}/about/`, hasDropdown: false },
    {
      name: t.nav.courses,
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        {
          name: t.courses.foundation_1,
          href: `/${locale}/courses/foundation-achievers-1`,
          comingSoon: true,
        },
        {
          name: t.courses.foundation_2,
          href: `/${locale}/courses/foundation-achievers-2`,
          comingSoon: true,
        },
        {
          name: t.courses.pte_30_36_42,
          href: `/${locale}/courses/pte-achievers-30-36-42`,
          comingSoon: true,
        },
        {
          name: t.courses.pte_36_42_50,
          href: `/${locale}/courses/pte-achievers-36-42-50`,
          comingSoon: true,
        },
        {
          name: t.courses.pte_50_58,
          href: `/${locale}/courses/pte-achievers-50-58`,
          comingSoon: true,
        },
        {
          name: t.courses.pte_65_73_79,
          href: `/${locale}/courses/pte-achievers-65-73-79`,
          comingSoon: true,
        },
        {
          name: t.courses.pte_1_1,
          href: `/${locale}/courses/pte-1-kem-1`,
          comingSoon: false,
        },
        {
          name: t.courses.pte_fast,
          href: `/${locale}/courses/pte-cap-toc`,
          comingSoon: false,
        },
      ],
    },
    // TODO: Knowledge dropdown is unavailable for now
    // {
    //   name: t.nav.knowledge,
    //   href: '#',
    //   hasDropdown: true,
    //   dropdownItems: [
    //     { name: t.knowledge.pteTips, href: '#' },
    //     { name: t.knowledge.learningTips, href: '#' },
    //     { name: t.knowledge.news, href: '#' },
    //   ],
    // },
    { name: t.nav.policy, href: `/${locale}/policy/`, hasDropdown: false },
    { name: t.nav.contact, href: `/${locale}/contact/`, hasDropdown: false },
  ];

  const languages = [
    { code: 'vi', name: t.language.vi },
    { code: 'en', name: t.language.en },
  ];

  const handleChangeLanguage = (language: string) => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;

      const newPathname = pathname.replace(/\/(en|vi)\//, `/${language}/`);

      redirect(newPathname);
    }
  };

  const handleSelectCourse = (
    isComingSoon: boolean,
    href: string,
    title: string,
  ) => {
    if (isComingSoon) {
      setTitleCourse(title);
      setOpen(true);
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div
        className={cn(
          'bg-primary z-30 h-12 transform text-white transition-all duration-300',
          isScrolled && 'hidden -translate-y-full',
        )}
      >
        <div className="section-container flex h-full items-center justify-between">
          <div className="flex w-full items-center justify-between gap-2 md:w-auto md:justify-start md:gap-6">
            <div className="flex items-center text-sm">
              <span className="mr-1 md:mr-2">
                <MailLightIcon />
              </span>

              <Link
                href="mailto:contact@q3language.com"
                className="text-14 font-500 text-white hover:underline"
              >
                {t.contact.email}
              </Link>
            </div>
            <div className="flex items-center text-sm">
              <span className="mr-1 md:mr-2">
                <PhoneLightIcon />
              </span>
              <Link
                href="tel:+61426812895"
                className="text-14 font-500 text-white hover:underline"
              >
                {t.contact.phone}
              </Link>
            </div>
          </div>
          <div className="hidden h-full items-center gap-3 md:flex">
            <Link
              href="https://www.youtube.com/@Q3Language"
              aria-label="Youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLightIcon />
            </Link>
            {/* TODO: Instagram will be updated soon */}
            {/* <Link href="#" aria-label="Instagram">
              <InstagramLightIcon />
            </Link> */}
            <Link
              href="https://www.facebook.com/q3language"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookLightIcon />
            </Link>
            {/* TODO: Twitter will be updated soon */}
            {/* <Link href="#" aria-label="Twitter">
              <XLightIcon />
            </Link> */}

            {/* Language Dropdown */}
            <div
              className="group relative flex h-full"
              ref={languageDropdownRef}
              onMouseEnter={() => setLanguageDropdownOpen(true)}
              onMouseLeave={() => setLanguageDropdownOpen(false)}
            >
              <button
                className="ml-2 flex cursor-pointer items-center text-sm focus:outline-none"
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                aria-expanded={languageDropdownOpen}
                aria-haspopup="true"
              >
                <span>{locale === 'en' ? t.language.en : t.language.vi}</span>
                <ChevronDownIcon className="text-[#8A8A8A]" />
              </button>

              {/* Language Dropdown Menu */}
              <div
                className={`text-text-primary absolute top-full right-0 z-1000 w-40 rounded-md bg-white py-1 shadow-lg transition-opacity duration-150 ${
                  languageDropdownOpen
                    ? 'opacity-100'
                    : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'
                }`}
              >
                {languages.map(language => (
                  <div
                    key={language.code}
                    className={cn(
                      'block cursor-pointer px-4 py-2 text-sm hover:bg-gray-100',
                      locale === language.code &&
                        'text-primary-hover bg-gray-100',
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
      <header
        className={cn(
          'relative z-20 transform bg-white py-4 shadow-sm transition-all duration-300',
          isScrolled && 'fixed top-0 right-0 left-0 translate-y-0 shadow-md',
          !isScrolled && 'translate-y-0',
        )}
      >
        <div className="section-container flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              className="text-text-primary focus:outline-none md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href={`/${locale}/`} className="flex items-center">
              <Image
                src="/images/logo-mobile.png"
                alt="Q3 Language"
                width={104}
                height={46}
                priority
                className="h-[36px] w-[81px] md:h-[46px] md:w-[104px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map(item => (
              <div
                key={item.name}
                className="group relative"
                ref={el => {
                  if (el) dropdownRefs.current[item.name] = el;
                }}
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      className={`hover:text-secondary flex items-center font-semibold text-[#111111] focus:outline-none ${
                        activeDropdown === item.name ? 'text-secondary' : ''
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
                          activeDropdown === item.name
                            ? 'text-secondary rotate-180'
                            : ''
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-0 z-50 mt-2 w-56 rounded-md bg-white py-1 shadow-lg transition-all duration-150 ${
                        activeDropdown === item.name
                          ? 'visible opacity-100'
                          : 'invisible opacity-0 group-hover:visible group-hover:opacity-100'
                      }`}
                    >
                      {item.dropdownItems?.map(dropdownItem => (
                        <div
                          key={dropdownItem.name}
                          className={`hover:text-primary block cursor-pointer px-4 py-2 text-sm font-semibold text-[#111111] hover:bg-gray-100`}
                          onClick={() =>
                            handleSelectCourse(
                              dropdownItem.comingSoon,
                              dropdownItem.href,
                              dropdownItem.name,
                            )
                          }
                        >
                          {dropdownItem.name}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-secondary font-semibold text-[#111111]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href={`/${locale}/contact/`} className="uppercase">
                {t.cta}
                <ChevronRightIcon />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-20 bg-black/50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 z-30 flex h-full w-full max-w-md transform flex-col overflow-y-auto bg-white bg-[url('/images/sidebar-bg.png')] bg-contain bg-bottom bg-no-repeat shadow-xl transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
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
              priority
              className="h-[36px] w-[81px]"
            />
          </div>
          <Link
            href="#"
            className="bg-primary hover:bg-primary-hover flex items-center rounded-full px-4 py-2 text-sm font-medium text-white uppercase transition-colors"
          >
            {t.cta}
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>

        <nav className="flex-grow px-6 py-4">
          <ul className="flex flex-col gap-2">
            {navItems.map(item => (
              <li key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between py-2 font-medium text-[#111111]"
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
                          activeMobileDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeMobileDropdown === item.name
                          ? 'max-h-64 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="flex flex-col gap-2 pl-4">
                        {item.dropdownItems?.map(dropdownItem => (
                          <div
                            key={dropdownItem.name}
                            className={`cursor-point hover:text-primary block font-medium text-[#111111]`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              handleSelectCourse(
                                dropdownItem.comingSoon,
                                dropdownItem.href,
                                dropdownItem.name,
                              );
                            }}
                          >
                            {dropdownItem.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-primary block py-2 font-medium text-[#111111]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Language Selector in Mobile Menu */}
          <div className="mt-4 pb-6">
            <div className="mb-4 flex items-center justify-between">
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
                  className="text-text-primary flex items-center focus:outline-none"
                  onClick={() =>
                    setLanguageDropdownMobileOpen(!languageDropdownMobileOpen)
                  }
                >
                  <span>{locale === 'en' ? t.language.en : t.language.vi}</span>
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
                      languageDropdownMobileOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {/* Language Dropdown Menu */}
                <div
                  className={`text-text-primary absolute top-full right-0 mb-2 w-40 rounded-md bg-white py-1 shadow-lg transition-opacity duration-150 ${languageDropdownMobileOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                >
                  {languages.map(language => (
                    <button
                      key={language.code}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                      onClick={e => {
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

      <ComingSoonPopup
        featureName={`${titleCourse}${t_home.coming_soon_popup.title}`}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
