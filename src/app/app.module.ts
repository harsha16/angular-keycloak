import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule, RequestOptions, XHRBackend } from "@angular/http";
import { KeycloakHttp, keycloakHttpFactory } from "./keycloak/keycloak.http";
import { KeycloakService } from "./keycloak/keycloak.service";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [
    {
      provide: KeycloakHttp,

      useFactory: keycloakHttpFactory,

      deps: [XHRBackend, RequestOptions, KeycloakService]
    },

    KeycloakService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
