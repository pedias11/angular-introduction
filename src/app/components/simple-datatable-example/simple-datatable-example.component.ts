import { Component } from '@angular/core';
import { SimpleDatatableComponent } from "../simple-datatable/simple-datatable.component";
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
    selector: 'app-simple-datatable-example',
    standalone: true,
    templateUrl: './simple-datatable-example.component.html',
    styleUrl: './simple-datatable-example.component.css',
    imports: [SimpleDatatableExampleComponent, SimpleDatatableComponent]
})
export class SimpleDatatableExampleComponent {
  manyperson = ManyPerson;
}
