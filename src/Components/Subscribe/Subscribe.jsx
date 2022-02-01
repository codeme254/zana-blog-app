import React from "react";
import { StyledSubscribe } from "../Styled/StyledSusbscribe.styled";

const Subscribe = () => {
  return (
    <section className="suscribe">
      <StyledSubscribe>
        <h2>subscribe to the newsletter</h2>
        <h6>get weekly digest of our feeds directly to your inbox.</h6>
        <div>
          <input type="email" placeholder="enter your mail" required />
          <button>send now</button>
        </div>
        <p>
          we don't share your email address with anyone, the email you provide
          will be purely used to update you and nothing else, no spams no
          nothing.
        </p>
      </StyledSubscribe>
    </section>
  );
};
export default Subscribe;