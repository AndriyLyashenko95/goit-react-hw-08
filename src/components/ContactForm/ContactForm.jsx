import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";

import * as Yup from "yup";
import { FaPen } from "react-icons/fa";
import React, { useCallback } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min length 3 characters!")
    .max(50, "Max length 50 characters!")
    .required("Enter name"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format xxx-xx-xx")
    .required("Enter number"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
    [dispatch]
  );

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <div>
            <Field type="text" id="name" name="name" placeholder="Name" />
            <FaPen/>
          </div>
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <div>
            <Field type="text" id="number" name="number" placeholder="Number" />
            <FaPen />
          </div>
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" >
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;