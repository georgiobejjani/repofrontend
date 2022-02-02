import React from "react";
import $ from 'jquery'; 

const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strInstructions,
    } = recipe;
    
    return (
        <div class="card" >
	<div class="card-img" style={{backgroundImage: `url(${strMealThumb})`}}>
		<div class="overlay">
			<div class="overlay-content">
				<a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">View Recipe</a>
			</div>
		</div>
	</div>
	
	<div class="card-content">
			<h2>{strMeal}</h2>
			<p>{strInstructions}</p>
	</div>
</div>
    )
};

export default RecipeCard;

$(document).ready(function() {
	
    $('.card').delay(1800).queue(function(next) {
        $(this).removeClass('hover');
        $('a.hover').removeClass('hover');
        next();
    });
});