import React from "react";
import Contactcard from "./Contactcard";
const ContactList = (props) => {
  const contactrender = props.contacts.map((contact) => {
    return <Contactcard contact={contact}></Contactcard>;
  });
  return <div className="ui celled list">{contactrender} </div>;
};
export default ContactList;
