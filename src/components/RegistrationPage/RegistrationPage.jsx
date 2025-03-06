import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { FaPen } from "react-icons/fa";
import { PiPasswordLight } from "react-icons/pi";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min length 3 characters!")
    .max(50, "Max length 50 characters!")
    .required("Enter name"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((response) => toast.success(`Welcome, ${response.name}`))
      .catch(() => toast.error("Email is already in use"));

    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form >
          <div>
            <label htmlFor="name">Name</label>
            <div >
              <Field type="text" name="name" placeholder="Name" />
              <FaPen className={c.icon} />
            </div>
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <FaPen className={c.icon} />
            </div>
            <ErrorMessage name="email" component="span" />
          </div>
          <div >
            <label htmlFor="password">Password</label>
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <PiPasswordLight className={c.icon} />
            </div>
            <ErrorMessage
              name="password"
              component="span"
            />
          </div>
          <button type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;