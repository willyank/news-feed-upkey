import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LogginService } from 'app/common-components/services/loggin.service';
import { AllListFeedComponent } from './components/all.list.feed.component';
import { FavoritesFeedListComponent } from './components/favorites.list.feed.component';
import { FriendsListFeedComponent } from './components/fried.list.feed.component';
import { FeedService } from './services/feed.service';

@NgModule({
    declarations: [FriendsListFeedComponent, AllListFeedComponent, FavoritesFeedListComponent],
    imports: [BrowserModule, RouterModule, FormsModule, CommonModule],
    exports: [FriendsListFeedComponent, AllListFeedComponent, FavoritesFeedListComponent],
    providers: [FeedService, LogginService]
  })

  export class FeedModule {}
