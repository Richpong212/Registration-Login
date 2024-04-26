import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Formik, Field, FormikProps, FormikHelpers } from "formik";
import * as Yup from "yup";
import { registerUser } from "../../service/index.service";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [success, setSuccess] = useState("");

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // Handle form submission
    const submit = await registerUser(values);
    console.log(submit.message);
    setSuccess(submit.message);
    setSubmitting(false);
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your details to get started.
        </p>
      </div>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }: FormikProps<FormValues>) => (
          <Form className="space-y-4" onSubmit={handleSubmit}>
            {success && (
              <div
                className="text-green-500 "
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  backgroundColor: "#f0f0f0",
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                }}
              >
                {success}
              </div>
            )}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Username</Form.Label>
              <Field type="text" name="username" as={Form.Control} />
              <Form.Control.Feedback type="invalid" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Field type="email" name="email" as={Form.Control} />
              <Form.Control.Feedback type="invalid" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Field type="password" name="password" as={Form.Control} />
              <Form.Control.Feedback type="invalid" />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-full">
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
