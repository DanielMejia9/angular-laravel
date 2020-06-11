import { Component, OnInit} from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Productos:any = [{
    "id":"1",
    "titulo":"Torta de Chocolate",
    "description":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "precio":"$25.000",
    "img":"/assets/images/productos/1.jpg"
 },
 {
    "id":"2",
    "titulo":"Cesta basica",
    "description":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "precio":"5.00",
    "img":"/assets/images/productos/retail-carrito-compra.jpg"
 },
 {
    "id":"3",
    "titulo":"Torta de Chocolate",
    "description":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "precio":"5.00",
    "img":"/assets/images/productos/1.jpg"
 },
 {
    "id":"4",
    "titulo":"Torta de Chocolate",
    "description":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "precio":"5.00",
    "img":"/assets/images/productos/1.jpg"
 },
 {
    "id":"5",
    "titulo":"Torta de Chocolate",
    "description":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "precio":"5.00",
    "img":"/assets/images/productos/1.jpg"
 },
 {
    "id":"6",
    "titulo":"Torta de Chocolate",
    "description":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "precio":"5.00",
    "img":"/assets/images/productos/1.jpg"
 }]

  

  constructor(private router:Router) { }

  ngOnInit() {
  }

  idProduct(value){
    this.router.navigate(['/productos/' + value]);

    console.log("Producto ID" + value)
  }

}
