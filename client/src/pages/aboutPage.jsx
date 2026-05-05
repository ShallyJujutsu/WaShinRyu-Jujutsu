import React, { useContext } from "react";
import { motion } from "framer-motion";

const UconnAboutPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <div className="bod">
        {/* <Navbar /> */}

        <main className="col-xs-12 col-lg-10">
          <div id="skillsAbout">
            <h3>ABOUT </h3>

            <div id="bio">
              {/* <h1>Bio</h1>
              <img
                alt={"Shalom Dawit"}
                src={require("../assets/img/PIC.JPG")}
                className="image-wrapper float-left img-responsive pr-2"
                id="bioImage"
              /> */}

              <article className="pull-right">
                <p align="justify">
                  Dr. Yiannakis started the UConn Judo Club in 1976 but the name
                  was changed to UConn Judo and Jujutsu Club in 1995, and then
                  finally to UConn Jujutsu Club in 1999. The official Japanese
                  name for the club is BUDENKAN, the school of traditional
                  martial arts. The club is the home of    
                  <b> Wa Shin Ryu Jujutsu</b>, a holistic, comprehensive system
                  of unarmed combat founded by Prof. Yiannakis in 1983. The
                  system has a basis, in form and philosophy, in Koryu Bujutsu
                  (classical martial arts) but as an evolved system it may be
                  best described as
                  <b>a modern martial art with classical moorings</b>. Unlike
                  most classical, or classically based systems, however, the art
                  stresses the development of effective combative skills by
                  training students in live sparring situations in distance,
                  close quarter and ground fighting contexts. Such forms of
                  training develop sustained focused concentration, hand-leg-eye
                  coordination, and create for students a high degree of realism
                  that set routines and repetition training alone cannot
                  provide. However, the purpose of such intensive training is
                  not to make us violent. The goal is to empower us so that we
                  can walk away with confidence, if that is deemed the
                  appropriate response at the time!
                  <br />
                  <br />
                  {/* <img
                    align="right"
                    border="0"
                    height="225"
                    alt={"Throw"}
                    src={require("../assets/img/contextPics/Throw1.jpg")}
                    width="100"
                  /> */}
                  An effective martial artist is an empowered individual. And
                  empowered individuals have the confidence to make choices and
                  decide whether to engage in violence, or to contain/defuse a
                  situation by other means. Thus, in the modern world an
                  empowered martial artist is a type of person who, by having
                  many options can make the choice to avoid/prevent violence, or
                  when the situation demands can save himself/herself and
                  others. The unempowered individual has no such options or
                  choices!
                  <br />
                  <br />
                  In developing the system the Founder integrated the traditions
                  of the old, with the best of the new, to form a budo system
                  that serves: (1) <b>As a personal discipline, </b>(2){" "}
                  <b>As a way of life, and,</b> (3) As a path to self
                  actualization in the physical, psychological and
                  <b>spiritual domains </b>(the ultimate goal of the system).
                  <br />
                  <br />
                  The club includes both male and female students and community
                  participation is encouraged. Club membership costs $20 a
                  semester. The club is free to occasional guests and other
                  visitors.{" "}
                  
                </p>
              </article>
              {/* <a id="purple" href={"../assets/img/pic0.jpg"} target="_blank" rel="noreferrer">RESUME</a> */}
              {/* <a id="purple" href={resume} download="SHALOM DAWIT Resume.pdf">
                {" "}
                Resume{" "}
              </a> */}
            </div>
        
          </div>

          <div class="flex-container">
            <div class="text-content">
          <b >
                    To earn 1 credit for Jujutsu at the University of
                    Connecticut (As AH1200-03), a permission number is required.
                    Contact Sensei Kane if you wish to do so.
                
                    <br />
                    
                  </b>
                  </div>
          <img
                    align="right"
                    border="0"
                    height="225"
                    alt={"Throw"}
                    src={require("../assets/img/contextPics/Throw1.jpg")}
                    width="100"
                  />
                  </div>
        </main>

        {/*  <Footer /> */}
      </div>
    </motion.div>
  );
};

export default UconnAboutPage;
