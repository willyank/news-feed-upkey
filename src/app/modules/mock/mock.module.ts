import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpMockApiInterceptor } from './http-mock-api.interceptor';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpMockApiInterceptor,
        multi: true
      }
    ]
  })
  export class MockModule {
  }