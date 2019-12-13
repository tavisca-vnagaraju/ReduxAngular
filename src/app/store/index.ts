import { combineReducers } from "redux";
import { FormOne } from "../model/form-one";
import { FormTwo } from "../model/form-two";
import { Fname } from "../model/fname";
import { Lname } from "../model/lname";
import { StateModel } from "../model/state-model";

export class IAppState {
  formOne: any;
  formTwo: any;
}

export const rootReducer = combineReducers<IAppState>({
  formOne: FormOneReducer,
  formTwo: FormTwoReducer
});
function FormOneReducer(state = null, action: any) {
  if (state == null) {
    state = new StateModel();
    state.formOne = new FormOne();
    state.formOne.fname = new Fname();
    state.formOne.lname = new Lname();
  }
  switch (action.type) {
    case "formOnefNameFocusIn":
      state.formOne.fname.isFocused = action.payload;
      return state;

    case "formOnefNameIsTouched":
      state.formOne.fname.IsTouched = action.payload;
      return state;

    case "formOnelNameIsTouched":
      state.formOne.lname.IsTouched = action.payload;
      return state;

    case "formOnelNameFocusIn":
      state.formOne.lname.isFocused = action.payload;
      return state;

    case "formOnefNameFocusOut":
      state.formOne.fname.isFocused = action.payload;
      return state;

    case "formOnelNameFocusOut":
      state.formOne.lname.isFocused = action.payload;
      return state;

    case "formOnesubmit":
      state.formOne.lname.value = action.payload.lname;
      state.formOne.fname.value = action.payload.fname;
      return state;

    default:
      return state;
  }
}
function FormTwoReducer(state = null, action: any) {
  if(state == null){
    state = new StateModel();
    state.formTwo = new FormTwo();
    state.formTwo.fname = new Fname();
    state.formTwo.lname = new Lname();
  }
  switch (action.type) {
    case "formTwofNameFocusIn":
      state.formTwo.fname.isFocused = action.payload;
      return state;

    case "formTwofNameIsTouched":
      state.formTwo.fname.IsTouched = action.payload;
      return state;

    case "formTwolNameIsTouched":
      state.formTwo.lname.IsTouched = action.payload;
      return state;

    case "formTwolNameFocusIn":
      state.formTwo.lname.isFocused = action.payload;
      return state;

    case "formTwofNameFocusOut":
      state.formTwo.fname.isFocused = action.payload;
      return state;

    case "formTwolNameFocusOut":
      state.formTwo.lname.isFocused = action.payload;
      return state;

    case "formTwosubmit":
      state.formTwo.fname.value = action.payload.fname;
      state.formTwo.lname.value = action.payload.lname;
      return state;

    default:
      return state;
  }
}
