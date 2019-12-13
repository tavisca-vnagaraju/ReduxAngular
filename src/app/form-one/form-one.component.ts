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
  @select("counter") public counter$: Observable<any>;
  ngOnInit() {
    let state = this.ngRedux;
    this.ngRedux.subscribe(function(){
      console.log(state.getState().formOne);
    });
  }
  fnameFocusIn(): void {
    this.ngRedux.dispatch({type:"fNameFocusIn",payload:true});
    this.ngRedux.dispatch({type:"fNameIsTouched",payload:true});
  }
  fnameFocusOut(): void {
    this.ngRedux.dispatch({type:"fNameFocusOut",payload:false});
  }
  lnameFocusIn(): void {
    this.ngRedux.dispatch({type:"lNameFocusIn",payload:true});
    this.ngRedux.dispatch({type:"lNameIsTouched",payload:true});
  }
  
  lnameFocusOut(): void {
    this.ngRedux.dispatch({type:"lNameFocusOut",payload:false});
  }
  submit(): void {
    this.ngRedux.dispatch({type:"submit",payload:{"fname":this.fname , "lname":this.lname }});
  }
}
