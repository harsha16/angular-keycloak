import { Component } from "@angular/core";
import { KeycloakHttp } from "./keycloak/keycloak.http";
import { KeycloakService } from "./keycloak/keycloak.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Keycloak";

  constructor(private keycloakHttp: KeycloakHttp) {}

  logout(): void {
    KeycloakService.logout();
  }
}
