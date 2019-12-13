import { Component, OnInit } from "@angular/core";
import { NgRedux, select } from "@angular-redux/store";
import { IAppState } from "../store";
import { Observable } from "rxjs";

@Component({
  selector: "app-form-one",
  templateUrl: "./form-one.component.html",
  styleUrls: ["./form-one.component.css"]
})
export class FormOneComponent implements OnInit {
  fname:any;
  lname:any;
  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {
    let state = this.ngRedux;
    this.ngRedux.subscribe(function(){
      console.log(state.getState().formOne);
    });
  }
  fnameFocusIn(): void {
    this.ngRedux.dispatch({type:"formOnefNameFocusIn",payload:true});
    this.ngRedux.dispatch({type:"formOnefNameIsTouched",payload:true});
  }
  fnameFocusOut(): void {
    this.ngRedux.dispatch({type:"formOnefNameFocusOut",payload:false});
  }
  lnameFocusIn(): void {
    this.ngRedux.dispatch({type:"formOnelNameFocusIn",payload:true});
    this.ngRedux.dispatch({type:"formOnelNameIsTouched",payload:true});
  }
  
  lnameFocusOut(): void {
    this.ngRedux.dispatch({type:"formOnelNameFocusOut",payload:false});
  }
  submit(): void {
    this.ngRedux.dispatch({type:"formOnesubmit",payload:{"fname":this.fname , "lname":this.lname }});
  }
}
