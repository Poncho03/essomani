import { Component } from '@angular/core';
import { Images } from 'src/app/interfaces/image';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  public images: Images[] = [
    { url: "assets/img/test.jpg" }
  ];

}
