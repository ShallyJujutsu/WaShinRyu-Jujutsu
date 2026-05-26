import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import ContactFormModal from "../ContactFormModal";
import "../../assets/css/contactPage.css";

export default function ContactMessage() {
  const [formModal, setFormModal] = useState(false);

  return (
    <>
      <Button className="button" onClick={() => setFormModal(true)}>
        Click This Form
      </Button>

      <Modal
        modalClassName="modal-black"
        isOpen={formModal}
        toggle={() => setFormModal(false)}
      >
        <div className="modal-header justify-content-center">
          <div className="">
            <h3 className="">Message/Question Form</h3>
          </div>

          <Button color="danger" onClick={() => setFormModal(false)}>
            Close
          </Button>
        </div>
        <div className="modal-body">
          <div className="btn-wrapper text-center"></div>
          <div className="text-center text-muted mb-4 mt-3">
            <small>
              Fill in the red boxes accurately in order to get a timely response
            </small>
          </div>

          {/* Data in the form */}
          <ContactFormModal />
          {/* --------------- */}
        </div>
      </Modal>
    </>
  );
}
