import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({
  field: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
  },
});
const Login = () => {
  const classes = useStyles();
  const [state, setstate] = useState("");
  const fetchData = async () => {
    const response = await axios.get("https://serviceinfo-app.herokuapp.com/");
    const message = response.data.message;
    setstate(message);
  };

  return (
    <div
      className="login-section"
      style={{
        maxWidth: "425px",
        width: "100%",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {state !== "" ? alert(state) : null}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Email is Required"),
          password: Yup.string()
            .min(4)
            .max(10)
            .required("Password is Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetchData();
          setTimeout(() => {
            setSubmitting(false);
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
          <Form
            onSubmit={handleSubmit}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "1px 1px 6px #ccc",
              padding: "55px 45px",
              margin: " 0px 10px",
            }}
          >
            <Field
              className={classes.field}
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Email"
              value={values.email}
              component={TextField}
              error={errors.email ? true : false}
              helperText={errors.email && errors.email}
            />
            <Field
              className={classes.field}
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter Password"
              value={values.password}
              component={TextField}
              error={errors.password ? true : false}
              helperText={errors.password && errors.password}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="submit"
              style={{
                display: "block",
                margin: "auto",
                padding: "13px 22px",
                backgroundColor: " #3ea175",
                border: "none",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "5px",
                marginTop: "20px",
                fontSize: "15px",
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
