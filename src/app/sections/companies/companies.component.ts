import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-section',
  imports: [],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss',
})
export class CompaniesComponent {
  empresas: string[] = ['TOTIS', 'Jarritos', 'Grupo FEMSA', 'Cafiver', 'CFE', 'Intralox', 'Andritz'];
}
