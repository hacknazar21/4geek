import { useCallback, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useStorage = (storageName) => {
  const [storageLength, setStorageLength] = useState(0);
  const add = (data = {}) => {
    let toStorage = [];
    let findId = 0;
    if (localStorage.getItem(storageName) !== null) {
      toStorage = JSON.parse(localStorage.getItem(storageName));
    }
    if (!toStorage.find((item) => item.id === data["id"])) {
      toStorage.push({ ...data });
    } else {
      findId = toStorage.indexOf(
        toStorage.find((item) => item.id === data["id"])
      );
      toStorage[findId] = {
        ...toStorage[findId],
      };
    }
    localStorage.setItem(storageName, JSON.stringify(toStorage));
  };
  const get = () => {
    return JSON.parse(localStorage.getItem(storageName)) ?? [];
  };
  const removeById = (id) => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    localStorage.removeItem(storageName);
    const newData = data.filter((dataObj) => dataObj.id != id);
    localStorage.setItem(storageName, JSON.stringify(newData));
    setStorageLength(newData.length);
  };
  const addOne = (id) => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    if (data[id].count + 1 <= data[id].amount) {
      localStorage.removeItem(storageName);
      data[id].count += 1;
      localStorage.setItem(storageName, JSON.stringify(data));
      setStorageLength(JSON.parse(localStorage.getItem(storageName)).length);
      return true;
    }
    return false;
  };
  const removeOne = (id) => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    if (data[id].count - 1 === 0) {
      removeById(id);
      return;
    }
    localStorage.removeItem(storageName);
    data[id].count -= 1;
    localStorage.setItem(storageName, JSON.stringify(data));
    setStorageLength(JSON.parse(localStorage.getItem(storageName)).length);
  };
  const updateOne = (dataOne) => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    if (!!data.find((item) => item.id === dataOne.id)) {
      const new_data = data.map((item) => {
        if (item.id === dataOne.id) return dataOne;
        return item;
      });
      localStorage.removeItem(storageName);
      localStorage.setItem(storageName, JSON.stringify(new_data));
    }
  };
  const removeErrors = () => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    const new_data = data.map((item) => {
      return { ...item, error: null };
    });
    localStorage.removeItem(storageName);
    localStorage.setItem(storageName, JSON.stringify(new_data));
  };
  const clearBasket = () => {
    localStorage.removeItem(storageName);
  };
  const removeStorage = useCallback(() => {
    localStorage.removeItem(storageName);
  }, []);
  const getAvlID = () => {
    if (localStorage.getItem(storageName) !== null) {
      const data = JSON.parse(localStorage.getItem(storageName));
      let isNoFound = true;
      console.log(data);
      while (isNoFound) {
        const id = uuidv4();
        for (const dataItem of data) {
          if (dataItem.id === id) {
            isNoFound = true;
            break;
          } else isNoFound = false;
        }
        if (!isNoFound) {
          return id;
        }
      }
    }
    return uuidv4();
  };
  useEffect(() => {
    if (localStorage.getItem(storageName) !== null) {
      const data = JSON.parse(localStorage.getItem(storageName));
      let storageLength = 0;
      for (const toStorageElement of data) {
        storageLength += toStorageElement.count;
      }
      setStorageLength(storageLength);
    }
  }, []);
  return {
    add,
    get,
    removeById,
    storageLength,
    addOne,
    removeOne,
    clearBasket,
    updateOne,
    removeErrors,
    removeStorage,
    getAvlID,
  };
};
