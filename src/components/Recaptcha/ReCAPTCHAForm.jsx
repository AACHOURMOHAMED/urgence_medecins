import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
 
 
export const ReCAPTCHAForm = (props) => {
  const recaptchaRef = React.useRef();
 
  const onSubmitWithReCAPTCHA = async () => {
    const token = await recaptchaRef.current.executeAsync();
 
    // apply to form data
  }
 
  return (
    <form onSubmit={onSubmitWithReCAPTCHA}>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="150px"
        sitekey="6LcTFEgeAAAAAPucfOhA8Y0C8CbRKv9CBlD7lTnU"
      />
    </form>
  )
 
}