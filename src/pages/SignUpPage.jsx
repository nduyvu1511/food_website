import React from "react";
import PageHeader from "../components/pageHeader/PageHeader";
import SignUpForm from "../components/validations/SignUpForm";

const SignUpPage = () => {
  return (
    <section>
      <PageHeader title="My Account" />
      <SignUpForm/>
    </section>
  );
};

export default SignUpPage;
