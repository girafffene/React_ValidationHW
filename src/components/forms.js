import React, { useState } from "react"
import Validator from "validator"

export default props => {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const [website, setWebsite] = useState("")
  const [websiteError, setWebsiteError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if (Validator.isAlpha(name)) {
      setNameError("")
    } else {
      valid = false
      setNameError("Cannot be blank!")
    }

    if (Validator.isAlphanumeric(username)) {
      setUsernameError("")
    } else {
      valid = false
      setUsernameError("Cannot be blank!")
    }

    if (Validator.isAlphanumeric(password)) {
      setPasswordError("")
    } else {
      valid = false
      setPasswordError("Cannot be blank!")
    }

    if (Validator.isAlphanumeric(confirmPassword)) {
      setConfirmPasswordError("")
    } else {
      valid = false
      setConfirmPasswordError("Must match password!")
    }

    if (password === confirmPassword) {
      valid = true
    } else {
      alert(
        "Error: Please check that you've entered and confirmed your password"
      )
      valid = false
    }

    if (Validator.isURL(website)) {
      setWebsiteError("")
    } else {
      valid = false
      setWebsiteError("Must be a valid URL.")
    }

    if (Validator.isEmail(email)) {
      setEmailError("")
    } else {
      valid = false
      setEmailError("Must be a valid email!")
    }

    if (valid) {
      props.history.push("./submittedForm")
    } else {
      alert("Please fill out required fields!")
    }
  }

  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit}>
        <label className={nameError ? "error" : ""} htmlFor="name">
          Name {nameError && nameError}
        </label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Irene Perez"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>

        <br />

        <label className={emailError ? "error" : ""} htmlFor="email">
          Email {emailError && emailError}{" "}
        </label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="imAnEmail@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        ></input>

        <br />

        <label className={usernameError ? "error" : ""} htmlFor="username">
          Username {usernameError && usernameError}
        </label>
        <br />
        <input
          type="text"
          id="username"
          placeholder="giraffene25"
          value={username}
          onChange={e => setUsername(e.target.value)}
        ></input>

        <br />

        <label className={passwordError ? "error" : ""} htmlFor="password">
          Password {passwordError && passwordError}
        </label>
        <br />
        <input
          type="password"
          id="password"
          placeholder="enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        ></input>

        <br />

        <label
          className={confirmPasswordError ? "error" : ""}
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <br />
        <input
          type="password"
          id="confirmPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        ></input>

        <br />

        <label className={websiteError ? "error" : ""} htmlFor="website">
          Website {websiteError && websiteError}
        </label>
        <br />
        <input
          type="url"
          id="website"
          placeholder="https://www.example.com"
          value={website}
          onChange={e => setWebsite(e.target.value)}
        ></input>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
