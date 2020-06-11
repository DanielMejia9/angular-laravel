import { Component, OnInit } from '@angular/core';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader';

@Component({
  selector: 'app-to-sell',
  templateUrl: './to-sell.component.html',
  styleUrls: ['./to-sell.component.css']
})
export class ToSellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 options: ImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: 'http://127.0.0.1:8000/api/auth/addImages',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
};

onUpload(file: FileQueueObject) {
  console.log(file);
}


  /*const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })*/
}
