import { DEFAULT_THEME_COLOR } from "@/configs/constants";
import { Action } from "@/types/redux";
const initThemeColor: string = DEFAULT_THEME_COLOR;
const themeColorReducer = (color: string = initThemeColor, action: Action) => {
  switch (action.type) {
    case "SETTHEMECOLOR":
      return action.payload;
    default:
      return color;
  }
};
export default themeColorReducer;
