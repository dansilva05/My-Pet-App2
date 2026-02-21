"use strict";

import JsonStore from "./json-store.js";

const petStore = {
  store: new JsonStore("./models/pet-store.json", { shelters: [] }),
  collection: "shelters",

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

  getShelterById(id) {
    return this.store.findOneBy(this.collection, (shelter) => shelter.id === id);
  },
};

export default petStore;