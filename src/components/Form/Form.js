import React from 'react';
import { Formik } from 'formik';

const Form = (props) => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ role: '', businessType: '' }}
      validate={values => {
        const errors = {};
        if (!values.role || !values.businessType) {
          errors.role = 'All inputs required';
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
            type="businessType"
            name="businessType"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.businessType}
          />
          {errors.businessType && touched.businessType && errors.businessType}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
