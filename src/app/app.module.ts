import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";

import { FormsModule } from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, IAppState } from './store/index';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';

@NgModule({
  imports: [ NgReduxModule, BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, FormOneComponent, FormTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension
  ) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as IAppState,
      [],
      [ devTool.isEnabled() ? devTool.enhancer() : f => f]
    );
  }
}
