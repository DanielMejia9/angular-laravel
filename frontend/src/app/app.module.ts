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
import { FilterComponent } from './components/filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import { SliderComponent } from './components/slider/slider.component';
import {MatMenuModule} from '@angular/material/menu';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './components/banner/banner.component';
import {MatSelectModule} from '@angular/material/select';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ciudad/:dep/:mun/:loc/:name/:id', component: ViewsProductsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'vender', component: ToSellComponent, canActivate: [AuthenticationGuard]}, 
  { path: 'micuenta', component: MyAccountComponent, canActivate: [AuthenticationGuard]},
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
    FilterComponent,
    SliderComponent,
    MyAccountComponent,
    BannerComponent,

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
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    NgbModule,
    NgbPaginationModule, NgbAlertModule
    
  ],
  providers:[AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
