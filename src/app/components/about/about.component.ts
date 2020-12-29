import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
	this.title = "Santiago Toral";
	this.subtitle = "Desarrollador web en ciernes...";
	this.email = "santonob02@hotmail.com";
 }

  ngOnInit(): void {
  }

}


