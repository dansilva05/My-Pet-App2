'use strict';

import logger from "../utils/logger.js";
import appStore from "../models/app-store.js";
import accounts from './accounts.js';

const start = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("Start page loading!");
    
      const viewData = {
        user: loggedInUser,
        title: "Welcome to Your Pet App!",
        info: appStore.getAppInfo(),
      };
      response.render('start', viewData);
    },
};

export default start;