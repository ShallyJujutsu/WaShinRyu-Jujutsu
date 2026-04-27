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
            <h3>Skills </h3>
            <SkillIconProvider>
              <SkillIconList />
            </SkillIconProvider>

            <div id="bio">
              {/* <h1>Bio</h1>
              <img
                alt={"Shalom Dawit"}
                src={require("../assets/img/PIC.JPG")}
                className="image-wrapper float-left img-responsive pr-2"
                id="bioImage"
              /> */}

              <article className="pull-right">
                <span>Greetings into the window of my life! 
                  </span>
                Dr. Yiannakis started the UConn Judo Club in 1976 but the name was changed to UConn Judo and Jujutsu Club in 1995, and then finally to UConn Jujutsu Club in 1999. The official Japanese name for the club is BUDENKAN, the school of traditional martial arts. The club is the home of <u>Wa Shin Ryu Jujutsu</u>, a holistic, comprehensive system of unarmed combat founded by Prof. Yiannakis in 1983. The system has a basis, in form and philosophy, in Koryu Bujutsu (classical martial arts) but as an evolved system it may be best described as <u>a modern martial art with classical moorings</u>. Unlike most classical, or classically based systems, however, the art stresses the development of effective combative skills by training students in live sparring situations in distance, close quarter and ground fighting contexts. Such forms of training develop sustained focused concentration, hand-leg-eye coordination, and create for students a high degree of realism that set routines and repetition training alone cannot provide. However, the purpose of such intensive training is not to make us violent. The goal is to empower us so that we can walk away with confidence, if that is deemed the appropriate response at the time!
              </article>
              {/* <a id="purple" href={"../assets/img/pic0.jpg"} target="_blank" rel="noreferrer">RESUME</a> */}
              <a id="purple" href={resume} download="SHALOM DAWIT Resume.pdf">
                {" "}
                Resume{" "}
              </a>
            </div>
          </div>
        </main>


        {/*  <Footer /> */}
      </div>
    </motion.div>
  );
};

export default AboutPage;
