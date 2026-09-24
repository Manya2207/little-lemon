import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../BookingForm.css";

const BookingForm = () => {
  const location = useLocation();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.date !== "" &&
    formData.time !== "" &&
    formData.guests >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }
    if (isFormValid) {
      setSuccess(true);
    }
  };

  useEffect(() => {
    setSuccess(false);
    setFormData({ name: "", date: "", time: "", guests: 1 });
    setAgreed(false);
  }, [location.pathname]);

  return (
    <section className="booking-section">
      {!success ? (
        <form onSubmit={handleSubmit} className="booking-form">
          <h2 style={{ textAlign: "center" }}>Reserve a Table</h2>

          {["name", "date", "time", "guests"].map((field) => (
            <div key={field} className="form-group">
              <label htmlFor={field}>
                {field === "guests" ? "Number of Guests" : field}
              </label>
              <input
                required
                type={field === "guests" ? "number" : field}
                name={field}
                id={field}
                min={field === "guests" ? "1" : undefined}
                max={field === "guests" ? "10" : undefined}
                value={formData[field]}
                onChange={handleChange}
              />
            </div>
          ))}

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
            />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link to="/TermsAndConditions">Terms and Conditions</Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || !agreed}
            className="submit-btn"
          >
            Save
          </button>
        </form>
      ) : (
        <p className="success-msg">Reservation successful!</p>
      )}

      <div className="nav-buttons">
        <Link to="/" style={{ width: "100%" }}>
          <button className="nav-btn">Back to Home</button>
        </Link>
        <Link to="/OnlineMenu" style={{ width: "100%" }}>
          <button className="nav-btn">Online Menu</button>
        </Link>
      </div>
    </section>
  );
};

export default BookingForm;
