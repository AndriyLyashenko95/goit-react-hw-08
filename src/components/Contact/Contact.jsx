import { FaUser, FaPhoneAlt, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Contact = ({ data: { id, name, number }, edit, handleDelete }) => {
  return (
    <ul>
      <li>
        <FaUser className={c.icon} />
        {name}
      </li>
      <li>
        <FaPhoneAlt/>
        {number}
      </li>
      <li >
        <button  onClick={edit}>
          <FaPen className={c.iconDelete} />
          Edit
        </button>
        <button  onClick={() => handleDelete(id)}>
          <MdDelete className={c.iconDelete} />
          Delete
        </button>
      </li>
    </ul>
  );
};

export default Contact;