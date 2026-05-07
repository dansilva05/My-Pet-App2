import logger from "../utils/logger.js";
import appStore from "../models/app-store.js"
import accounts from './accounts.js';

'use Strict';

const about = {
  createView(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    logger.info("About page loading!");

    const viewData = {
      user: loggedInUser,
      title: "About Your Pet App",
      fullname: loggedInUser ? loggedInUser.firstName + ' ' + loggedInUser.lastName : '',
      info: appStore.getAppInfo(),
    };

    response.render('about', viewData);
  },
};

export default about;