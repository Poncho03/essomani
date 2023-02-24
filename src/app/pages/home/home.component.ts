import { Component } from '@angular/core';
import { Images } from 'src/app/interfaces/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public images: Images[] = [
    { url: "assets/img/test.jpg" },
    { url: "assets/img/test.jpg" },
    { url: "assets/img/test.jpg" },
    { url: "assets/img/test.jpg" },
    { url: "assets/img/test.jpg" }
  ];

}
