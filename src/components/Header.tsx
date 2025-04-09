"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

//to do replace with icons from figma
import {
  ChevronRight,
  Facebook,
  Menu,
  Phone,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <span className="mr-2">
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
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              enquire@example.com
            </div>
            <div className="hidden md:flex items-center text-sm">
              <span className="mr-2">
                <Phone size={16} />
              </span>
              +44 (0) 1234 567 891
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="#" aria-label="Facebook">
              <Facebook size={16} />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Youtube size={16} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={16} />
            </Link>
            <div className="flex items-center ml-2">
              <span>Tiếng Việt</span>
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
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white py-4 px-4 md:px-8 shadow-sm relative z-30">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg?height=50&width=120"
              alt="Q3 Language"
              width={120}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-text-primary hover:text-primary font-medium"
            >
              Giới thiệu
            </Link>
            <Link
              href="#"
              className="text-text-primary hover:text-primary font-medium flex items-center"
            >
              Khóa học
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
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-text-primary hover:text-primary font-medium flex items-center"
            >
              Kiến thức
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
                className="ml-1"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Link>
            <Link
              href="#"
              className="text-text-primary hover:text-primary font-medium"
            >
              Chính sách
            </Link>
            <Link
              href="#"
              className="text-text-primary hover:text-primary font-medium"
            >
              Liên hệ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="#"
              className="bg-primary text-white px-4 py-2 rounded-full flex items-center text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              Tư v���n ngay
              <ChevronRight size={16} className="ml-1" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-text-primary focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-30 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
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
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="block py-2 text-text-primary hover:text-primary font-medium border-b border-custom-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-text-primary hover:text-primary font-medium border-b border-custom-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Khóa học
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-text-primary hover:text-primary font-medium border-b border-custom-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kiến thức
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-text-primary hover:text-primary font-medium border-b border-custom-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Chính sách
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-text-primary hover:text-primary font-medium border-b border-custom-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                Liên hệ
              </Link>
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="#"
              className="bg-primary text-white px-4 py-3 rounded-md flex items-center justify-center text-sm font-medium hover:bg-primary-hover transition-colors w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tư vấn ngay
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center text-sm">
              <Phone size={16} className="mr-2 text-text-secondary" />
              <span>+44 (0) 1234 567 891</span>
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
              <span>enquire@example.com</span>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
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
