import React, { useState } from "react";
import { useFormik } from "formik";
import { Container, Button, Form, Message } from "semantic-ui-react";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const [logged, setLogged] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('Form: ', values);
      setLogged(true);
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = 'Field required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Username should be an email';
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });


  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={formik.handleSubmit} >
        <Form.Field>
          <label>Email</label>
          <input 
            placeholder='Email' 
            name="email" 
            type="email"
            onChange={formik.handleChange} 
            value={formik.values.name}
            id="emailField"
          />
            {
              formik.errors.email ? 
                <div id="emailError">
                  {formik.errors.email}
                </div> : 
                null
            }
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input 
            placeholder='Password' 
            name="password" 
            type="password"
            onChange={formik.handleChange} 
            value={formik.values.password}
            id="pswField"
          />
          {
              formik.errors.password ? 
                <div id="pswError">
                  {formik.errors.password}
                </div> : 
                null
            }
        </Form.Field>
        <Button type='submit' id="submitBtn">Login</Button>
      </Form>
      {
        logged ? 
          <Message positive>
            <strong>Login Successful</strong>
          </Message> : 
          null
      }
    </Container>
  );
}

export default App;


// Your form should include the following:

// Email field
// Password field
// Submit button
// Your form should implement the following input validation rules:

// If the username or password inputs are empty, display the message "Field required" under the text input.
// If the username is not in an email format, display the message "Username should be an email" under the text input.
// If the username and password pass the above validations, then display the message "Login Successful" in an alert box.
// Your form should implement the following specific details:

// The email input field should have the ID emailField
// The email error message should be within a div element that has the ID emailError
// The password input field should have the ID pswField
// The password error message should be within a div element that has an ID pswError
// The submit button should have an ID submitBtn