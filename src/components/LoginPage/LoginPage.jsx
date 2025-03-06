import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import { Formik, Field, Form } from 'formik';

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => dispatch(login(values))}
    >
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;