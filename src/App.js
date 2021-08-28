import React from "react";
import { Container, Button, Form } from "semantic-ui-react";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()

  const handleForm = (e) => {
    e.preventDefault();
    console.log("se manda info")
  }

  return (
    <Container>
      <Form onSubmit={handleForm} >
        <Form.Field>
          <label>email</label>
          <input placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' />
        </Form.Field>
        <Button type='submit'>Login</Button>
      </Form>
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