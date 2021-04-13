import { User } from 'app/common-components/models/user.model';
import { FeedType } from './enum.feed.type';

export class Feed {
    public id: number;
    public date: Date;
    public description: string;
    public type: FeedType;
    public name: string;

    public user: User;
}
