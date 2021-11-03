import "./styles.css";
import { useData } from "./useData";
import faker from "faker";
import { Row } from "./Row";
import { useContext, useEffect, useRef } from "react";
import { DataContext, IDataModel } from "./RootContextProvider";

export default function App() {
  const context = useContext(DataContext);

  const newData = () => {
    if (context) {
      context.addItem({
        id: faker.datatype.uuid(),
        data: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          avatar: faker.image.avatar(),
        },
      });
    }
  };

  return (
    <div className="App">
      <div
        style={{
          border: "1px solid green",
          maxWidth: "800px",
          height: "550px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          overflowX: "scroll",
        }}
      >
        {context &&
          context.data &&
          context.data.map((d: IDataModel, i: number) => {
            return <Row rowData={d} key={d.id} />;
          })}
      </div>
      <button onClick={newData}>Add more</button>
    </div>
  );
}
