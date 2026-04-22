"use strict";
import logger from "../utils/logger.js";
import petStore from "../models/pet-store.js";

const stats = {
  createView(request, response) {
    logger.info("Stats page loading!");
    
    const shelters = petStore.getAppInfo();

    let numShelters = shelters.length;
    
    let numPets = shelters.reduce((total, shelter) => total + shelter.pet.length, 0);

    let totalRating = shelters.reduce((total, shelter) => total + shelter.cRating, 0);

    let avgRating = numShelters > 0 ? totalRating/numShelters : 0;

	  let average = numShelters > 0 ? (numPets / numShelters).toFixed(2) : 0;

    let mapped = shelters.map(shelter => shelter.cRating);

    let maxRating = Math.max(...mapped);

    let maxRated = shelters.filter(shelter => shelter.cRating === maxRating);

    let favTitles = maxRated.map(item => item.cName);

    const statistics = {
      displayNumShelter: numShelters,
      displayNumPets: numPets,
	    displayAverage: average,
      displayAvgRating: avgRating.toFixed(2),
	    highest: maxRating,
      displayFav: favTitles
    }

    const viewData = {
      title: "Pet App Statistics",
      stats: statistics
    };
  
    response.render("stats", viewData);
  },
};

export default stats;
