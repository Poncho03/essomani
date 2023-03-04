import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/interfaces/image';
import { Specialities } from 'src/app/interfaces/specialities';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit{

  public specialities: Specialities[] = [];
  public images: Images[] = [
    { url: "assets/img/test.jpg" }
  ];

  constructor(private baseService: BaseService) {}

  public ngOnInit(): void {
    this.baseService.getSpecialities()
    .subscribe(response => {
      this.specialities = response;
    })
  }
}
