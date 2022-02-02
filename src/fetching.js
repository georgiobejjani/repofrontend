import React, { useState, useEffect } from "react";
import "./fetching.css";

function Fetching({}) {
  // console.log(user);
  const [packages, setpackage] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch("http://localhost:9002/packages");
      const data = await response.json();

      setpackage(data);
    }
  }, []); // <
  return (
    <>
      <section class="top-section-package">
        <div class="separator-package"></div>
        <div class="top-wrapper-package container">
          <div class="row top-title-package">
            <h2>Packages</h2>
          </div>

          <div class="col-md keyword-package-info">
            <p>
              Buy packages from a variety of range 
              <br />
              gym, diet and more packages deal
            </p>
          </div>
          <div class="row top-keywords-wrapper-package">
            <div class="package-navbar-link-wrapper">
              <div class="package-navbar-links keyword-package">
                <h3>
                  <a href="/Contact">Contact</a>
                </h3>
              </div>
              <div class="package-navbar-links keyword-package">
                <h3>
                  <a href="/">Homepage</a>
                </h3>
              </div>
              <div class="package-navbar-links keyword-package">
                <h3>
                  <a href="/recipe">Recipes</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* middle section */}
      <section class="middle-section-packages">
        {packages && (
          <div class="middle-wrapper">
            {packages.map((Pack, index) => (
              <div class="container-infos">
                <div class="container-infos-name">
                  <h2>{Pack.name}</h2>
                </div>

                <div class="container-infos-desc">
                  <h6>{Pack.description}</h6>
                </div>
                <div class="container-infos-list-features">
                  <ul>
                    <li>{Pack.feature1}</li>
                    <li>{Pack.feature2}</li>
                    <li>{Pack.feature3}</li>
                  </ul>
                </div>
                <div class="container-infos-price">
                  <h3>
                    $ {Pack.price} <span class="month-tag">/month</span>
                  </h3>
                </div>

                <div class="btn-positioning">
                  <button class="btn-plan">Choose plan</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

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
              class="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
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
              <a href="/Contact" class="link-a">
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
}

export default Fetching;
