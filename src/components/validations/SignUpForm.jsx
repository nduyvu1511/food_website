import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAddUser, fetchGetAllUsers } from "../../features/userSlice"
import { signUpSchema } from "./userSchema"
import { v4 as uuidv4 } from "uuid"
import AuthenForm from "./AuthenForm"
import { useHistory } from "react-router"
import { shortErrorMsg, shortSuccessMsg } from "../../utils/message"

export default function SignUpForm() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGetAllUsers())
  }, [dispatch])

  const listUsers = useSelector((state) => state.user.listUsers)

  const history = useHistory()

  const handleSubmitForm = (data) => {
    if (listUsers.length === 0) {
      dispatch(
        fetchAddUser({
          id: uuidv4(),
          ...data,
        })
      )
      shortSuccessMsg("Sign up successfully!")
      history.push("/log-in")
      return
    }

    if (listUsers.find((item) => item.email === data.email)) {
      shortErrorMsg("This email is already registered")
    } else {
      dispatch(
        fetchAddUser({
          id: uuidv4(),
          ...data,
        })
      )
      shortSuccessMsg("Sign up successfully!")
      history.push("/log-in")
    }
  }

  return (
    <AuthenForm
      type="signup"
      schema={signUpSchema}
      handleSubmitForm={handleSubmitForm}
    />
  )
}
