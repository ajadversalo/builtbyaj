import React, { useState, useEffect } from 'react';
import '../App.css';
import { skills } from "../data/data";

import { Skill } from "../components/Skills";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import Marquee from "react-fast-marquee";

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

//import IconButton from '@mui/material/IconButton';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
//import About from './Pages/About';
import Skills from '../components/Skills';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import { Modal } from "antd";

import {
  //aboutContent,
  productListGenXys,
  productListCentra,
  productListPersonal
} from '../../src/data/data';

type TechStackItem = {
  src: string;
  alt: string;
  desc: string;
};

const SubNavBar: React.FC<{ onDownload: () => void; setShowResume: (val: boolean) => void }> = ({ onDownload, setShowResume }) => (
  <div className="flex justify-center text-white fixed xl:bottom-0 pt-3 pb-3 z-[50] w-full mt-4 xl:mt-0">
    <div className="text-lg flex flex-row justify-between border-box w-full xl:w-[50%] pl-4 pr-4">

    </div>
  </div>
);

const techStackData: TechStackItem[] = Object.values(skills)
    .flat()
    .map((skill: Skill): TechStackItem => ({
        src: skill.image?.src ?? "",
        alt: skill.image?.alt ?? skill.name,
        desc: `${skill.name}${skill.category ? `: ${skill.category}` : ""}`,
    }));

const TechStack: React.FC = () => {
  return (
    <div
      className="flex flex-row gap-2"
      draggable={false}
    >
      {techStackData.map(({ src, alt, desc }) => (
        <div
              key={alt}
              className="mx-2"
              style={{ minHeight: 50 }}
              title={desc}
        >
          <img
            src={src}
            alt={alt}
            className="h-[30px] sm:h-[40px] md:h-[50px] object-contain transition-transform duration-200 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const [popupMsg, setPopupMsg] = useState<string>('');
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [showResume, setShowResume] = useState<boolean>(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);  
  const [tooltip, setTooltip] = useState<{ show: boolean }>({
    show: false
  });

  useEffect(() => {
    document.title = 'Adversalo';
  }, []);

  useEffect(() => {
    const resizeListener = () => {
      //setHeight(getHeight());
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      function isScrolledToTop() {
        return window?.pageYOffset === 0;
      }
      if (isScrolledToTop()) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClosePopup = () => setOpenPopup(false);

  const onDownload = () => {
    const link = document.createElement('a');
    link.download = 'ajadversalo-resume.pdf';
    link.href = 'resume.pdf';
    link.click();
  };

  const handleMouseEnter = () => {
    setTooltip({ show: true });
  };

  const handleMouseLeave = () =>
    setTooltip({ show: false });

  return (
    <div className="relative bg-[#000] pt-4" id="top">
      <Navbar selected={selected} setSelected={setSelected} setShowResume={setShowResume} onDownload={onDownload} />
      {isAtTop && <SubNavBar onDownload={onDownload} setShowResume={setShowResume} />}

      <div className="h-screen">
        <div className="h-full flex items-center justify-center pl-2 pr-2 mt-[-1rem]">
          <div className={"text-white p-2 mt-[-3rem] h-[25rem]"}>
            <div className={"text-5xl sm:text-6xl"}>
              <section className="bg-black text-left">
                <Hero />
                <div
                  className="mx-auto mt-12 overflow-y-hidden max-w-[50rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem]"
                  onMouseEnter={e => handleMouseEnter()}
                  onMouseLeave={handleMouseLeave}                  
                  onClick={() => window.location.hash = '#skills'}
                >
                  <Marquee
                    gradient={true}
                    gradientColor="#000"
                    speed={20}
                    className="overflow-y-hidden hover:cursor-pointer"
                    play={!tooltip.show}
                  >
                    <TechStack />
                    <TechStack />
                  </Marquee>
                </div>
              </section>
            </div>

            
            {!isAtTop &&
              <a href={"#top"}>
                <FontAwesomeIcon icon={faCircleChevronUp} size="2xl" className="fixed bottom-[90px] right-5 rounded-full h-[3rem] w-[3rem] opacity-30 hover:cursor-pointer" />
              </a>
            }
          </div>
        </div>
      </div>
      
    <Skills
        id="skills"
    />
      
      <Projects
        id="projects"
        productList={productListGenXys}
        productListCentra={productListCentra}
        productListPersonal={productListPersonal}
      />

      <Contact
        id="contact"
        setOpenPopup={setOpenPopup}
        setPopupMsg={setPopupMsg}
        setOpen={() => { }}
      />
     
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
};

export default Home;
