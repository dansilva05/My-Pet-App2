'use strict';

import petStore from "../models/pet-store.js";
import logger from "../utils/logger.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Your Pet App Dashboard",
      pet: petStore.getAppInfo(),
    };
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;