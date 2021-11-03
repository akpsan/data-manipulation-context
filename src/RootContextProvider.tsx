import React, { createContext, useState } from "react";

export interface IDataModel {
  id: string;
  data: any; // change acordingly
}

interface IRootContextProvider {
  data: IDataModel[],
  setData: Function,
  addItem: Function,
  removeItem: Function,
  editItem: Function,
}

const inititalValue = {
  data: [],
  setData: () => undefined,
  addItem: () => undefined,
  removeItem: () => undefined,
  editItem: () => undefined
}

export const DataContext = createContext<IRootContextProvider>(inititalValue);

export const RootContextProvider: React.FC = (props) => {
  const [data, setData] = useState<IDataModel[]>([]);
  const addItem = (payload: IDataModel, index = data.length) => {
    console.log(payload);
    if (index === data.length) {
      const newData: IDataModel[] = [...data];
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
