import { Component } from '@angular/core';
import { Images } from 'src/app/interfaces/image';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent {

  public images: Images[] = [
    { url: "assets/img/home-images/carousel/home01.jpg" }
    // { url: "assets/img/home-images/carousel/home02.jpg" }
    // { url: "assets/img/test.jpg" },
    // { url: "assets/img/test.jpg" },
    // { url: "assets/img/test.jpg" }
  ];

}
