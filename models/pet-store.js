"use strict";

import JsonStore from "./json-store.js";

const petStore = {
  store: new JsonStore("./models/pet-store.json", { pet: [] }),
  collection: "pet",

  getAppInfo() {
    return this.store.findAll(this.collection);
  },
};

export default petStore;