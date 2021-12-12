import { useEffect, useState } from "react";
import { CheckboxItem } from "./models/checkbox-item.model";
import { DEFAULT_ITEMS } from "./models/default-items";

import "./checkbox.css";

export default function CheckBox() {
  const [items, setItems] = useState<CheckboxItem[]>(DEFAULT_ITEMS);
  const [selectedAll, setSelectedAll] = useState(false);

  const onChange = (index: number) => {
    items[index].checked = !items[index].checked;
    setItems([...items]);
  };

  const onSelectAll = () => {
    items.forEach((item) => (item.checked = !selectedAll));
    setItems([...items]);
  };

  useEffect(() => {
    if (items.every((item) => item.checked)) {
      setSelectedAll(true);
    } else {
      setSelectedAll(false);
    }
  }, [items]);

  return (
    <div>
      <h1>CheckBox</h1>
      <form>
        <div className="selectAllContainer">
          <input
            type="checkbox"
            key="all"
            checked={selectedAll}
            onChange={onSelectAll}
          />
          <label>Select all</label>
        </div>
        {items.map((item, index) => (
          <div key={item.label + index}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onChange(index)}
            />
            <label>{item.label}</label>
          </div>
        ))}
      </form>
    </div>
  );
}
