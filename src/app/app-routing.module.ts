import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './common-components/layout/basicLayout.component';
import { AllListFeedComponent } from './modules/feed/components/all.list.feed.component';
import { FavoritesFeedListComponent } from './modules/feed/components/favorites.list.feed.component';
import { FriendsListFeedComponent } from './modules/feed/components/fried.list.feed.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '', component: BasicLayoutComponent ,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },

    ],
  },

  {
    path: 'feed', component: BasicLayoutComponent ,
    children: [
      { path: 'favorites', component: FavoritesFeedListComponent },
      { path: 'list', component: AllListFeedComponent },
      { path: 'friend/:id', component: FriendsListFeedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
