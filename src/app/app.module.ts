import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackageDetailComponent } from './packages/package-detail/package-detail.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageItemComponent } from './packages/package-list/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackageDetailComponent,
    PackageListComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
