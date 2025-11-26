import Image from "next/image";
import logo from "../../public/images.png";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-gray-200 py-10 px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0">

        {/* Logo + Description */}
        <div className="flex flex-col items-start gap-4 md:w-1/4">
          <Image src={logo} alt="CodeAcademy Logo" width={120} height={40} />
          <p className="text-gray-300 text-sm md:text-base">
            CodeAcademy helps you learn modern technologies and grow your coding career. Join our global community.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-10 md:gap-20 md:w-3/4">
          <div>
            <h6 className="font-bold mb-2">Services</h6>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition">Branding</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Design</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Marketing</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Advertisement</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-2">Company</h6>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition">About us</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Jobs</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Press kit</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-2">Legal</h6>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition">Terms of use</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Privacy policy</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Cookie policy</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-bold mb-2">Social</h6>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Instagram</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">Facebook</a></li>
              <li><a href="#" className="hover:text-teal-400 transition">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CodeAcademy. All rights reserved.
      </div>
    </footer>
  );
}
