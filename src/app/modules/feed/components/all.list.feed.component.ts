import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogginService } from 'app/common-components/services/loggin.service';
import { FeedService } from '../services/feed.service';
import { BaseListFeedComponent } from './base.list.feed.component';

@Component({
    selector: 'app-all-feed',
    templateUrl: 'base.list.feed.template.html',
    styleUrls: ['./feed.timeline.scss'],
})

export class AllListFeedComponent extends BaseListFeedComponent {

    constructor(protected service: FeedService, protected active: ActivatedRoute, protected logginService: LogginService) {
        super(service, active, logginService);

        this.componentTitle = 'All my friends feed list';

        this.active.params.subscribe(c => {
            this.service.getAll().subscribe(all => {
                this.allFeeds = all;
                this.sortFeed();
            });
        });

    }

}
