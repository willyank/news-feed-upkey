import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogginService } from 'app/common-components/services/loggin.service';
import { FeedService } from '../services/feed.service';
import { BaseListFeedComponent } from './base.list.feed.component';

@Component({
    selector: 'app-friends-feed',
    templateUrl: 'base.list.feed.template.html'
})

export class FriendsListFeedComponent extends BaseListFeedComponent {

    constructor(protected service: FeedService, protected active: ActivatedRoute, protected logginService: LogginService) {
        super(service, active, logginService);

        this.active.params.subscribe(c => {
            this.allFeeds = [];
            this.componentTitle = 'Friend feed list';
            if (c.id) {
                this.friendId = parseInt(c.id, 0);
                this.service.getAllFeedFriend(this.friendId).subscribe(all => {
                    console.log(this.logginService.getLoggedUser())
                    this.allFeeds = all;
                    if (all.length > 0) {
                        const firstName = all[0].user.name.split(' ').shift();
                        this.componentTitle = `${firstName} feed list!`;
                        this.sortFeed();
                    }
                });
            }
        });

    }

}
