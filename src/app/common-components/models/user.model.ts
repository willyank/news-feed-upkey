import { Feed } from 'app/modules/feed/models/feed.model';

export class User {
    public id: number;
    public name: string;
    public email: string;

    public favoritesFeeds: number[];
}
