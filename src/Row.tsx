import { useContext, useState } from "react";
import { DataContext, IDataModel } from "./RootContextProvider";
import faker from "faker";

export const Row: React.FC<{ rowData: IDataModel }> = (props) => {
  const { rowData } = props;
  const [menuToggle, setMenuToggle] = useState(false);
  const context = useContext(DataContext);

  const onMouseEnter = () => {
    setMenuToggle(true);
  };

  const onMouseLeave = () => {
    setMenuToggle(false);
  };

  const deleteCard = () => {
    context.removeItem(rowData.id);
  };

  const editCard = () => {
    const newData: IDataModel = {
      id: rowData.id,
      data: {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatar: faker.image.avatar(),
      },
    };
    context.editItem(newData);
  };

  return (
    <div style={{ margin: "10px", position: "relative" }}>
      {menuToggle && (
        <div style={{ margin: "10px", position: "absolute" }}>
          <button onClick={deleteCard}>Del</button>
          <button onClick={editCard}>Edit</button>
        </div>
      )}
      <img
        src={rowData.data.avatar}
        alt="avatar"
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <p>
        {rowData && rowData.data.firstName} {rowData && rowData.data.lastName}
      </p>
    </div>
  );
};
