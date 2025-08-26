'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faYoutube, faInstagram, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e3c72] bg-cover bg-center text-white py-10">
      <div className="py-2 px-6 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/logo.png"
              alt="Mshel Blocks & Machineries Logo"
              width={96}
              height={96}
              className="w-24 mb-4"
            />
            <p className="text-sm hidden md:block">
              At Mshel Blocks & Machineries, we are dedicated to providing high-quality building materials and machinery solutions. Our passion for innovation and reliability ensures every product meets the highest standards for projects across Nigeria.
            </p>
            <div className="flex gap-2 mt-4">
              <a
                href="https://www.facebook.com/MshelHomes/"
                className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-[#e89e1c] hover:text-white hover:border-none transition-colors duration-200"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/mshel-homes-limited"
                className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-[#e89e1c] hover:text-white hover:border-none transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@mshelhomes"
                className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-[#e89e1c] hover:text-white hover:border-none transition-colors duration-200"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mshelhomes/"
                className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-[#e89e1c] hover:text-white hover:border-none transition-colors duration-200"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/mshelofficial"
                className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-[#e89e1c] hover:text-white hover:border-none transition-colors duration-200"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@mshelhomes"
                className="p-2 w-8 h-8 flex items-center justify-center border border-white rounded-full hover:bg-[#e89e1c] hover:text-white hover:border-none transition-colors duration-200"
                aria-label="TikTok"
              >
                <FontAwesomeIcon icon={faTiktok} className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg">Address</p>
            <p className="text-sm mt-6">The Mshel Hub, No. 2 Julius Adelusi Street, Guzape, Abuja.</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-6">Email</p>
            <a
              href="mailto:info@mshelgroup.com"
              className="block text-sm hover:text-[#e89e1c] transition-colors duration-200"
            >
              info@mshelgroup.com
            </a>
            <a
              href="mailto:mshelhomesltd@gmail.com"
              className="block text-sm hover:text-[#e89e1c] transition-colors duration-200"
            >
              mshelhomesltd@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold text-lg mb-6">Phone</p>
            <a
              href="tel:+2348104444229"
              className="block text-sm hover:text-[#e89e1c] transition-colors duration-200"
            >
              +234-810-444-4229
            </a>
            <a
              href="tel:+2348123333326"
              className="block text-sm hover:text-[#e89e1c] mt-1 transition-colors duration-200"
            >
              +234-812-333-3326
            </a>
            <a
              href="tel:+2347018744444"
              className="block text-sm hover:text-[#e89e1c] mt-1 transition-colors duration-200"
            >
              +234-701-874-4444
            </a>
            <a
              href="tel:+2349128500500"
              className="block text-sm hover:text-[#e89e1c] mt-1 transition-colors duration-200"
            >
              +234-912-850-0500
            </a>
            <a
              href="tel:+2348074918900"
              className="block text-sm hover:text-[#e89e1c] mt-1 transition-colors duration-200"
            >
              +234-807-491-8900
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-500 pt-4 text-sm">
          <p>© 2025 Mshel Blocks & Machineries. Designed by Mshel Integrated Systems</p>
          <Link
            href="/privacy-policy"
            className="hover:text-[#e89e1c] transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;