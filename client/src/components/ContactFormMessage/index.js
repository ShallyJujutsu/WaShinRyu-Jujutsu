import React,{useState} from "react";
import {
    Button,
    Modal,
  ModalHeader,

} from "reactstrap";
import ContactFormModal from "../ContactFormModal";
import "../../assets/css/contactPage.css";

export default function ContactMessage() {
    
    const [formModal, setFormModal] = useState(false);

  //     const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);
  // const closeBtn = (
  //   <button className="close" onClick={toggle} type="button">
  //     &times;
  //   </button>
  // );
    return (
        <>
          <Button className="button" onClick={() => setFormModal(true)}>Click This Form</Button>
            
                            {/* Start Search Form Modal */}
                            <Modal
                              modalClassName="modal-black"
                              isOpen={formModal}
                              toggle={() => setFormModal(false)}
                            >



                              <div className="modal-header justify-content-center">
                           
 

                {/* <button className="close" onClick={() => setFormModal(false)}>
                                
                                </button> */}
                                <div className="">
                                  <h3 className="">Message/Question Form</h3>
                                </div>
                   {/* <Button color="secondary" onClick={() => setFormModal(false)} > <img   alt={"Exit"} src={require("../../assets/img/contextPics/delete.gif")/> </Button> */}
                             <Button color="danger" onClick={() => setFormModal(false)} >
                   
                                Close</Button>
                    {/* <Button color="danger" onClick={toggle}>Click Me</Button>
                   <ModalHeader toggle={toggle}close={closeBtn}/> */}
                                                 </div>
                              <div className="modal-body">
                                <div className="btn-wrapper text-center">

                                </div>
                                <div className="text-center text-muted mb-4 mt-3">
                                  <small>Fill in the red boxes accurately in order to get a timely response</small>
                                </div>
                            
{/* Data in the form */}
<ContactFormModal/>
{/*  */}
                              


                   
                              </div>
                            </Modal>
                            {/* End Search Form Modal */}
            
        </>
    );
}