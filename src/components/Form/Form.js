import React from 'react';
import { Formik } from 'formik';

const Form = (props) => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ role: '', businessType: '', productName: '', triggerEvent: '', useCase: ''}}
      validate={values => {
        const errors = {};
        if (!values.role || !values.businessType || !values.productName || !values.triggerEvent || !values.useCase) {
          errors.role = 'All inputs required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 6));
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
          <input
            type="productName"
            name="productName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.productName}
          />
          {errors.productName && touched.productName && errors.productName}
          <input
            type="triggerEvent"
            name="triggerEvent"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.triggerEvent}
          />
          {errors.triggerEvent && touched.triggerEvent && errors.triggerEvent}
          <input
            type="useCase"
            name="useCase"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.useCase}
          />
          {errors.useCase && touched.useCase && errors.useCase}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
