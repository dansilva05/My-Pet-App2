"use strict";
import logger from "../utils/logger.js";
import petStore from "../models/pet-store.js";
import accounts from './accounts.js';

const stats = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);

    if (!loggedInUser) return response.redirect('/login');

    logger.info("Stats page loading for " + loggedInUser.email);

    const shelters = petStore.getUserShelters(loggedInUser.id);

    let numShelters = shelters.length;

    let numPets = shelters.reduce((total, shelter) => total + shelter.pet.length, 0);

    let totalRating = shelters.reduce((total, shelter) => total + shelter.cRating, 0);

    let avgRating = numShelters > 0 ? totalRating / numShelters : 0;

    let average = numShelters > 0 ? (numPets / numShelters).toFixed(2) : 0;

    let maxRating = numShelters > 0 ? Math.max(...shelters.map(s => s.cRating)) : 0;
    let maxRated = shelters.filter(shelter => shelter.cRating === maxRating);
    let favTitles = maxRated.map(item => item.cName);

    const statistics = {
      displayNumShelter: numShelters,
      displayNumPets: numPets,
      displayAverage: average,
      displayAvgRating: avgRating.toFixed(2),
      highest: maxRating,
      displayFav: favTitles,
    };

    const viewData = {
      title: "Pet App Statistics",
      stats: statistics,
      user: loggedInUser,
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
    };

    response.render("stats", viewData);
  },
};

export default stats;