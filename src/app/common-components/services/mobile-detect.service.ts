import { Injectable } from '@angular/core';
import * as MobileDetect from 'mobile-detect';

@Injectable()
export class MobileDetectService {

    private md: MobileDetect;

    constructor() {
        this.md = new MobileDetect(window.navigator.userAgent);
    }

    public isMobile(): boolean {
        return this.md.mobile() != null;
    }
}
