import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  swiperConfig: any = {
    loop: 'true',
    navigation: 'true',
    autoplay: { delay: 1000, disableOnInteraction: false },
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      600: {
        slidesPerView: 3
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
