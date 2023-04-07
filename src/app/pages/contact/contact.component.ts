import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit{

  private fragment: string | null | undefined;
  public linkMaps: string = "https://www.google.com.mx/maps/place/Essomani+S.A.+de+C.V./@18.8525401,-97.060752,17z/data=!3m1!4b1!4m6!3m5!1s0x85c4fd3f2bcf3891:0xb07fc0097a357a07!8m2!3d18.8525401!4d-97.058558!16s%2Fg%2F11txpr2xjn";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    })
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment)?.scrollIntoView();
    } catch (error) { }
  }
}
