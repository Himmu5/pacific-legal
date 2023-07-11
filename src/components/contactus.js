import "./contactus.css";
// import comp9 from "../assets/Vector1.png";

function ContactUsBody() {
  return (
    <>
      <div className="Contactus-body">
        <div className="text">
          <h2>Get in touch</h2>
          <p>
            Contact us and find out how our services can benefit your company.
          </p>
        </div>
        <div className="contact-detail">
          <div className="contact-box" id="phone">
            <span>Phone</span>{" "}
            <p> 1 King St W, Suite 4800, Toronto, ON M5H 1A1 Canada</p>
          </div>
          <div className="contact-box" id="mobile">
            <span>Mobile</span> <p> 416.688.5567 </p>
          </div>
          <div className="contact-box" id="email">
            <span>Email</span>

            <p>info@pacificlegal.ca</p>
          </div>
        </div>
        <div className="form-contactus">
        <div className="freeconsult-form">
          <div className="free-consult-left">
            <div className="free-consult-form-fields">
              <label for="name">Name</label>
              <input
                type="text"
                name=""
                id="name"
                className="consult-input"
                placeholder="Name"
              />
            </div>
            <div className="free-consult-form-fields">
              <label for="email">Email</label>
              <input
                type="text"
                name=""
                id="email"
                className="consult-input"
                placeholder="Email"
              />
            </div>
            <div className="free-consult-form-fields">
              <label for="phone">Phone</label>
              <input
                type="text"
                name=""
                id="phone"
                className="consult-input"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="free-consult-form-fields">
            <label for="message">Message</label>
            <textarea
              name=""
              id="message"
              className="consult-input free-consult-right-in"
              cols="30"
              rows="10"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <div className='btn-send-message'><button className="btn-message">Send Message</button></div>
        </div>
        </div>




        <div className="map-location">
        <iframe className='c-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.361676315772!2d-79.42374762264603!3d43.64064298939201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3503d5fb9099%3A0x8d720c653c999783!2s5561%20King%20St%20W%20%23688%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1681474297722!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </>
  );
}

export default ContactUsBody;
