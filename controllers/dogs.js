'use strict';

import petStore from "../models/pet-store.js";
import logger from "../utils/logger.js";
import { v4 as uuidv4 } from 'uuid';

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

  addDog(request, response) {
    const shelterId = request.params.id;
    const newDog = {
      id: uuidv4(),
      name: request.body.name,
      breed: request.body.breed,
      age: request.body.age,
      gender: request.body.gender,
      description: request.body.description,
      image: request.body.image || '/anon_dog.jpg',
      posted: new Date().getFullYear(),
    };
    petStore.addDog(shelterId, newDog);
    response.redirect('/dogs/' + shelterId);
  },

  deleteDog(request, response) {
    const shelterId = request.params.id;
    const dogId = request.params.dogid;
    logger.debug(`Deleting Dog ${dogId} from Shelter ${shelterId}`);
    petStore.removeDog(shelterId, dogId);
    response.redirect('/dogs/' + shelterId);  // redirects back to same shelter page
  },
};

export default dogs;