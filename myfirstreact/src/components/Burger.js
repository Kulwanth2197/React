import React, { Component } from 'react'
import './Burger.css';
class Burger extends Component
{
    render(){
        return(
            <div class="responsive">
                <div class="gallery2">
                    <a target="_blank" href="img_5terre.jpg">
                        <img src="https://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger-scaled.jpg" alt="Cinque Terre" width="1600" height="800"/>
                          </a>
                        <div class="desc">
                            Ingredinents
                           <li>
                           100% Beef Patty:
                           <ul>
                           Eat a McDonald’s hamburger and you might be getting a mouth full of antibiotics, hormones, and dangerous bacteria. So while it is “100% beef”, the quality of that beef is another issue altogether.
                           </ul>
                           <li>
                           Regular Bun:
                           <ul>
                           Ingredients: Enriched flour 
                           (bleached wheat flour, malted barley flour, niacin, reduced iron, thiamin mononitrate, riboflavin, folic acid),
                            water, high fructose corn syrup and/or sugar, 
                            yeast, soybean oil and/or canola oil, 
                            contains 2% or less of the following: salt, wheat gluten, calcium sulfate, calcium carbonate, ammonium sulfate, ammonium chloride, dough conditioners 
                            (may contain one or more of the following: sodium stearoyllactylate, datem, ascorbic acid, azodicarbonamide, mono- and diglycerides, ethoxylatedmonoglycerides, monocalcium phosphate, enzymes, guar gum, calcium peroxide), sorbic acid, calcium propionate and/or sodium propionate (preservatives), 
                            soy lecithin.
                           </ul>
                           <li>
                           Ketchup:
                           <ul>
                           Ingredients: Tomato concentrate from red ripe tomatoes,
                            distilled vinegar,
                             high fructose corn syrup, 
                             corn syrup,
                              water, salt,
                               natural flavors 
                           </ul>

                           </li>
                           </li>
                               </li> 
                            
                            </div>
  </div>
                </div>
        )
    }

}
export default Burger;