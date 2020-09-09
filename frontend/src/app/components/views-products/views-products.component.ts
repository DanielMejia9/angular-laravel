import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublishArticleService } from '../../services/publish-article.service'


@Component({
  selector: 'app-views-products',
  templateUrl: './views-products.component.html',
  styleUrls: ['./views-products.component.css']
})
export class ViewsProductsComponent implements OnInit {
  id: number;
  private sub: any;
  item:any = {
    id:0
  };
  Productos:any;
  imagen:any;

  constructor(private route: ActivatedRoute,
    private publisharticle : PublishArticleService) { }

  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      this.item.id = +params['id']; 
   });

   this.publisharticle.itemById(this.item)
   .subscribe(data=>{
      this.Productos= data['data'];
        this.publisharticle.imgById(this.item)
        .subscribe(img=>{
          this.imagen = img['data']
          console.log(this.imagen)
        });
   }); 
  }

}
