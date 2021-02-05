import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  sideNavOpen=false
 
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  toggleSideNav(){
    this.sideNavOpen=!this.sideNavOpen
  }

}
