import React from 'react';
import { Formik } from 'formik';

const Form = (props) => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ role: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.role) {
          errors.role = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          props.saveRole(values.role)
          setSubmitting(false);
          // part of Formik component 
            // eg loading... 
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="role"
            name="role"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.role}
          />
          {errors.role && touched.role && errors.role}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
