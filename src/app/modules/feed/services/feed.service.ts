import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/common-components/models/user.model';
import { Observable } from 'rxjs';
import { Feed } from '../models/feed.model';

@Injectable()
export class FeedService {
    private baseUrl = 'http://localhost:8000/feed';

    constructor(private http: HttpClient) { }

    private getToken(): string {
        return Math.random().toString(36).substring(7);
    }

    private getHeader(): any {
        /*
        The best way to add an Authorization is through HttpInterceptor, but how I do'nt have a real server to implement an intercepor
        and I used an interceptor to emulate a server, I did this way, just for this test.
        */
        const head = new HttpHeaders()
            .append('Authorization', 'Bearer ' + this.getToken());
        return head;
    }

    getAll(): Observable<Feed[]> {
        return this.http.get<Feed[]>(this.baseUrl + '/all', {headers: this.getHeader()});
    }

    getAllFriends(loggedUserId: number): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + `/friends/${loggedUserId}`, {headers: this.getHeader()});
    }

    getAllFeedFriend(userId: number): Observable<Feed[]> {
        return this.http.get<Feed[]>(this.baseUrl + `/friend/${userId}`, {headers: this.getHeader()});
    }

    addRemoveFavorite(feedId: number, userId: number): Observable<number[]> {
        return this.http.post<number[]>(this.baseUrl + `/favorite/addRemove`, { feedId, userId} , {headers: this.getHeader()});
    }
}
