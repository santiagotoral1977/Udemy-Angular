import { Component, OnInit, ViewChild } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	public widthSlider: number;
	public anchuraToSlider: number;
	public autor: any;
	@ViewChild('textos') var_textos;

  constructor() {}

  ngOnInit(){
	//alert(document.querySelector('#texto').innerHTML);
  }		

  cargarSlider(){
	this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
	this.anchuraToSlider = null;
  }

  getAutor(event){
	this.autor = event;
  }

  mostrar_texto(){
	console.log(this.var_textos);
	alert(this.var_textos.nativeElement.innerHTML);
  }

}

