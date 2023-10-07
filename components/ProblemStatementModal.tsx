import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Aos from "aos";
import { IoClose } from "react-icons/io5";

type ProblemStatementModalProps = {
  name: string;
  description: string;
  open: boolean;
  onClose: () => void;
};

function ProblemStatementModal({
  name,
  description,
  open,
  onClose,
}: ProblemStatementModalProps) {
  useEffect(() => {
    Aos.init({ duration: 1100 });
  });

  return (
    // <div data-aos="fade-up" className="problemStmtCard">
    <Dialog
      style={{ padding: 0, borderRadius: 10 }}
      fullWidth={true}
      maxWidth={"md"}
      PaperProps={{
        sx: { width: "100%", borderRadius: 5, m: 2 },
      }}
      open={open}
      keepMounted
      onClose={onClose}
      disableScrollLock
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent
        style={{ padding: 0, borderRadius: 10 }}
        className="bg-[url('../public/elements.png')] bg-white sm:bg-[url('../public/elements.png')]  bg-no-repeat bg-cover bg-center"
        sx={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        <div className="psDialog">
          <IoClose className="psDialog__close" onClick={onClose} />
          {/* <img
              src="./dialog_vector1.svg"
              alt="dialogvect"
              className="dialog_vector1"
            />
            <img
              src="./dialog_vector2.svg"
              alt="dialogvect"
              className="dialog_vector2"
            /> */}
          <div className="psDialog__header">
            <h2>{name}</h2>
          </div>
          <div className="psDialog__content">
            <h4>Description</h4>
            <p>{description}</p>
            {/* {statements.length === 0 ? null : <h4>Statements</h4>}
              <ul>
                {statements.map((st, id) => (
                  <li key={id}>{st}</li>
                ))}
              </ul> */}
          </div>
          {/* <div style={{ minHeight: "1rem" }}></div> */}
        </div>
      </DialogContent>
    </Dialog>
    // </div>
  );
}

export default ProblemStatementModal;
