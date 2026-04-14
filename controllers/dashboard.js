'use strict';

import petStore from "../models/pet-store.js";
import logger from "../utils/logger.js";
import { v4 as uuidv4 } from 'uuid';

const dashboard = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const searchTerm = request.query.searchTerm || "";

    const shelter = searchTerm 
    ? petStore.searchShelter(searchTerm) 
    : petStore.getAppInfo();

    const sortField = request.query.sort;
    const order = request.query.order === "desc" ? -1 : 1;

    let sorted = shelter;

    if (sortField) {
      sorted = shelter.slice().sort((a, b) => {
        if (sortField === "name") {
          return a.cName.localeCompare(b.cName) * order;
        }

        if (sortField === "rating") {
          return (a.cRating - b.cRating) * order;
        }

        return 0;
      });
    }

    const viewData = {
      title: "Your Pet Finder",
      shelter: sorted,
      search: searchTerm,
      nameSelected: request.query.sort === "name",
      ratingSelected: request.query.sort === "rating",
      ascSelected: request.query.order === "asc",
      descSelected: request.query.order === "desc",
    };

    logger.debug(viewData.shelter)
    
    response.render('dashboard', viewData);
  },

  addShelter(request, response) {
    const newShelter = {
      id: uuidv4(),
      cName: request.body.cName,
      cLocation: request.body.cLocation,
      cPhone: request.body.cPhone,
      cRating: request.body.cRating,
      cImage: request.body.cImage || '/anon_dog.jpg',
      pet: [],
    };

    petStore.addShelter(newShelter);
    response.redirect('/dashboard');
  },

  deleteShelter(request, response) {
    const shelterId = request.params.id;
    logger.debug(`Deleting Shelter ${shelterId}`);
    petStore.removeShelter(shelterId);
    response.redirect("/dashboard");
  },
};

export default dashboard;