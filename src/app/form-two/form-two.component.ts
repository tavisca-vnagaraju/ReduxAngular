import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { Observable } from "rxjs";

@Component({
  selector: "app-form-two",
  templateUrl: "./form-two.component.html",
  styleUrls: ["./form-two.component.css"]
})
export class FormTwoComponent implements OnInit {
  fname: any;
  lname: any;
  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    let state = this.ngRedux;
    const self = this;
    this.ngRedux.subscribe(function() {
      let formOne = state.getState().formOne.formOne;
      if(state.getState().formOne.actionType == "formOnesubmit"){
        if (formOne.fname.value != undefined) {
          self.fname = formOne.fname.value;
        }
        if (formOne.lname.value != undefined) {
          self.lname = formOne.lname.value;
        }
      }
    });
  }

  fnameFocusIn(): void {
    this.ngRedux.dispatch({ type: "formTwofNameFocusIn", payload: true });
    this.ngRedux.dispatch({ type: "formTwofNameIsTouched", payload: true });
  }
  fnameFocusOut(): void {
    this.ngRedux.dispatch({ type: "formTwofNameFocusOut", payload: false });
  }
  lnameFocusIn(): void {
    this.ngRedux.dispatch({ type: "formTwolNameFocusIn", payload: true });
    this.ngRedux.dispatch({ type: "formTwolNameIsTouched", payload: true });
  }

  lnameFocusOut(): void {
    this.ngRedux.dispatch({ type: "formTwolNameFocusOut", payload: false });
  }
  submit(): void {
    this.ngRedux.dispatch({
      type: "formTwosubmit",
      payload: { fname: this.fname, lname: this.lname }
    });
  }
}
