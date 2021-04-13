import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogginService } from 'app/common-components/services/loggin.service';
import { FeedService } from '../services/feed.service';
import { BaseListFeedComponent } from './base.list.feed.component';

@Component({
    selector: 'app-favorites-feed',
    templateUrl: 'base.list.feed.template.html',
    styleUrls: ['./feed.timeline.scss'],
})
export class FavoritesFeedListComponent extends BaseListFeedComponent {

    constructor(protected service: FeedService, protected active: ActivatedRoute, protected logginService: LogginService) {
        super(service, active, logginService);

        this.componentTitle = 'My favorites feeds';

        const user = logginService.getLoggedUser();

        this.active.params.subscribe(c => {
            this.service.getAll().subscribe(all => {
                /*
                Load all feeds then filter for the user's favorites IS NOT the right way,
                did this way only for the test..
                The right way is pass the logged user id and server returns the favorites...
                */
                this.allFeeds = all.filter(f => user.favoritesFeeds.some(s => s === f.id));
                this.sortFeed();
            });
        });

    }

}
