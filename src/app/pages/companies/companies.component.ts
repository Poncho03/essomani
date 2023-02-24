import { Component } from '@angular/core';
import { Images } from 'src/app/interfaces/image';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {

  public images: Images[] = [
    { url: "assets/img/test.jpg" }
  ];

}
