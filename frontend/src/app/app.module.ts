import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopmenuComponent } from './components/topmenu/topmenu.component';
import { ViewsProductsComponent } from './components/views-products/views-products.component';
import { LoginComponent } from './components/login/login.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { AuthenticationGuard } from './services/authentication.guard';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { ToSellComponent } from './components/to-sell/to-sell.component';
import { NgxFileDropModule  } from 'ngx-file-drop';
import {FilePickerModule} from 'ngx-awesome-uploader';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ciudad/:dep/:mun/:loc/:name/:id', component: ViewsProductsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'vender', component: ToSellComponent, canActivate: [AuthenticationGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    FooterComponent,
    TopmenuComponent,
    ViewsProductsComponent,
    LoginComponent,
    ToSellComponent,

  ],
    
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ImageCropperModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    HttpClientModule,
    NgxFileDropModule,
    FilePickerModule,
    MatProgressSpinnerModule
  ],
  providers:[AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
