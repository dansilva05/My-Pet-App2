import logger from "../utils/logger.js";
import appStore from "../models/app-store.js"

'use Strict';

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "About Your Pet App",
      info: appStore.getAppInfo(),
    };

    response.render('about', viewData);   
  },
};

export default about;