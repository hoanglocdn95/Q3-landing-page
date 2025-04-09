import Link from "next/link"
import Image from "next/image"
import { Facebook, MapPin, Phone, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 md:px-8 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/placeholder.svg?height=50&width=120"
                alt="Q3 Language"
                width={120}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-text-secondary mb-4">
              Với Q3 Language - Học Không Chỉ Để Thi, Học Là Để Đạt Điểm
            </p>
          </div>

          <div>
            <h3 className="font-bold text-text-primary mb-4">LIÊN KẾT NHANH</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-text-secondary hover:text-primary">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-secondary hover:text-primary">
                  Khóa học
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-secondary hover:text-primary">
                  Chính sách
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-text-secondary hover:text-primary">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-bold text-text-primary mb-4">THÔNG TIN LIÊN HỆ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-1 text-text-secondary" />
                <span className="text-sm text-text-secondary">(028) 1231 456</span>
              </li>
              <li className="flex items-start">
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
                  className="mr-2 mt-1 text-text-secondary"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-sm text-text-secondary">mail@example.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-text-secondary" />
                <span className="text-sm text-text-secondary">
                  19 - 21 - 23 Mac Dinh Chi, Phuong Da Kao, Quan 1, TP. Ho Chi Minh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-text-secondary mb-4 md:mb-0">
            <span>Privacy Policy | Cookies | Terms & Conditions</span>
          </div>
          <div className="text-sm text-text-secondary">Copyright © Q3 LANGUAGE 2023 - All rights reserved</div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Link href="#" aria-label="Facebook" className="text-text-secondary hover:text-primary">
              <Facebook size={16} />
            </Link>
            <Link href="#" aria-label="Youtube" className="text-text-secondary hover:text-primary">
              <Youtube size={16} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-text-secondary hover:text-primary">
              <Twitter size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
