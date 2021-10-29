import { createContext, useState } from "react";

interface IDataModel {
  id: string;
  data: object;
}

export const DataContext = createContext({
  data: [],
  setData: null,
  addItem: null,
  removeItem: null,
  editItem: null
});

export function RootContextProvider(props) {
  const [data, setData] = useState([]);
  const addItem = (payload: IDataModel, index = data.length) => {
    console.log(payload);
    if (index === data.length) {
      const newData = [...data];
      newData.push(payload);
      setData(newData);
    }
  };

  const removeItem = (id: string) => {
    if (!id) return;
    const newData = [...data];
    const index = data.findIndex((d) => {
      console.log(d.id, id);
      return d.id === id;
    });
    if (index < 0) return;
    newData.splice(index, 1);
    setData(newData);
  };

  const editItem = (payload: IDataModel) => {
    if (!payload.id) return;
    const newData = [...data];
    const index = data.findIndex((d) => d.id === payload.id);
    if (index < 0) return;
    newData[index] = {
      ...newData[index],
      ...payload
    };
    setData(newData);
  };
  const contextValue = {
    data,
    setData,
    addItem,
    removeItem,
    editItem
  };
  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
}
