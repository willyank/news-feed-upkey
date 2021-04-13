// Angular imports
import { of } from 'rxjs';
import { HttpRequest, HttpResponse } from '@angular/common/http';
// Local imports
import * as data from 'assets/mock-data/feed.json';
import * as usersData from 'assets/mock-data/users.json';
import { Feed } from '../feed/models/feed.model';

const feeds: any[] = (data as any).default;
const users: any[] = (usersData as any).default;

const getAllFeeds = (request: HttpRequest<any>) => {
  return of(new HttpResponse({
    status: 200, body: feeds
  }));
};

const getAllFeedsFriend = (request: HttpRequest<any>) => {
  const id = extractIdPathParamFromUrl(request);

  const filtered = feeds.filter(f => f.user.id.toString() === id);

  return of(new HttpResponse({
    status: 200, body: filtered
  }));
};

const getAllFriends = (request: HttpRequest<any>) => {
  const id = extractIdPathParamFromUrl(request);

  const filtered = users.filter(f => f.id.toString() !== id);

  return of(new HttpResponse({
    status: 200, body: filtered
  }));
};

const extractIdPathParamFromUrl = (request: HttpRequest<any>) => {
  const requestUrl = new URL(request.url);
  return requestUrl.pathname.split('/').pop();
};

const addFeed = (request: HttpRequest<any>) => {
  const f = request.body as Feed;
  feeds.push(f);
  return of(new HttpResponse({
    status: 200, body: f
  }));
};

const addRemoveFavorite = (request: HttpRequest<any>) => {
  const feed = request.body as any;
  // const user = users.find(f => f.id === feed.userId);

  let user;
  for (let i = 0; i < users.length; i++) { 
    user = users[i];
    if (user.id !== feed.userId) {
      continue;
    }

    const idx = user.favoritesFeeds.indexOf(feed.feedId);

    console.log(idx);
    if (idx >= 0) {
      user.favoritesFeeds.splice(idx, 1);
    } else {
      user.favoritesFeeds.push(feed.feedId);
    }

    console.log(user);
    break;
  }
  return of(new HttpResponse({
    status: 200, body: (user ? user.favoritesFeeds : [])
  }));
};


export const selectHandler = (request: HttpRequest<any>) => {
  const requestUrl = new URL(request.url);
  const getOneRegexp: RegExp = new RegExp(`/feed/[0-9a-zA-Z]+`);

  // console.log(request.headers);
  const pathname = requestUrl.pathname;
  switch (request.method) {
    case 'GET':
      if (pathname === '/feed/all') {
        return getAllFeeds;
      } else if (pathname.indexOf('/feed/friends/') >= 0) {
        return getAllFriends;
      } else if (pathname.indexOf('/feed/friend/') >= 0) {
        return getAllFeedsFriend;
      } else {
        return null;
      }
    case 'POST':
      if (pathname === '/feed/favorite/addRemove') {
        return addRemoveFavorite;
      }
      return addFeed;
    case 'DELETE':
      return null;
    default:
      return null;
  }
};