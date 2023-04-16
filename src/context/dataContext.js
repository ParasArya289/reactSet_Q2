import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../utils/utils";

export const DataContext = createContext();

export const DataContextProvder = ({ children }) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fakeFetch("https://example.com/api/books");
        const {
          data: { books, user }
        } = res;
        setData(books);
        setUser(user);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetch();
  }, []);

  const markAsRead = (ID) => {
    const newData = data.map((el) =>
      el.id === ID ? { ...el, read: true } : el
    );
    setData(newData);
  };

  const read = data.filter(({ read }) => read === true);

  const addTofavorite = (ID) => {
    const newData = data.map((el) =>
      el.id === ID ? { ...el, isFavorite: true } : el
    );
    setData(newData);
  };
  const removeFromfavorite = (ID) => {
    const newData = data.map((el) =>
      el.id === ID ? { ...el, isFavorite: false } : el
    );
    setData(newData);
  };

  const favorite = data.filter(({ isFavorite }) => isFavorite === true) ?? [];
  return (
    <DataContext.Provider
      value={{
        data,
        user,
        read,
        markAsRead,
        favorite,
        addTofavorite,
        removeFromfavorite
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
