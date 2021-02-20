import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

const Form = (props) => (
  <div>
    <h1>Form</h1>
    <Formik
      initialValues={{ role: '', businessType: '', productName: '', triggerEvent: '', useCase: ''}}
  
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 6));
          props.saveSelections(values)
          setSubmitting(false);
          // part of Formik component 
            // eg loading... 
        }, 400);
      }}

      validationSchema={yup.object().shape({
        role: yup.string().required("Role is required"),
        businessType: yup.string().required("Business type is required"),
        productName: yup.string().required("Product name is required"),
        triggerEvent: yup.string().required("Trigger/event is required"),
        useCase: yup.string().required("Use case is required")
      })}
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
            placeholder="role"
          />
          {errors.role && touched.role && errors.role}
          <input
            type="businessType"
            name="businessType"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.businessType}
            placeholder="business type"
          />
          {errors.businessType && touched.businessType && errors.businessType}
          <input
            type="productName"
            name="productName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.productName}
            placeholder="product name"
          />
          {errors.productName && touched.productName && errors.productName}
          <input
            type="triggerEvent"
            name="triggerEvent"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.triggerEvent}
            placeholder="trigger/event"
          />
          {errors.triggerEvent && touched.triggerEvent && errors.triggerEvent}
          <input
            type="useCase"
            name="useCase"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.useCase}
            placeholder="use case"
          />
          {errors.useCase && touched.useCase && errors.useCase}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          <pre>
            {values.role ? values.role : '[LEGAL PROFESSIONAL]'} at {values.businessType ? values.businessType : '[BUSINESS TYPE]'} use {values.productName ? values.productName : '[PRODUCT NAME'} when {values.triggerEvent ? values.triggerEvent: '[TRIGGER/EVENT]'} in order to {values.useCase ? values.useCase : '[USE CASE]'}.
          </pre>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
