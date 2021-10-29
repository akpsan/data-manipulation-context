import { useState } from "react";

interface IDataModel {
  id: string;
  data: object;
}
export function useData(initialValue: Array<IDataModel> = []) {
  const [data, setData] = useState<IDataModel[] | null>(initialValue);

  const addData = (payload: IDataModel, index = data.length) => {
    console.log(payload);
    if (index === data.length) {
      const newData = [...data];
      newData.push(payload);
      setData(newData);
    }
  };

  const removeData = (id: string) => {
    if (!id) return;
    const newData = [...data];
    console.log(data);
    const index = data.findIndex((d) => {
      console.log(d.id, id);
      return d.id === id;
    });
    if (index < 0) return;
    newData.splice(index, 1);
    setData(newData);
  };

  const editData = (payload: IDataModel) => {
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

  return { data, setData, addData, removeData, editData };
}
