import React,{useState} from "react";
import {
    Button,
    Modal,
    Form,
    FormGroup,
    InputGroup,
    // InputGroup,
    InputGroupText,
    Input,
    UncontrolledTooltip,
} from "reactstrap";
import ContactFormModal from "../ContactFormModal";
import "../../assets/css/contactPage.css";

export default function ContactMessage() {
    
    const [formModal, setFormModal] = useState(false);

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
                                <button className="close" onClick={() => setFormModal(false)}>
                                  <i className="" />
                                </button>
                                <div className="">
                                  <h3 className="">Message/Question Form</h3>
                                </div>
                              </div>
                              <div className="modal-body">
                                <div className="btn-wrapper text-center">

                                </div>
                                <div className="text-center text-muted mb-4 mt-3">
                                  <small>Fill in the red boxes accurately in order to get a timely response</small>
                                </div>
                                {/* <Form role="searchForm"> */}

<ContactFormModal/>


                              


                                  
                                {/* </Form> */}
                              </div>
                            </Modal>
                            {/* End Search Form Modal */}
            
        </>
    );
}