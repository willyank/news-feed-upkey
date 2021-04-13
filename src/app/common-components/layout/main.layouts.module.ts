import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { LogginService } from '../services/loggin.service';
import { BasicLayoutComponent } from './basicLayout.component';
import { BlankLayoutComponent } from './blankLayout.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
      FooterComponent,
      BasicLayoutComponent,
      BlankLayoutComponent,
      NavigationComponent,
    //   TopNavigationLayoutComponent,
    //   TopNavbarComponent,
    //   TopNavigationNavbarComponent
    ],
    imports: [
      BrowserModule,
      AvatarModule,
      RouterModule,
    ],
    providers: [LogginService],
    exports: [
      FooterComponent,
      BasicLayoutComponent,
      BlankLayoutComponent,
      NavigationComponent,
    //   TopNavigationLayoutComponent,
    //   TopNavbarComponent,
    //   TopNavigationNavbarComponent
    ],
  })

  export class MainLayoutsModule {}
