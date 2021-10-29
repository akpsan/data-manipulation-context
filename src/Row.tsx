import { useContext, useState } from "react";
import { DataContext } from "./RootContextProvider";
import { useData } from "./useData";

export function Row(props) {
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
    // editData();
  };
  return (
    <div style={{ margin: "10px" }}>
      {menuToggle && (
        <div style={{ margin: "10px", position: "absolute" }}>
          <span onClick={deleteCard} style={{ margin: "10px" }}>
            Del
          </span>
          <span onClick={editCard} style={{ margin: "10px" }}>
            Edit
          </span>
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
}
