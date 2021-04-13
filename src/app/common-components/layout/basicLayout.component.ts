import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { MobileDetectService } from '../services/mobile-detect.service';


declare var jQuery: any;

@Component({
  selector: 'app-basic',
  templateUrl: 'basicLayout.template.html'
})
export class BasicLayoutComponent implements OnInit {

  public isMobile = false;

  constructor(private device: MobileDetectService) {
    this.isMobile = device.isMobile();
    console.log(device.isMobile());
  }

  public ngOnInit(): any {
  }

  @HostListener('window:resize')
  public onResize() {
    if (window.innerWidth > 500) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }

}
