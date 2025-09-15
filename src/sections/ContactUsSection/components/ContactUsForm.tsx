import { useState, type FormEvent } from "react";
import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"
import ReCAPTCHA from 'react-google-recaptcha';

function ContactUsForm() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleCaptchaChange = (token : string | null) => {
      setCaptchaToken(token);
      console.log("Captcha token:", token);
    };
    
    const handleSubmit = (e : FormEvent) => {
      e.preventDefault();

      if (!captchaToken) {
        alert("Please verify the captcha!");
        return;
      }

      console.log("Form submitted with captcha:", captchaToken);
    };

  return (
    <>
        <div className="px-3">
          <form onSubmit={handleSubmit}>
            <div className="md:p-10 px-4 py-8 bg-white rounded-3xl md:rounded-4xl montserrat text-black">
                <h2 className="text-2xl md:text-5xl font-medium mb-5 text-black">Get in touch</h2>
                <p className="mb-4 text-black text-xs md:text-lg font-medium">We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, send an email.</p>
                <Input placeholder="Full Name" />
                <Input placeholder="Contact number" />
                <Input placeholder="E-mail" />
                <Input placeholder="let's talk about your idea" />
                <ReCAPTCHA
                  sitekey="6LflLMorAAAAAG0bLY3oCs5tzj6RDNA77UXtEA6L"
                  onChange={handleCaptchaChange}
                  />
                <Button text="SUBMIT" className="w-full montserrat mt-5" />
            </div>
          </form>
        </div>
    </>
  )
}

export default ContactUsForm