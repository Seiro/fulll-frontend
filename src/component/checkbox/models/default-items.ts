import { CheckboxItem } from "./checkbox-item.model";

const length = 5;
export const DEFAULT_ITEMS: CheckboxItem[] = Array.from(
  { length },
  (_, index) => index + 1
).map((item) => {
  return {
    label: `item ${item}`,
    checked: false
  };
});
