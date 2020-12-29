import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {
	this.autor = {
		nombre: "Santiago Toral",
		email: "santonob02@hotmail.com"
	};
 }

  ngOnInit(){
	$('.galeria').bxSlider({
		mode: 'fade',
    	captions: true,
    	slideWidth: this.anchura
  	});
  }

  lanzar(event){
	this.conseguirAutor.emit(this.autor);
  }

}

