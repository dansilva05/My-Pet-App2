'use strict';

import petStore from "../models/pet-store.js";
import logger from "../utils/logger.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Your Pet Finder",
      shelter: petStore.getAppInfo(),
    };
    
    response.render('dashboard', viewData);
  },

  addShelter(request, response) {
    const newShelter = {
      id: uuidv4(),
      cName: request.body.cName,
      cLocation: request.body.cLocation,
      cPhone: request.body.cPhone,
      cRating: request.body.cRating,
      cImage: request.body.cImage || '/anon.png',
    };

    petStore.addShelter(newShelter);
    response.redirect('/dashboard');
  },
};

export default dashboard;