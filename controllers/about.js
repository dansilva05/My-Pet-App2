import logger from "../utils/logger.js";
import employeeStore from "../models/employee-store.js"

'use Strict';

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const viewData = {
      title: "Your Pet App About",
      employee: employeeStore.getAppInfo(),
    };

    response.render('about', viewData);   
  },
};

export default about;