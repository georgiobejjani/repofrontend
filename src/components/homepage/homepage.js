import React from "react";
import "./homepage.css";
import { useHistory } from "react-router";
import logo from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/page_logo_title.png";
import image4 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/IMG_2377.png";
import image3 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/IMG_2383.png";
import image6 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/IMG_2380.png";
import image5 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/IMG_2381.png";
import image2 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/IMG_2382.png";
import image7 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/IMG_2378.png";
import image9 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/IMG_2384.png";
import image8 from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/part2_photo.png";
import background from "/Users/georgiobejjani/Desktop/Projet_informatique/dietProject/Diet-project-frontend/diet-planning-app/src/photos/background_homepage.jpg";

const Homepage = () => {
  const history = useHistory();
  return (
    <>
      {/* first section */}
      <section class="top-section">
        <div class="separator"></div>
        <div class="top-wrapper container">
          <div class="adjustment">
            <div class="row top-title">
              <h1>
                {" "}
                Eat-Right
                <br />
                Your Health, Our Priority
              </h1>
            </div>
          </div>
          <div class="row top-keywords-wrapper">
            <div class="col-md keyword">
              <h3>
                <a href="/packages">
                  Diet
                  <br />
                  <strong>Packages</strong>
                </a>
              </h3>
            </div>
            {/* <div class="col-md keyword">
              <h3>
                <a href="/">
                  Diet
                  <br />
                  <strong disabled>Appointments</strong>
                </a>
              </h3>
            </div> */}
            <div class="col-md keyword">
              <h3>
                <a href="/recipe">
                  Diet
                  <br />
                  <strong>Recipes</strong>
                </a>
              </h3>
            </div>
          </div>

          <div class="row contact-btn-wrapper">
            <a href="/Contact">
              <button type="button" class="btn bg-red">
                CONTACT US
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* middle section */}

      <section class="middle-section">
        <div class="separator-last"></div>
        <div class="middle-title-wrapper container">
          <div class="row middle-title">
            <h1> -Our Key Values-</h1>
          </div>
          <div class="middle-title-message">
            <h6>
              Connecting people, food and science, for better nutrition and healthier lives. We work with experts 
              <br />
              to motivate people to adopt healthy, sustainable diets -for life.
            </h6>
          </div>
        </div>
        <div class="middle-wrapper">
          <div class="container-dedication">
            <div class="container-title-dedication">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                class="bi bi-activity"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                />
              </svg>
              <h4>Dedication</h4>
            </div>
            <p>
              The very foundation of our
              <br />
              business model is in fact that we
              <br />
              love what we do.
              <br /><br/>
              We choose to offer this service
              <br />
              because it feeds our passion and pushes us to constantly improve.
            </p>
          </div>
          <div class="container-reputation">
            <div class="container-title-reputation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <h4>Reputation</h4>
            </div>
            <p>
              We know that a company's business practices set it apart from the
              crowd.
              <br />
              <br />
              Our spotless reputation precedes us. so don't be shy and give us a
              call!
            </p>
          </div>
          <div class="container-result">
            <div class="container-title-result">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="white"
                class="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>
              <h4>Result</h4>
            </div>
            <p>
              We take pride in the fact that we don't just deliver promises
              <br />
              to our clients, we deliver results.
              <br />
              <br /> we know what works and what dosen't because we have the
              best team.
            </p>
          </div>
        </div>
      </section>

      {/* last section */}

      <section class="last-section">
        <div class="separator-last"></div>
        <div class="last-wrapper container">
          <div class="row last-title">
            <h1> -What We Approach-</h1>
          </div>
          {/* <div class="title">
            <h8>How It Works ?</h8>
          </div> */}
          <div class="message">
            <h6>
              If your’re looking to track your food bought, stored or consumed.
              watch cooking classes and get recipes.
              <br />
              Or you just want to book an appointment with our dietitian.
            </h6>
          </div>
        </div>
        <div class="features-wrapping-containers">
          <div class="dietpackages-container">
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
              <h5>Contact</h5>
            </div>
            <div class="info-lastpart-link">
              <p>
              have questions?
                <br />
                Contact us now!
              </p>
            </div>
            <div class="link-lastpart-link">
              <a href="/contact" class="link-a">
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

export default Homepage;
