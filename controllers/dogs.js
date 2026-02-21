'use strict';

import petStore from "../models/pet-store.js";
import logger from "../utils/logger.js";

const dogs = {
  createView(request, response) {
    logger.info("Dogs page loading!");
    const shelterId = request.params.id;

    const viewData = {
      title: 'Your Pet Finder',
      shelter: petStore.getShelterById(shelterId),
    };

    response.render("dogs", viewData);
  },
};

export default dogs;