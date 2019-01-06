import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { DirectivePracticeComponent } from './directive-practice/directive-practice.component';
import { StringInterpolationComponent } from './server/string-interpolation/string-interpolation.component';
import { TwoWayBindComponent } from './server/two-way-bind/two-way-bind.component';
import { PropertyBindComponent } from './server/property-bind/property-bind.component';
import { EventBindComponent } from './server/event-bind/event-bind.component';
import { StructureDirectiveComponent } from './server/structure-directive/structure-directive.component';
import { AttributeDirectiveComponent } from './server/attribute-directive/attribute-directive.component';
import {ServerService} from './server/server.service';
import { ServerChildComponent } from './server/server-child/server-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DirectivePracticeComponent,
    StringInterpolationComponent,
    TwoWayBindComponent,
    PropertyBindComponent,
    EventBindComponent,
    StructureDirectiveComponent,
    AttributeDirectiveComponent,
    ServerChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
