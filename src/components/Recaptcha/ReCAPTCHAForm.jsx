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
        sitekey="6LcMtE4eAAAAAIM_LG-IU4CZMMpJFlBzO3bge2ue"
      />
    </form>
  )
 
}