import React, { useState, useEffect } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faDiagramProject, faEnvelope, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';


import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import Collapse from '@mui/material/Collapse';

import Contact from './Pages//Contact';
import Resume from './Pages/Resume';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import About from './Pages/About';

import { Modal, Tooltip } from "antd";

import {
  aboutContent,
  productListGenXys,
  productListCentra
} from '../src/data/data';

function App() {
  const [popupMsg, setPopupMsg] = useState('');
  const [openPopup, setOpenPopup] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [showResume, setShowResume] = useState(false);
  const [selected, setSelected] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(false);

  useEffect(() => {
    document.title = 'Adversalo';
  }, []);

  const getHeight = () => window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  useEffect(() => {
    const resizeListener = () => {
      setHeight(getHeight())
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, []);

  const handleClosePopup = () => {
    setOpenPopup(false);
  }

  const onDownload = () => {
    const link = document.createElement('a');
    link.download = 'ajadversalo-resume.pdf';
    link.href = 'resume.pdf';
    link.click();
  };

  const AnchorLink = (props: any) => {
    const { href, label, selected, setSelected, onClick } = props;
    return (
      <a
        href={href}
        className={`border-b-2 border-transparent hover:cursor-pointer hover:border-white ${selected ? "border-b-2 border-white" : ""} pl-2 pr-2 transition transform duration-500 ease-in-out flex items-center`}
        onClick={() => { setSelected(label); onClick?.() }}
      >
        {props.children}
      </a>
    );
  }

  const NavBar = () => {
    return (
      <div className="flex justify-center text-white fixed bottom-0 xl:sticky xl:top-0 bg-gray-900 pt-3 pb-3 z-[50] w-full">
        <div className="text-xl flex flex-row justify-between border-box w-full xl:w-[40%] pl-4 pr-4">
          {false &&
            <AnchorLink href={"#skills"} label={"Skills"} selected={selected === "Skills"} setSelected={setSelected}>
              <div className="flex flex-col xl:flex-row">
                <FontAwesomeIcon icon={faListCheck} className="xl:mt-1" />
                <span className="pl-2 text-sm xl:text-lg">Skills</span>
              </div>
            </AnchorLink>
          }
          <AnchorLink href={"#projects"} label={"Projects"} selected={selected === "Projects"} setSelected={setSelected}>
            <div className="flex flex-col xl:flex-row">
              <FontAwesomeIcon icon={faDiagramProject} className="xl:mt-1" />
              <span className="pl-2 text-sm xl:text-lg">Portfolio</span>
            </div>
          </AnchorLink>
          <AnchorLink href={"#contact"} label={"Contact"} selected={selected === "Contact"} setSelected={setSelected}>
            <div className="flex flex-col xl:flex-row">
              <FontAwesomeIcon icon={faEnvelope} className="xl:mt-1" />
              <span className="pl-2 text-sm xl:text-lg">Contact</span>
            </div>
          </AnchorLink>
          <div className="flex flex-col xl:flex-row">
            <Tooltip title="Download My Resume">
              <div className="flex justify-center">
                <i className="fa-solid fa-file-arrow-down text-white hover:text-blue-200 xl:mt-1" onClick={() => onDownload()} />
              </div>
            </Tooltip>
            <Tooltip title="View my Resume">
              <span className="text-white pl-0 xl:pl-2 text-sm xl:text-lg hover:cursor-pointer hover:text-blue-200" onClick={() => setShowResume(true)}>
                My Resume
              </span>
            </Tooltip>
          </div>
          {false && <AnchorLink href={"#about"} label={"About"} />}
        </div>
      </div>
    );
  }

  const SubNavBar = () => {
    return (
      <div className="flex justify-center text-white fixed xl:bottom-0 pt-3 pb-3 z-[50] w-full mt-4 xl:mt-0">
        <div className="text-lg flex flex-row justify-between border-box w-full xl:w-[50%] pl-4 pr-4">
          {false &&
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/ajadversalo', '_blank')}>
              <Tooltip title="Visit my LinkedIn profile">
                <i className="fa-brands fa-linkedin text-white hover:text-blue-200"></i>
              </Tooltip>
            </IconButton>
          }
          {false &&
            <span>
              <IconButton>
                <Tooltip title="Download My Resume">
                  <i className="fa-solid fa-file-arrow-down text-white hover:text-blue-200" onClick={() => onDownload()} />
                </Tooltip>
              </IconButton>
              <Tooltip title="View my Resume">
                <span className="text-white pl-2 text-[16px] hover:cursor-pointer hover:text-blue-200" onClick={() => setShowResume(true)}>My Resume</span>
              </Tooltip>
            </span>
          }
        </div>
      </div>
    );
  }

  window.addEventListener('scroll', () => {
    function isScrolledToTop() {
      return window?.pageYOffset === 0;
    }

    if (isScrolledToTop()) {
      setIsAtTop(true);
    } else {
      setIsAtTop(false);
    }
  });


  return (
    <div className="relative bg-[#000]" id="top">
      <NavBar />

      {isAtTop &&
        <SubNavBar />
      }

      <div className="h-screen">
        <div className="h-full flex items-center justify-center pl-2 pr-2 mt-[-1rem]">
          <div className={"w-[50rem] text-white p-2 mt-[-3rem] h-[25rem]"}>
            <div className={"text-5xl sm:text-6xl"}>
              <section className="bg-black text-left">
                <h1 className="relative w-fit mx-auto leading-none">
                  <div className="flex items-center gap-4">
                    <span
                      className="
                        font-bold 
                        text-[clamp(3rem,12vw,190px)] 
                        leading-[1] tracking-[-0.02em]
                        text-transparent bg-clip-text 
                        bg-gradient-to-b from-white to-gray-400
                        opacity-90
                        drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]
                        blur-[0.3px]
                        select-none
                      "
                    >
                      {`AJ`}
                    </span>
                    <img
                      src="./phonelaptop.png"
                      alt="Skyline"
                      className="h-[300px] object-contain mt-[-7rem] ml-4"
                    />
                  </div>
                  <span
                    className="
                      block relative z-10
                      -mt-[0.15em]            /* overlap amount: tweak between 0.10�0.18em */
                      font-bold 
                      text-[clamp(3rem,12vw,170px)]
                      leading-[1] tracking-[-0.02em]
                      text-white
                      drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]
                    "
                  >
                    {`Adversalo`}
                  </span>
                </h1>
                <p className="mt-2 text-[#ECEFF1] text-xl tracking-tight font-bold text-left">
                  Full Stack Software Developer
                </p>
                <div className="mt-12">
                <Marquee gradient={true} gradientColor="#000" speed={20}>
                  <img src="./techstack/html5.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/css.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/javascript.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/typescript.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/redux.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/tailwindcss.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/mui.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/antdesign.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/react.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/nextdotjs.svg" alt="NextJs" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/nodedotjs.svg" alt="NodeJs" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/c_sharp.svg" alt="C#" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/sql_server.svg" alt="Sql Server" className="h-[50px] mx-4 object-contain" />
                    {/* Duplicate for seamless looping */}
                  <img src="./techstack/html5.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/css.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/javascript.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/typescript.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/redux.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/tailwindcss.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/mui.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/antdesign.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/react.svg" alt="React" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/nextdotjs.svg" alt="NextJs" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/nodedotjs.svg" alt="NodeJs" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/c_sharp.svg" alt="C#" className="h-[50px] mx-4 object-contain" />
                  <img src="./techstack/sql_server.svg" alt="Sql Server" className="h-[50px] mx-4 object-contain" />
                  </Marquee>
                  </div>
              </section>
            </div>

            <Collapse in={!showTechnicalSkills}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
              </motion.div>
            </Collapse>
            {!isAtTop &&
              <a href={"#top"}>
                <FontAwesomeIcon icon={faCircleChevronUp} size="2xl" className="fixed bottom-[90px] right-5 rounded-full h-[3rem] w-[3rem] opacity-30 hover:cursor-pointer" />
              </a>
            }

            {!showTechnicalSkills && false &&
              <div className="mt-8 hover:cursor-pointer hover:underline text-[#FFDD44]" onClick={() => setShowTechnicalSkills(true)}>View My Techical Skills <i className="fa-solid fa-chevron-right"></i></div>
            }
            <Collapse in={showTechnicalSkills}>
              <div className="">
                <Skills />
              </div>
            </Collapse>
          </div>
        </div>

        {false &&
          <div className={""} style={height < 550 ? { position: 'relative', paddingTop: '2rem' } : { position: 'absolute', bottom: 15 }}>
            <IconButton onClick={() => window.open('https://www.linkedin.com/in/ajadversalo', '_blank')}>
              {<LinkedInIcon className={""} />}
            </IconButton>
          </div>
        }
      </div>

      {false &&
        <>
          <div id="about" className=""></div>
          <About content={aboutContent} />
        </>
      }

      <div className="flex justify-center">
        <div id="projects" className=""></div>
        <Projects
          productList={productListGenXys}
          productListCentra={productListCentra}
        />
      </div>

      <div className="flex justify-center">
        <div id="contact" className=""></div>
        <Contact
          setOpenPopup={setOpenPopup}
          setPopupMsg={setPopupMsg}
          setOpen={() => { }}
        />
      </div>

      <Modal
        open={showResume}
        width={1000}
        footer={null}
        onCancel={() => setShowResume(false)}
        style={{ marginTop: "-5rem" }}
      >
        <Resume />
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={openPopup}
        autoHideDuration={5000}
        onClose={handleClosePopup}>
        <MuiAlert
          severity={'info'}
          variant='filled'
          onClose={handleClosePopup}>
          {popupMsg}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default App;
