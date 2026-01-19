import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/interfaces/image';
import { Products } from 'src/app/interfaces/products';
import { BaseService } from 'src/app/services/base.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    standalone: false
})
export class ProductsComponent implements OnInit {

  public products: Products[] = [];
  public images: Images[] = [
    { url: "assets/img/services-images/carousel/servicios.jpg" }
  ];

  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService.getProducts()
    .subscribe(response => {
      this.products = response;
    })
  }
}
