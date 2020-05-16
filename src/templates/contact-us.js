import React from "react"

const ContactUsPage = () => {
  return (
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        style={{ marginTop: "200px" }}
      >
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="phonenumber" />
        <textarea name="query"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ContactUsPage
