import React, { useState, useEffect } from "react";
import "./Recipe.css";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Recipe() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]); //state mngment

  // search for the recipe
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <>
      <section class="top-section-recipe">
        <div class="separator-recipe"></div>
        <div class="top-wrapper-recipe container">
          <div class="row top-title-recipe">
            <h2>Recipes</h2>
          </div>

          <div class="col-md keyword-recipe-info">
            <p>
              A recipe is a story that
              <br />
              ends with a good meal ~ Pat Conroy
            </p>
          </div>
          <div class="row top-keywords-wrapper-recipe">
            <div class="recipe-navbar-link-wrapper">
              <div class="recipe-navbar-links keyword-recipe">
                <h3>
                  <a href="/">Homepage</a>
                </h3>
              </div>
              <div class="recipe-navbar-links keyword-recipe">
                <h3>
                  <a href="/packages">Packages</a>
                </h3>
              </div>
              <div class="recipe-navbar-links keyword-recipe">
                <h3>
                  <a href="/contact">Contact</a>
                </h3>
              </div>
              <div class="recipe-navbar-links keyword-recipe">
                <h3>
                  <a href="/appointment">Appointments</a>
                </h3>
              </div>
            </div>
          </div>
          <SearchBar
            isLoading={isLoading}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>

      <section>
        <div>
          <div className="recipes">
            {recipes
              ? recipes.map((recipe) => (
                  <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))
              : "No Results."}
          </div>
        </div>
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

export default Recipe;
