import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <hr className="bg-black " />
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-white py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
            
                 <div className="box-border  p-8   text-center rounded-lg  mx-auto">
                <h3 className="font-bold text-2xl  mb-4 mainHeader">
                  Dimenxion Technologies
                </h3>
                <div className="text-md font-medium !text-black">
                  <p>Innovation || Solution || Success</p>
                </div>
                </div>
                

           
            </div>

            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className=" font-bold text-xl mb-4 mainHeader">LINKS</h6>
              <ul className="text-md text-black">
                <li className="mb-2">
                  <HashLink
                    to="#about"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    About
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="#services"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    to="/contact/#contact"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className=" font-bold text-xl mb-4 mainHeader">
                OUR SERVICES
              </h6>
              <ul className="text-md text-black">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    VR Content Creation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    XR Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    Web Development
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    Mobile App Solutions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    Interactive Simulations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    DevOps Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-[#3a4cd6] transition duration-250 ease-in-out"
                  >
                    Independent Testing
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-black">
              <div className="text-xl  font-bold mainHeader">
                Social Media Links.
              </div>

              <div className="text-md  font-bold text-xl mainHeader">
                Follow us on social media.
              </div>
              <div className="mx-auto text-center mt-2">
                <ul className="flex justify-center mb-4 md:mb-0">
                  <li>
                    <Link
                      to="#"
                      className="flex justify-center items-center text-gray-800 hover:text-gray-500 bg-blue-300 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Twitter"
                    >
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="ml-4">
                    <Link
                      to="#"
                      className="flex justify-center items-center text-gray-800 hover:text-gray-500 bg-blue-300 rounded-full shadow transition duration-150 ease-in-out"
                      aria-label="Facebook"
                    >
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="#" className="hover:text-gray-200">
                  Dimenxion Technologies
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
