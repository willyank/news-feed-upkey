import { Component } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.template.html'
  })

  export class FooterComponent {

    public version(): string {
      return environment.version + ' - ' + environment.versionDate;
    }
  }
