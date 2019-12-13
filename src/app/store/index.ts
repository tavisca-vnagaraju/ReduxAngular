import { combineReducers } from "redux";
import { FormOne } from "../model/form-one";
import { Fname } from "../model/fname";
import { Lname } from "../model/lname";

export class IAppState {
  formOne: any;
}

export const rootReducer = combineReducers<IAppState>({
  formOne: FormOneReducer
});
function FormOneReducer(state = null, action: any) {
  if (state == null) {
    state = new FormOne();
    state.fname = new Fname();
    state.lname = new Lname();
  }
  switch (action.type) {
    case "fNameFocusIn":
      state.fname.isFocused = action.payload;
      return state;

    case "fNameIsTouched":
      state.fname.IsTouched = action.payload;
      return state;

    case "lNameIsTouched":
      state.lname.IsTouched = action.payload;
      return state;

    case "lNameFocusIn":
      state.lname.isFocused = action.payload;
      return state;

    case "fNameFocusOut":
      state.fname.isFocused = action.payload;
      return state;

    case "lNameFocusOut":
      state.lname.isFocused = action.payload;
      return state;

    case "submit":
      state.lname.lname = action.payload.lname;
      state.fname.fname = action.payload.fname;
      return state;

    default:
      return state;
  }
}
