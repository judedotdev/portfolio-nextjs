"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt3, HiOutlineMenuAlt3, HiOutlineLockClosed } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CgMenuRight, CgClose, CgCloseR, CgCloseO } from "react-icons/cg";
import { LuDownload } from "react-icons/lu";
import { FaWhatsapp, FaTwitter, FaTiktok, FaGithub } from "react-icons/fa";
import { PiCertificate } from "react-icons/pi";
import { MdOutlineSchool, MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  return (
    <body className="bg-white text-purple-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white flex flex-col">
        {/* Large Screens */}
        <div className="flex justify-between items-center text-center py-4 xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6">
          <div className="flex items-center text-center space-x-4">
            <Link href="/" className="text-purple-500 font-extrabold ml-4 sm:ml-0 text-5xl">J</Link>
            <Link href="mailto:judeabara@gmail.com" className="mt-1 text-purple-950 font-medium hidden md:flex">judeabara@gmail.com</Link>
          </div>
          <div className="hidden lg:flex flex-row gap-8 font-medium text-purple-950 items-center text-center mt-1">
            <Link href="#about" className="hover:text-purple-500">About</Link>
            <Link href="#skills" className="hover:text-purple-500">Skills</Link>
            <Link href="#projects" className="hover:text-purple-500">Projects</Link>
            <Link href="#education" className="hover:text-purple-500">Education</Link>
            <Link href="#interests" className="hover:text-purple-500">Interests</Link>
            <Link href="#contact" className="hover:text-purple-500">Contact</Link>
            <Link href="https://www.fiverr.com/judeabara" target="_blank" rel="noopener noreferrer" className="btn-hire rounded-full bg-purple-700 text-white py-3 px-8 hover:bg-purple-900 font-semibold">Hire Me!</Link>
          </div>
          {/* Mobile Button */}
          <>
            {showMenu ?
              (<div className="flex flex-row lg:hidden z-20 space-x-6 items-center">
                <Link href="https://www.fiverr.com/judeabara" target="_blank" rel="noopener noreferrer" className="btn-hire rounded-full bg-purple-700 text-white py-3 px-8 hover:bg-purple-900 font-semibold">Hire Me!</Link>
                <CgClose size={40} onClick={toggleMenu} className="items-center text-purple-700" />
              </div>)
              :
              (<div className="flex flex-row lg:hidden z-20 space-x-6 items-center">
                <Link href="https://www.fiverr.com/judeabara" target="_blank" rel="noopener noreferrer" className="btn-hire rounded-full bg-purple-700 text-white py-3 px-8 hover:bg-purple-900 font-semibold">Hire Me!</Link>
                <CgMenuRight size={40} onClick={toggleMenu} className="items-center text-purple-700" />
              </div>)
            }
          </>
        </div>
        {/* Mobile Menu */}
        <>
          {showMenu &&
            <div className="bg-purple-950 pb-10 pt-7 xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6 flex lg:hidden">
              <div className="flex flex-col lg:hidden px-2 mt-2 space-y-5 text-white uppercase text-2xl">
                <Link href="#about" className="hover:text-purple-500">About</Link>
                <Link href="#skills" className="hover:text-purple-500">Skills</Link>
                <Link href="#projects" className="hover:text-purple-500">Projects</Link>
                <Link href="#education" className="hover:text-purple-500">Education</Link>
                <Link href="#interests" className="hover:text-purple-500">Interests</Link>
                <Link href="#contact" className="hover:text-purple-500">Contact</Link>
              </div>
            </div>
          }
        </>
      </nav>

      {/* About Section */}
      <section id="about" className="xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6">
        <div className="flex flex-col lg:flex-row mt-6 lg:mt-24">
          <div className="flex flex-col md:flex-row lg:space-x-16 xl:space-x-0">
            <div className="flex flex-col md:w-1/2">
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-purple-950 font-bold">I am Jude Abara</p>
              <p className="text-4xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl lg:mt-2 xl:mt-4 font-bold text-purple-600">Software Engineer + GIS Analyst</p>
              <div className="text-lg lg:text-xl xl:text-2xl mt-3 xl:mt-6 hidden md:flex text-justify">
                I&apos;m a passionate developer driven by creativity and innovation.
                I love building websites and software solutions that solve real-world
                problems and improve everyday experiences.
              </div>
              <div className="hidden md:flex flex-col lg:flex-row space-y-6 space-x-0 lg:space-x-4 lg:space-y-0 mt-6 xl:mt-10">
                <a href="/cv.pdf" download="cv_judeAbara.pdf" className="flex flex-row justify-center items-center text-center text-lg text-purple-500 hover:text-white bg-white hover:bg-purple-500 w-52 py-4 rounded-l-full rounded-r-full border-2 border-purple-500">
                  Download CV
                  <LuDownload className="ml-2" />
                </a>
                <div className="flex flex-row items-center text-center space-x-4">
                  <Link href="https://wa.me/+2348065096213" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={40} className="rounded-full border border-purple-500 p-2 text-purple-500 hover:text-white bg-white hover:bg-purple-500" /></Link>
                  <Link href="https://x.com/judedotdev" target="_blank" rel="noopener noreferrer"><FaTwitter size={40} className="rounded-full border border-purple-500 p-2 text-purple-500 hover:text-white bg-white hover:bg-purple-500" /></Link>
                  <Link href="https://www.tiktok.com/@jude.dev" target="_blank" rel="noopener noreferrer"><FaTiktok size={40} className="rounded-full border border-purple-500 p-2 text-purple-500 hover:text-white bg-white hover:bg-purple-500" /></Link>
                  <Link href="https://github.com/judedotdev" target="_blank" rel="noopener noreferrer"><FaGithub size={40} className="rounded-full border border-purple-500 p-2 text-purple-500 hover:text-white bg-white hover:bg-blue-500" /></Link>
                </div>
              </div>
            </div>
            <div className="flex flex-row my-8 md:my-0 md:w-1/2 justify-center xl:justify-end xl:mr-20 items-center text-center rounded-full">
              <Image src="/hoodie.jpg" width={2043} height={1971} alt="Jude's Photo" className="w-80 h-80 lg:w-[400px] lg:h-[400px] xl:w-[440px] xl:h-[440px] rounded-3xl transform rotate-[5deg] transition-transform duration-500 ease-in-out hover:rotate-0 border-4 hover:border-purple-500" />
            </div>
          </div>
          {/* Small Screen */}
          <div className="text-xl flex md:hidden text-justify">
            I&apos;m a passionate developer driven by creativity and innovation.
            I love building websites and software solutions that solve real-world
            problems and improve everyday experiences.
          </div>
          <div className="flex md:hidden flex-row space-x-5 mt-6">
            <a href="/cv.pdf" download="cv_judeAbara.pdf" className="flex flex-row justify-center items-center text-center text-base text-purple-500 hover:text-white bg-white hover:bg-purple-500 w-36 py-2 rounded-3xl border-2 border-purple-500">
              Download CV
              <LuDownload className="ml-1" />
            </a>
            <div className="flex flex-row items-center text-center space-x-4">
              <Link href="https://wa.me/+2348065096213" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} className="rounded-full border border-purple-500 p-1 text-purple-500 hover:text-white bg-white hover:bg-purple-500" /></Link>
              <Link href="https://x.com/judedotdev" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} className="rounded-full border border-purple-500 p-1 text-purple-500 hover:text-white bg-white hover:bg-purple-500" /></Link>
              <Link href="https://www.tiktok.com/@jude.dev" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} className="rounded-full border border-purple-500 p-1 text-purple-500 hover:text-white bg-white hover:bg-purple-500" /></Link>
              <Link href="https://github.com/judedotdev" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className="rounded-full border border-purple-500 p-1 text-purple-500 hover:text-white bg-white hover:bg-blue-500" /></Link>
            </div>
          </div>
          {/* End Small Screen */}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6 bg-purple-50 mt-20">
        <div className="flex flex-col py-24">
          <h2 className="mx-auto text-4xl text-purple-900 font-bold">My Skills</h2>
          <p className="mt-4 mx-auto text-justify">
            I am proficient in HTML, CSS, JavaScript,
            Python, SQL, and Solidity, and have experience working
            with the Next.js framework, as well as version control using Git.
          </p>
          <div className="mt-8 flex flex-col space-y-10 text-green-800 font-medium text-xs md:text-base">
            <div className="flex flex-row space-x-5 mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/html.svg" alt="HTML Logo" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">85%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">HTML 5</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/css.svg" alt="CSS Logo" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">70%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">CSS</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/js.webp" alt="Javascript Logo" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">80%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">Javascript</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/python.png" alt="Python" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">85%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">Python</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-12 h-12 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/sql.svg" alt="SQL Logo" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">75%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">SQL</p>
              </div>
            </div>

            <div className="flex flex-row justify-between space-x-5 mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/git.svg" alt="Git Logo" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">70%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">Git</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/nextjs.svg" alt="Next JS Logo" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">75%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">Next JS</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex flex-col rounded-sm md:rounded-3xl bg-slate-300 justify-center items-center w-14 h-14 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36">
                  <Image src="/solidity.svg" alt="Solidity Logo" width={80} height={80} className="w-6 h-6 lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]" />
                  <p className="mt-2">75%</p>
                </div>
                <p className="text-purple-500 font-normal mt-2">Solidity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6 bg-white">
        <div className="flex flex-col py-24">
          <h2 className="mx-auto text-4xl text-purple-900 font-bold">My Recent Projects</h2>
          <div className="flex flex-col space-y-20 md:space-y-0 md:flex-row md:justify-between md:space-x-10 mt-12 md:mt-8 lg:mt-16">

            <div className="flex flex-col md:w-1/2">
              <Image src="/nexarion.jpeg" alt="nexarion" width={1812} height={2084} className="rounded-lg border-2 border-purple-900" />
              <div className="flex flex-col mt-4 ml-4">
                <h3 className="font-bold text-lg">Nexarion</h3>
                <p className="mt-2">A virtual reality website landing page showcasing advanced VR environments.</p>
                <div className="flex flex-row space-x-5">
                  <Link href="https://nexarion-gamma.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-4 rounded-md w-36 py-2 bg-purple-500 hover:bg-purple-900 items-center text-center text-white font-semibold">View Project</Link>
                  <Link href="https://github.com/judedotdev/nexarion" target="_blank" rel="noopener noreferrer" className="mt-4 rounded-md w-36 py-2 bg-purple-500 hover:bg-purple-900 items-center text-center text-white font-semibold">GitHub</Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:w-1/2">
              <Image src="/realix.png" alt="realix" width={1812} height={2084} className="rounded-lg border-2" />
              <div className="flex flex-col mt-4 ml-4">
                <h3 className="font-bold text-lg">Realix</h3>
                <p className="mt-2">A platform for tokenizing real-world assets with blockchain technology.</p>
                <div className="flex flex-row space-x-5">
                  <Link href="https://realix.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-4 rounded-md w-36 py-2 bg-purple-500 hover:bg-purple-900 items-center text-center text-white font-semibold">View Project</Link>
                  <Link href="https://github.com/realix-finance/realix" target="_blank" rel="noopener noreferrer" className="mt-4 rounded-md w-36 py-2 bg-purple-500 hover:bg-purple-900 items-center text-center text-white font-semibold">GitHub</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6 bg-purple-50">
        <div className="flex flex-col py-16 xl:py-24">
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between lg:justify-normal lg:space-x-28 xl:space-x-28">
            {/* My Education */}
            <div className="flex flex-col">
              <h2 className="text-purple-900 font-bold text-3xl xl:text-4xl flex flex-row">
                <MdOutlineSchool size={40} className="text-purple-500 mr-5" />
                My Education
              </h2>
              <div className="flex flex-col mt-10 bg-white shadow-lg md:w-[300px] lg:w-[400px] xl:w-[500px] h-40 rounded-3xl p-6">
                <p className="font-bold xl:text-xl text-purple-500">March - May 2023</p>
                <p className="mt-2 text-purple-900 font-bold text-lg md:text-base lg:text-lg xl:text-2xl">SMART CONTRACT AUDITING</p>
                <p className="mt-2 text-purple-900">EkoLance</p>
              </div>
              <div className="flex flex-col mt-10 bg-white shadow-lg md:w-[300px] lg:w-[400px] xl:w-[500px] h-40 rounded-3xl p-6">
                <p className="font-bold xl:text-xl text-purple-500">2016 - 2022</p>
                <p className="mt-2 text-purple-900 font-bold text-lg md:text-base lg:text-lg xl:text-2xl">Bachelor of Technology, Geology</p>
                <p className="mt-2 text-purple-900 text-sm lg:text-sm">Federal University of Technology, Owerri (FUTO), Owerri, Imo State, Nigeria</p>
              </div>
              <div className="flex flex-col mt-10 bg-white shadow-lg md:w-[300px] lg:w-[400px] xl:w-[500px] h-40 rounded-3xl p-6">
                <p className="font-bold xl:text-xl text-purple-500">2009 - 2015</p>
                <p className="mt-2 text-purple-900 font-bold text-lg xl:text-2xl">High School Diploma</p>
                <p className="mt-2 text-purple-900 text-sm">FUTO International Secondary School, Owerri, Imo State, Nigeria</p>
              </div>
              <a href="/cv.pdf" download="cv_judeAbara.pdf" className="mt-10 flex flex-row justify-center items-center text-center text-base text-purple-500 hover:text-white bg-white hover:bg-purple-500 w-36 py-2 rounded-3xl border-2 border-purple-500">
                Download CV
                <LuDownload className="ml-1" />
              </a>
            </div>
            {/* My Experience */}
            <div className="flex flex-col">
              <h2 className="text-purple-900 font-bold text-3xl xl:text-4xl flex flex-row">
                <PiCertificate size={40} className="text-purple-500 mr-5" />
                My Experience
              </h2>
              <div className="flex flex-col mt-10 bg-white shadow-lg md:w-[300px] lg:w-[400px] xl:w-[500px] h-40 rounded-3xl p-6">
                <p className="font-bold xl:text-xl text-purple-500">2021 - 2023</p>
                <p className="mt-2 text-purple-900 font-bold text-lg md:text-base lg:text-lg xl:text-2xl">BLOCKCHAIN DEVELOPER</p>
                <p className="mt-2 text-purple-900">Remote</p>
              </div>
              <div className="flex flex-col mt-10 bg-white shadow-lg md:w-[300px] lg:w-[400px] xl:w-[500px] h-40 rounded-3xl p-6">
                <p className="font-bold xl:text-xl text-purple-500">July - December 2019</p>
                <p className="mt-2 text-purple-900 font-bold text-lg md:text-base lg:text-lg xl:text-2xl">GIS Analyst Intern</p>
                <p className="mt-2 text-purple-900 text-sm">National Space Research And Development Agency, Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="interests" className="xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6 bg-white">
        <div className="flex flex-col py-16 xl:py-24">
          <h2 className="mx-auto text-4xl text-purple-900 font-bold">Interests</h2>
          <div className="flex flex-col mt-8">
            <p className="text-purple-900 text-justify">
              What excites me most is understanding how computers work—from the hardware
              that powers them to the software that brings them to life.
              I&apos;ve always been fascinated by the inner workings of computers,
              and this curiosity drives my passion for programming.
              The ability to use programming languages to transform
              ideas into real-world applications is incredibly rewarding to me.
            </p>
            <p className="text-purple-900 mt-4 text-justify">
              I&apos;m also deeply interested in exploring new areas of technology.
              In the future, I&apos;m eager to dive into Game Development, Machine Learning,
              and Artificial Intelligence. Additionally, I have a strong desire to
              learn 2D and 3D Animation using tools like Autodesk Maya, as these fields
              offer exciting opportunities to blend creativity with technical skills.
              The combination of art, technology, and problem-solving in these areas is
              what drives me to continuously learn and push my boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6 bg-purple-50">
        <div className="flex flex-col py-16 xl:py-24">
          <h2 className="mx-auto text-2xl lg:text-3xl xl:text-4xl text-purple-900 font-bold">Contact Me</h2>
          <form className="flex flex-col">
            <label for="name" className="my-2">Full Name:</label>
            <input type="text" id="name" name="name" required className="rounded-lg border-2 py-1" />

            <label for="email" className="my-2">Email:</label>
            <input type="email" id="email" name="email" required className="rounded-lg border-2 py-1" />

            <label for="message" className="my-2">Message:</label>
            <textarea id="message" name="message" rows="4" required className="rounded-lg border-2 py-10"></textarea>

            <button type="submit" className="text-white bg-purple-900 hover:bg-purple-950 mt-6 rounded-lg py-2 font-bold">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="xl:px-32 lg:px-16 md:px-12 sm:px-20 px-6 bg-purple-950">
        <div className="flex flex-col py-8 justify-center items-center text-center">
          <div className="flex flex-row space-x-4 md:space-x-8 text-white font-bold mt-5 text-sm md:text-base">
            <Link href="#about" className="hover:text-purple-500">About</Link>
            <Link href="#skills" className="hover:text-purple-500">Skills</Link>
            <Link href="#projects" className="hover:text-purple-500">Projects</Link>
            <Link href="#education" className="hover:text-purple-500">Education</Link>
            <Link href="#interests" className="hover:text-purple-500">Interests</Link>
            <Link href="#contact" className="hover:text-purple-500">Contact</Link>
          </div>
          <p className="mt-5 text-purple-500 text-sm md:text-base">&copy; {getCurrentYear()} All Rights Reserved</p>
          <p className="mt-4 text-purple-500 text-sm md:text-base">Designed by Jude Abara</p>
        </div>
      </footer>
    </body>
  );
}
