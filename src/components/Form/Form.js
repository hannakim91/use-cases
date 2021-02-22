import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Field,Formik } from 'formik';
import * as yup from 'yup';
import './Form.css';

const Form = ({ saveSelections, addSentence }) => (

  <div>
    <h2>Form</h2>
    <Formik
      initialValues={{ role: '', businessType: '', productName: '', triggerEvent: '', useCase: ''}}
  
      onSubmit={async (values, { setSubmitting }) => {
        // don't think i need set timeout but instead API call eventually
        const sentence = {text: `${values.role} at ${values.businessType} use ${values.productName} when ${values.triggerEvent} in order to ${values.useCase}`}
        await setTimeout(() => {
          // saveSelections(values)
          addSentence(sentence)
          setSubmitting(false);
          // part of Formik component 
          // eg loading... 
        }, 400);
        // const history = useHistory();
        // history.push('/summary')
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
        <form onSubmit={handleSubmit} className="main-container">
          <div className="input-container">
            <Field 
              as="select"
              name="role"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.role}
              placeholder="role"
            >
              <option defaultValue>Role</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Paralegal">Paralegal</option>
              <option value="Compliance Specialist">Compliance Specialist</option>
              <option value="Mediator">Mediator</option>
              <option value="Intern">Intern</option>
            </Field>
            {errors.role && touched.role && errors.role}
            <Field 
              as="select"
              name="businessType"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.businessType}
              placeholder="businessType"
            >
              <option defaultValue>Business Type</option>
              <option value="Law Firm">Law Firm</option>
              <option value="Paralegal">In-house Legal Dept</option>
              <option value="Compliance Specialist">Government Agency</option>
              <option value="Mediator">Solo Practitioner</option>
            </Field>
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
          </div>
          
          <pre>
            {values.role ? values.role : '[LEGAL PROFESSIONAL]'} at {values.businessType ? values.businessType : '[BUSINESS TYPE]'} use {values.productName ? values.productName : '[PRODUCT NAME]'} when {values.triggerEvent ? values.triggerEvent: '[TRIGGER/EVENT]'} in order to {values.useCase ? values.useCase : '[USE CASE]'}.
          </pre>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
