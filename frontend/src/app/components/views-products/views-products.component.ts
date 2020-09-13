import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublishArticleService } from '../../services/publish-article.service';
import {NgbModal, ModalDismissReasons,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-views-products',
  templateUrl: './views-products.component.html',
  styleUrls: ['./views-products.component.css'],
  providers: [NgbCarouselConfig] 
 
})
export class ViewsProductsComponent implements OnInit {
  closeResult = '';
  showNavigationArrows = true;
  showNavigationIndicators = true;
  showSpinner = true;

  id: number;
  private sub: any;
  item:any = {
    id:0
  };
  Productos:any;
  imagen:any;
  portada:any;

  constructor(private route: ActivatedRoute,
              private publisharticle : PublishArticleService,
              private modalService: NgbModal,
              config: NgbCarouselConfig) { 
                config.showNavigationArrows = true;
                config.showNavigationIndicators = true;
              }

  ngOnInit() {
   
    this.sub = this.route.params.subscribe(params => {
      this.item.id = +params['id']; 
   });

   this.publisharticle.itemById(this.item)
   .subscribe(data=>{
    this.showSpinner = false;
      this.Productos= data['data'];
        this.publisharticle.imgById(this.item)
        .subscribe(img=>{
          this.imagen = img['data']
          this.portada = img['data'][0];
        });
   }); 
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
