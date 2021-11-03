import "./styles.css";
import faker from "faker";
import { Row } from "./Row";
import { useContext, useEffect, useRef } from "react";
import { DataContext, IDataModel } from "./RootContextProvider";

export default function App() {
  const context = useContext(DataContext);
  const dummyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dummyRef && dummyRef.current) {
      dummyRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "center",
      });
    }
  });

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
      <div className="grid">
        {context &&
          context.data &&
          context.data.map((d: IDataModel, i: number) => {
            return <Row rowData={d} key={d.id} />;
          })}
        <div
          ref={dummyRef}
          style={{
            border: "1px solid green",
            height: "210px",
            width: "150px",
            margin: "10px",
          }}
          onClick={newData}
          className="addNewButton"
        >
          Add New
        </div>
      </div>
    </div>
  );
}
