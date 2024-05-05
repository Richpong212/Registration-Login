import React, { FC } from "react";
import { Form } from "react-bootstrap";
import { Formik, Field, FormikProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Button, Container } from "./loginStyles";

// Define the interface for form values
interface FormValues {
  email: string;
  password: string;
}

const Login: FC = () => {
  // Define validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // Define form submit handler
  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // Handle form submission
    //console.log(values);
    setSubmitting(false);
  };

  return (
    <Container className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login in</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your details to get started.
        </p>
      </div>
      {/* Formik form wrapper */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* Render form inside Formik */}
        {({ handleSubmit }: FormikProps<FormValues>) => (
          <Form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email input field */}
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Field type="email" name="email" as={Form.Control} />
            </Form.Group>
            {/* Password input field */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Field type="password" name="password" as={Form.Control} />
            </Form.Group>
            {/* Submit button */}
            <Button primary="true" type="submit" className="w-full">
              Sign In
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
