import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { fetchGetAllUsers, login } from "../../features/userSlice"
import AuthenForm from "./AuthenForm"
import { logInSchema } from "./userSchema"
import "react-toastify/dist/ReactToastify.css"
import { shortSuccessMsg, shortErrorMsg } from "../../utils/message"

export default function LoginForm({ type }) {
  const listUsers = useSelector((state) => state.user.listUsers)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchGetAllUsers())
  }, [dispatch])
  const handleSubmitForm = (data) => {
    if (listUsers && listUsers.length > 0) {
      const foundUser = listUsers.find(
        (user) => user.email === data.email && user.password === data.password
      )
      if (foundUser) {
        dispatch(login(foundUser))
        shortSuccessMsg("Log in successfully")
        history.push("/")
      } else {
        shortErrorMsg("Email or password is invalid")
      }
    }
  }
  return (
    <div>
      <AuthenForm
        type={type}
        handleSubmitForm={handleSubmitForm}
        schema={logInSchema}
      />
    </div>
  )
}
