import { Component, OnInit } from '@angular/core';
import { Compromise } from 'src/app/interfaces/compromise';
import { Images } from 'src/app/interfaces/image';
import { Values } from 'src/app/interfaces/values';
import { BaseService } from 'src/app/services/base.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    standalone: false
})
export class AboutComponent implements OnInit {

  public values: Values[] = [];
  public compromises: Compromise[] = [];
  public images: Images[] = [
    { url: "assets/img/nosotros.jpg" }
  ];

  constructor(private baseService: BaseService) { }

  public ngOnInit() {
    this.baseService.getValues()
    .subscribe(response => {
      this.values = response;
    });

    this.baseService.getCompromise()
    .subscribe(response => {
      this.compromises = response;
    });
  }
}
