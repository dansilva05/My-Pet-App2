"use strict";

import JsonStore from "./json-store.js";

const petStore = {
  store: new JsonStore("./models/pet-store.json", { shelters: [] }),
  collection: "shelters",
  array: "pet",

  getAppInfo() {
    return this.store.findAll(this.collection);
  },

  getShelterById(id) {
    return this.store.findOneBy(this.collection, (shelter) => shelter.id === id);
  },

  addShelter(shelter) {
    this.store.addCollection(this.collection, shelter);
  },

  addDog(id, dog) {
    this.store.addItem(this.collection, id, this.array, dog);
  },

  removeShelter(id) {
    const shelter = this.getShelterById(id);
    this.store.removeCollection(this.collection, shelter);
  },

  removeDog(shelterId, dogId) {
    this.store.removeItem(this.collection, shelterId, this.array, dogId);
  },
};

export default petStore;