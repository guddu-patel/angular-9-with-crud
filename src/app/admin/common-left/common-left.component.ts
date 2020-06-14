import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-common-left',
  templateUrl: './common-left.component.html',
  styleUrls: ['./common-left.component.css']
})
export class CommonLeftComponent implements OnInit {

  constructor(private cmnser: CommonService) { }

  ngOnInit(): void {
  }
  logout() {
    this.cmnser.logout();
  }
}
