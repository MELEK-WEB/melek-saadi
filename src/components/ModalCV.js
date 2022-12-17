import React from "react";
import "semantic-ui-css/semantic.min.css";

import {Modal, ModalDescription } from "semantic-ui-react";
import cv from "../photos/CV_MELEK_SAADI-1.png";
export default function ModalCV() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
        dimmer='blurring'
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="fullscreen"
      trigger={
        <span type="button" className="btn btn--outline">
          Resume
        </span>
      }
    >
    
     
        <img src={cv} alt="Cv"  width={'100%'} style={{cursor:"pointer"}} />
     
    </Modal>
  );
}
