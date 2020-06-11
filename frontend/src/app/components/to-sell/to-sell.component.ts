import { Component, OnInit } from '@angular/core';
//import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { PublishArticleService } from '../../services/publish-article.service';


@Component({
  selector: 'app-to-sell',
  templateUrl: './to-sell.component.html',
  styleUrls: ['./to-sell.component.css']
})
export class ToSellComponent implements OnInit {

  constructor(private publish : PublishArticleService) { }

  ngOnInit() {
  }

  
      onSubmit(form){
        console.log(form.value);
      }

      public files: NgxFileDropEntry[] = [];
 
      public dropped(files: NgxFileDropEntry[]) {
        this.files = files;
        for (const droppedFile of files) {
     
          // Is it a file?
          if (droppedFile.fileEntry.isFile) {
            const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
            fileEntry.file((file: File) => {
     
              // Here you can access the real file
              //console.log(droppedFile.relativePath, file);
              
              this.publish.addImage(file);
     
            });
          } else {
            // It was a directory (empty directories are added, otherwise only files)
            const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
            console.log(droppedFile.relativePath, fileEntry);
          }
        }
      }
     
      public fileOver(event){
        //console.log(event);
      }
     
      public fileLeave(event){
        //console.log(event);
      }
}
