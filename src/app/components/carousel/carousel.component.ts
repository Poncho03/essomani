import { AfterViewInit, Component, Input } from '@angular/core';
import { Images } from 'src/app/interfaces/image';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit{

  @Input()
  images: Images[] = [];

  public ngAfterViewInit(): void {
    console.log(this.images);
  }

}