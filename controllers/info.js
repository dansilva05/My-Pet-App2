'use strict';

import petStore from "../models/pet-store.js";
import logger from "../utils/logger.js";

const info = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Your Pet Info",
      pet: petStore.getAppInfo(),
    };
    
    response.render('info', viewData);
  },
};

export default info;