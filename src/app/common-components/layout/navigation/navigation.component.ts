import { Component, AfterViewInit, SecurityContext } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'app/common-components/models/user.model';
import { LogginService } from 'app/common-components/services/loggin.service';
import { Feed } from 'app/modules/feed/models/feed.model';
import { FeedService } from 'app/modules/feed/services/feed.service';

declare var jQuery: any;

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements AfterViewInit {

    public user: User;
    public allFriends: User[];

    constructor(private router: Router, private service: FeedService, private userService: LogginService) {
        this.user = userService.getLoggedUser();

        this.service.getAllFriends(this.user.id).subscribe(all => {
            this.allFriends = all;
        });
    }

    ngAfterViewInit() {

    }

    public getAvatarLetters() {
        try {

            if (this.user) {
                const split = this.user.name.split(' ');
                let abreviado = '';
                for (let i = 0; i < 2; i++) {
                    abreviado += split[i][0];
                }

                return abreviado;
            }
        } catch (e) { }

        return 'user';
    }

    activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
    }

}
