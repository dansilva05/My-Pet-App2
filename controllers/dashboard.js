'use strict';

import employeeStore from "../models/employee-store.js";
import logger from "../utils/logger.js";

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "Your Pet App Dashboard",
      employee: employeeStore.getAppInfo(),
    };
    
    response.render('dashboard', viewData);
  },
};

export default dashboard;