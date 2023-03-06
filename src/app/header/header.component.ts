import { Component, Input, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() main: any;
  @Input() skills: any;
  @Input() projects: any;
  @Input() experience: any;
  @Input() contact: any;

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void { 
    // this.viewportScroller.scrollToAnchor(elementId);
    document.querySelector('#' + elementId)?.scrollIntoView({behavior: "smooth"});
  } 
}
