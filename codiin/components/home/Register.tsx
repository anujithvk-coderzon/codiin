import RegisterForm from "../RegisterForm";
import { CheckIcon } from "../Icons";

const BENEFITS = [
  "Free career guidance session",
  "Personalized learning roadmap",
  "No commitment required",
];

export default function Register() {
  return (
    <section className="register" id="register">
      <div className="container">
        <div className="register-wrapper">
          <div className="register-content">
            <span className="section-badge">Start Today</span>
            <h2 className="section-title">
              Register for a{" "}
              <span className="gradient-text">Free Consultation</span>
            </h2>
            <p>
              Take the first step towards your tech career. Schedule a free
              consultation to discuss your goals and find the right program for
              you.
            </p>
            <ul className="register-benefits">
              {BENEFITS.map((benefit) => (
                <li key={benefit}>
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className="register-form-container">
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
