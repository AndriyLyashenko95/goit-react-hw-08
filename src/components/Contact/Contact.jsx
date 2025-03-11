import React from "react";
import { FaUser, FaPhoneAlt, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Contact = ({ data: { id, name, number }, edit, handleDelete }) => {
  return (
    <ul>
      <li>
        <FaUser/>
        {name}
      </li>
      <li>
        <FaPhoneAlt/>
        {number}
      </li>
      <li >
        <button  onClick={edit}>
          <FaPen />
          Edit
        </button>
        <button  onClick={() => handleDelete(id)}>
          <MdDelete />
          Delete
        </button>
      </li>
    </ul>
  );
};

export default Contact;