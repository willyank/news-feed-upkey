import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogginService } from 'app/common-components/services/loggin.service';
import { Feed } from '../models/feed.model';
import { FeedService } from '../services/feed.service';

@Component({
    templateUrl: 'base.list.feed.template.html',
    styleUrls: ['./feed.timeline.scss'],
})
export class BaseListFeedComponent {
    public allFeeds: Feed[];
    public friendId: number;
    public componentTitle: string;

    constructor(protected service: FeedService, protected active: ActivatedRoute, protected logginService: LogginService) {
        // this.active.params.subscribe(c => {
        //     let observable;
        //     this.allFeeds = [];
        //     if (c.id) {
        //         this.friendId = parseInt(c.id, 0);
        //         observable = this.service.getAllFeedFriend(this.friendId).subscribe(all => {
        //             this.allFeeds = all;
        //         });
        //     } else {
        //         observable = this.service.getAll().subscribe(all => {
        //             console.log(all);
        //             this.allFeeds = all;
        //         });
        //     }

        // });

    }

    public sortFeed() {
        this.allFeeds.forEach(element => {
            element.date = new Date(element.date);
        });

        this.allFeeds = this.allFeeds.sort((a, b) =>
            a.date.getTime() === b.date.getTime() ? 0 : a.date.getTime() > b.date.getTime() ? -1 : 1);
        console.log(this.allFeeds);
    }

    public addRemoveFavorite(feedId: number) {
        const user = this.logginService.getLoggedUser();
        this.service.addRemoveFavorite(feedId, user.id).subscribe(favs => {
            user.favoritesFeeds = favs;
            // const idx = user.favoritesFeeds.indexOf(feedId); 
            // console.log(idx);
            // console.log(user.favoritesFeeds);
            // if (idx >= 0) {
            //     user.favoritesFeeds = user.favoritesFeeds.splice(idx, 1);
            // } else {
            //     user.favoritesFeeds.push(feedId);
            // }
        });
    }

    public isFavorite(feedId: number){
        const u = this.logginService.getLoggedUser();
        const isFav = u.favoritesFeeds && u.favoritesFeeds.indexOf(feedId) >= 0;
        // console.log(isFav);
        return isFav;
    }

}
