import logger from "../utils/logger.js";
import petStore from "../models/pet-store.js"

'use Strict';

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "Your Pet App About",
      pet: petStore.getAppInfo(),
    };

    response.render('about', viewData);   
  },
};

export default about;