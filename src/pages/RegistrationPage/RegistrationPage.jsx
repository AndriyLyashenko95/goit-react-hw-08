import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { MdAppRegistration } from "react-icons/md";

const RegistrationPage = () => {
  return (
    <div>
      <MdAppRegistration className={c.iconRegistration} />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;