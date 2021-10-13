import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import LoginForm from "../components/validations/LoginForm";

function LoginPage() {
  return (
    <section>
      <PageHeader title="My Account" />
      <LoginForm type='loginPage' />
    </section>
  );
}

export default LoginPage;
