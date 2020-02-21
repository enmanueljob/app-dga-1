// @vendors
import React from "react";
import { Formik } from "formik";
import { useHistory, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
// @utilities
import { useAuth } from "../../utilities/useAuth";
import { Wrapper } from "./styles";
// @schema
import validationSchema from "./validationSchema";

export default () => {
  const history = useHistory();
  const auth = useAuth();

  if (auth.isAuthenticated) return <Redirect to="/layout" />;

  return (
    <Wrapper>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={fields => {
          auth.login(fields, () => history.push("/layout"));
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">Usuario</Label>
              <Input
                id="username"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && (
                <FormText color="danger">{errors.username}</FormText>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Contreseña</Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && (
                <FormText color="danger">{errors.password}</FormText>
              )}
            </FormGroup>
            <Button color="primary">Iniciar sesión</Button>
            {/* <input type="submit" value="Iniciar s" /> */}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
