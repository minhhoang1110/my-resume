import { Action } from "@/types/redux";

const setThemeColor = (value: string): Action => {
  return { type: "SETTHEMECOLOR", payload: value };
};
const themeColorAction = { setThemeColor };
export default themeColorAction;
