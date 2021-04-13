import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HomeComponent],
    imports: [BrowserModule, RouterModule, FormsModule, CommonModule],
    exports: [HomeComponent],
  })

  export class HomeModule {}
