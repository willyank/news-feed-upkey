import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class LogginService {
    private loggedUser: User;

    constructor() {
        this.loggedUser = { id: 1, name: 'Willyan Klumb', email: 'willyank@gmail.com', favoritesFeeds: [5] };
    }

    public getLoggedUser(): User {
        return this.loggedUser;
    }
}
