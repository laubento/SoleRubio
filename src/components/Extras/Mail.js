import React from "react";

const Mail = ({ name, email, message }) => {
  return (
    <>
      <h5>{name}</h5>
      <h6>{email}</h6>
      <p>{message}</p>
    </>
  );
};

export default Mail;
