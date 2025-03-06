import React from "react";
import { useDispatch } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contactItem }) => {
  const dispatch = useDispatch();
  const { name, phone } = contactItem;

  return (
    <div>
      <ul>
        <li>
          <FaUser className={c.icon}/> {name}
        </li>
        <li>
          <BsFillTelephoneFill className={c.icon}/> {phone}
        </li>
      </ul>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contactItem.id))}
      >
        Усунути
      </button>
    </div>
  );
};

export default Contact;