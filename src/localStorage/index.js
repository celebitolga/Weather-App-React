const localStorageGetItem = (key) => localStorage.getItem(key);

const localStorageSetItem = (key, value) => localStorage.setItem(key, value);

export {
  localStorageGetItem,
  localStorageSetItem,
};
