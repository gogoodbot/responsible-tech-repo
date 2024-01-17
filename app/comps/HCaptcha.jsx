import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Captcha = ({ onVerify }) => {
  const [isHcaptchaValid, setIsHcaptchaValid] = useState(false);

  const handleHcaptchaVerify = (token) => {
    console.log('hCaptcha token:', token);
    setIsHcaptchaValid(true);
    onVerify && onVerify(token);
  };

  return (
    <div>
      <HCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
        onVerify={handleHcaptchaVerify}
      />
      {isHcaptchaValid ? <p>Captcha passed successfully</p> : null}
    </div>
  );
};

export default Captcha;