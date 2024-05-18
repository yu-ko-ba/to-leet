import { Component } from "@angular/core";
import _licenses from "../../assets/licenses.json";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-licenses",
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: "./licenses.component.html",
  styleUrl: "./licenses.component.css",
})
export class LicensesComponent {
  licenses = Object.values(_licenses);
}
