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

  editDog(shelterId, dogId, updatedDog) {
    this.store.editItem(this.collection, shelterId, dogId, this.array, updatedDog);
  },

 // Will make it better later
  searchShelter(search) {
    return this.store.findBy(
      this.collection,
      (shelter => shelter.cName.toLowerCase().includes(search.toLowerCase()))
    )
  },

  getUserShelters(userid) {
  return this.store.findBy(this.collection, (shelter => shelter.userid === userid));
},

searchUserShelters(search, userid) {
  return this.store.findBy(
    this.collection,
    (playlist => playlist.userid === userid && playlist.title.toLowerCase().includes(search.toLowerCase())))
}
};

export default petStore;