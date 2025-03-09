import React from 'react';
import RegistrationForm from "../../components/RegistrationPage/RegistrationPage";
import { MdAppRegistration } from "react-icons/md";

const RegistrationPage = () => {
  return (
    <div>
      <MdAppRegistration />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;