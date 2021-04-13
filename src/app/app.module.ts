import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutsModule } from './common-components/layout/main.layouts.module';
import { HomeModule } from './modules/home/home.module';
import { MobileDetectService } from './common-components/services/mobile-detect.service';
import { HttpClientModule } from '@angular/common/http';
import { FeedModule } from './modules/feed/feed.module';
import { MockModule } from './modules/mock/mock.module';
import { environment } from 'environments/environment';

const mockModule = environment.useMock ? [MockModule] : [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    mockModule,

    MainLayoutsModule,
    HomeModule,
    FeedModule,
  ],
  providers: [MobileDetectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
