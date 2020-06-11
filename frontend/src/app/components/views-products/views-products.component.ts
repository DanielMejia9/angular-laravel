import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-views-products',
  templateUrl: './views-products.component.html',
  styleUrls: ['./views-products.component.css']
})
export class ViewsProductsComponent implements OnInit {
  id: number;
  private sub: any;

  Productos:any = [{
    "id":"1",
    "titulo":"Torta de Chocolate",
    "description":"Some quick example text to build on the card title and make up the bulk of the card's content.",
    "precio":"$ 25.000,00",
    "img":"/assets/images/productos/1.jpg"
 }]

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });
   console.log("ID del producto " + this.id);
  }

}
