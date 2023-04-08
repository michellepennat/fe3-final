class Storage {
  update(key, value) {
    localStorage.setItem(key, value);
  }

  get(key) {
    localStorage.getItem(key);
  }
}

export default new Storage();
