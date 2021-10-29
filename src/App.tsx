import "./styles.css";
import { useData } from "./useData";
import faker from "faker";
import { Row } from "./Row";
import { useContext, useEffect, useRef } from "react";
import { DataContext } from "./RootContextProvider";

export default function App() {
  const context = useContext(DataContext);
  console.log(context);

  const newData = () => {
    context.addItem({
      id: faker.datatype.uuid(),
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar()
      }
    });
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
          overflowX: "scroll"
        }}
      >
        {context &&
          context.data &&
          context.data.map((d, i) => {
            return <Row rowData={d} key={d.id} />;
          })}
      </div>
      <button onClick={newData}>Add more</button>
    </div>
  );
}
