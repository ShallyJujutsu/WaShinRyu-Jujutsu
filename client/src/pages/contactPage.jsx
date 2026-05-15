import React, {useState} from "react";
import { motion } from "framer-motion";
import {Button} from "reactstrap";
import ModalForm from "../components/ContactForm";
import "../assets/css/contactPage.css";

const UconnContactPage = () => {

	const [modalForm,setModalForm]=useState(false);

	  const handleClick = () => {
    setModalForm(true);
  };

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
            <br />
            <p>
              For general questions about Wa Shin Ryu Jujutsu, please 
              <Button className="button" onClick={handleClick}>Click This Form</Button>  , or send a message to{" "}
              <a href="mailto:shally.jujutsu@gmail.com">
                shally.jujutsu@gmail.com
              </a>
              . Otherwise, contact information for Wa Shin Ryu's Instructors and
              Officers are listed below.
            </p>

{/* ----------------------------------------- */}
{/* modal pop-out */}

{modalForm && <ModalForm/>}

{/* ----------------------------------------- */}

            <table
              bgcolor="black"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
            >
              <tbody>
                <tr>
                  <td bgcolor="black">
                    <div align="center">
                      <u>
                        <strong>CONTACTS</strong>
                      </u>
                      <br />
                    </div>

                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      id="AutoNumber2"
                      // style="border-collapse: collapse"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td height="220" width="181">
                            <img
                              border="0"
                              height="224"
                              alt="greg_kane"
                              src={require("../assets/img/contextPics/gregk.jpg")}
                              width="181"
                            />
                          </td>
                          <td height="224" width="400">
                            <strong>Dr. Gregory M. Kane, Ph.D.</strong>
                            <br />
                            Chuden Menkyo
                            <br />
                            Uchideshi #1
                            <br />
                            Head Instructor, Eastern Connecticut State
                            University and University of Connecticut Dojo
                            <br />
                            United States Judo Association: Jujitsu Division
                            Rank Examiner
                            <br />
                            5th Dan, Wa Shin Ryu Jujutsu
                            <br />
                            <strong>
                              <a href="mailto:gkane.jujutsu@gmail.com">
                                gkane.jujutsu@gmail.com
                              </a>
                            </strong>
                          </td>
                        </tr>
                        <tr>
                          <td height="224" width="181">
                            <img
                              border="0"
                              height="224"
                              alt="shalom_dawit"
                              src={require("../assets/img/contextPics/shalomd.jpg")}
                              width="181"
                            />
                          </td>
                          <td height="224" width="400">
                            <p>
                              <strong>Shalom Dawit </strong>(Nidan, Wa Shin Ryu
                              Jujutsu)
                              <br />
                              Instructor, Wa Shin Ryu Jujutsu
                              <br />
                              United States Judo Association: Lifetime Member
                              <br />
                              United States Jui-Jutsu Federation Member
                              <br />
                              Webmaster
                              <br />
                              <strong>
                                <a href="mailto:shally.jujutsu@gmail.com">
                                  shally.jujutsu@gmail.com
                                </a>
                              </strong>
                              <br />
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td height="224" width="181">
                            <img
                              border="0"
                              height="224"
                              alt="joshua_cooper"
                              src={require("../assets/img/contextPics/joshuac.jpg")}
                              width="181"
                            />
                          </td>
                          <td height="224" width="400">
                            <b>Joshua Cooper </b>(Nidan, Wa Shin Ryu Jujutsu)
                            <br />
                            Instructor, Wa Shin Ryu Jujutsu
                            <br />
                            <b>
                              <a
                                href="mailto:coops1987@optonline.net"
                                mce_href="mailto:coops1987@optonline.net"
                              >
                                coops1987@optonline.net
                              </a>
                            </b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td height="915" width="1%">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>
                      <br />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td height="19" width="400">
                    <table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      id="AutoNumber5"
                      // style="border-collapse: collapse"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td width="27%">
                            <img
                              border="0"
                              height="224"
                              alt="amber_selko"
                              src={require("../assets/img/contextPics/ambers.jpg")}
                              width="181"
                            />
                          </td>
                          <td width="73%">
                            <strong>Amber Selko </strong>(Sandan, Wa Shin Ryu
                            Jujutsu)
                            <br />
                            Instructor, Wa Shin Ryu Jujutsu
                            <br />
                            <strong>
                              <a
                                href="mailto:sgtselko@yahoo.com"
                                mce_href="mailto:sgtselko@yahoo.com"
                              >
                                sgtselko@yahoo.com
                              </a>
                            </strong>
                          </td>
                        </tr>

                        <tr>
                          <td width="27%">
                            <img
                              border="0"
                              height="224"
                              alt="andrew_yiannakis"
                              src={require("../assets/img/contextPics/andrewu.jpg")}
                              width="181"
                            />
                          </td>
                          <td width="73%">
                            <strong>Dr. Andrew Yiannakis, Ph.D. </strong>Founder
                            and Soke of Wa Shin Ryu Jujutsu
                            <br />
                            6th Dan, USJA Jujutsu
                            <br />
                            5th Dan USJA Judo
                            <br />
                            <strong>
                              <a
                                href="mailto:ayiann.jujutsu@gmail.com"
                                mce_href="mailto:ayiann.jujutsu@gmail.com"
                              >
                                ayiann.jujutsu@gmail.com
                              </a>
                            </strong>
                          </td>
                        </tr>

                        <tr>
                          <td width="27%"></td>
                          <td width="73%"></td>
                        </tr>
                        <tr>
                          <td width="27%"></td>
                          <td width="73%"></td>
                        </tr>
                        <tr>
                          <td width="27%"></td>
                          <td width="73%"></td>
                        </tr>
                        <tr>
                          <td width="27%"></td>
                          <td width="73%">
                            <p></p>
                          </td>
                        </tr>
                        <tr>
                          <td width="27%"></td>
                          <td width="73%"></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        {/*  <Footer /> */}
      </div>
    </motion.div>
  );
};

export default UconnContactPage;
