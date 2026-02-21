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
};

export default dashboard;