import React from "react";
import "./contact.css";
import { useHistory } from "react-router";

const map = () => {
  window.open("https://maps.google.com?q="+33.875128128594255+","+35.53171935955788);
};

const Contact = () => {
  const history = useHistory();
  return (
    <>
  
      {/* top-section */}
      <section class="top-section-contact">
        <div class="separator-contact"></div>
        <div class="top-wrapper-contact container">
          <div class="row top-title-contact">
            <h2>Contact us</h2>
          </div>
          
            <div class="col-md keyword-contact-info">
              <p>
                Have a question or need assistance?
                <br />
                We are here to help you with anything you need!
              </p>
            </div>
            <div class="row top-keywords-wrapper-contact">
            <div class="contact-navbar-link-wrapper">
              <div class="contact-navbar-links keyword-contact">
              <h3>
                <a href="/" >
                  Homepage
                </a>
              </h3>
            </div>
            <div class="contact-navbar-links keyword-contact">
              <h3>
                <a href="/packages">
                  Packages
                </a>
              </h3>
            </div>
            <div class="contact-navbar-links keyword-contact">
              <h3>
                <a href="/recipe">
                 Recipes
                </a>
              </h3>
            </div>
            {/* <div class="contact-navbar-links keyword-contact">
              <h3>
                <a href="/profile">
                 Profile
                </a>
              </h3>
            </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* middle-section */}

      <section class="middle-section-contact">
      <div class="sales-inquiry-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-chat-text"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
            <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
          </svg>
          <h5 class="contact-title-reference">Sales Inquiry</h5>
          <p class="contact-message-reference">
            Get in touch with our team to get answers to all of your questions
            about purchasing packages or book a private appointment with our
            dietitians{" "}
          </p>
          <div class="contact-btn-positioning">
          <a class="mailto" href="mailto:georgio.bejjani@hotmail.com">
             <button class="contact-btn-reference">Contact Us</button>
             </a>
          </div>
        </div>
        <div class="customer-suport-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-headset"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
          </svg>
          <h5 class="contact-title-reference">Customer Support</h5>
          <p class="contact-message-reference">
            Having problems using our service? <br />
            Our Customer Support Team is eager to help you with any
            service-related questions
            <br /> 24/7
          </p>
          <div class="contact-btn-positioning">
            <label class="contact-label-reference">79-199337</label>
          </div>
        </div>
        
        <div class="location-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <h5 class="contact-title-reference">Visit us</h5>
          <p class="contact-message-reference">
            Want to know more about us, our team, the benefits you'll get. Do
            not hesitate to visit us from monday till friday
            <br /> 9:00 am till 4:00 pm{" "}
          </p>
          <div class="contact-btn-positioning">
            <button class="contact-btn-reference" onClick={map}>Visit Us!</button>
          </div>
        </div>
      </section>

    {/* last-section */}
      <section class="last-section-packages">
        <div class="separator-last"></div>
        <div class="last-wrapper container"></div>
        <div class="features-wrapping-containers">
          <div class="dietpackages-container">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-boxes"
              viewBox="0 0 16 16"
            >
              <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
            </svg>
            <div class="title-lastpart-link">
              <h5>Packages</h5>
            </div>
            <div class="info-lastpart-link">
              <p>
              Buy packages based on 
                <br />
                your own needs
              </p>
            </div>
            <div class="link-lastpart-link">
              <a href="/packages" class="link-a">
                Learn more
              </a>
            </div>
          </div>
          <div class="dietappointment-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-box-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
              />
              <path
                fill-rule="evenodd"
                d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
              />
            </svg>
            <div class="title-lastpart-link">
              <h5>Homepage</h5>
            </div>
            <div class="info-lastpart-link">
              <p>
                go back to your
                <br />
                favorite place
              </p>
            </div>
            <div class="link-lastpart-link">
              <a href="/" class="link-a">
                Learn more
              </a>
            </div>
          </div>
          <div class="dietrecipes-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
              class="bi bi-journal-text"
              viewBox="0 0 16 16"
            >
              <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
              <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
            </svg>
            <div class="title-lastpart-link">
              <h5>Recipes</h5>
            </div>
            <div class="info-lastpart-link">
              <p>
                Benefit from unlimited
                <br /> healthy recipes
              </p>
            </div>
            <div class="link-lastpart-link">
              <a href="/recipe" class="link-a">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
