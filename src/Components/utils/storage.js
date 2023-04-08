class Storage {
  update(key, value) {
    localStorage.setItem(key, value);
  }

  get(key) {
    const rawStorage = localStorage.getItem(key);
    if (rawStorage !== "" && rawStorage) {
      return JSON.parse(rawStorage);
    }
    return [];
  }
}

export default new Storage();
