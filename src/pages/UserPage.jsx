import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import PageHeader from "../components/pageHeader/PageHeader";
import { logout } from "../features/userSlice";

const UserPage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <section>
      <PageHeader title="User" />
      <div className="max-w-7xl w-full mx-auto px-3 xl:px-0 mt-16">
        {user ? (
          <>
            <h1 className="text-2xl font-bold ">Info User: </h1>
            <div className="">
              <p className="my-2">First name: {user.firstName}</p>
              <p className="my-2">Last name: {user.lastName}</p>
              <p className="my-2">Email address: {user.email}</p>
              <button
                onClick={() => {
                  dispatch(logout());
                  history.push("/");
                }}
                className="btn-primary uppercase"
              >
                Log out
              </button>
            </div>
          </>
        ) : (
          <div>You not logged in</div>
        )}
      </div>
    </section>
  );
};

export default UserPage;
