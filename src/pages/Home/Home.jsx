import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup.string().required('სახელის ველი სავალდებულოა.'),
  url: yup.string().url('შეიყვანეთ სწორი URL მისამართი').required('საიტის მისამართის ველი სავალდებულოა.')
});

const Home = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      url: ''
    },
    onSubmit: (values) => {},
    validationSchema: validationSchema
  });
  console.log(formik)
  return <></>;
};

export default Home;
