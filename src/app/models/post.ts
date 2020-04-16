export interface Post {
    id: number;
    postedBy: number;
    text: string;
    favoriteCount: number;
    isShowcase: boolean;
    creationDate: string;
    updatedAt: string;
    userDetails: {
        id: number;
        userId: number;
        username: string;
        displayName: string;
        description: string;
        postCount: number;
        followersCount: number;
        followingCount: number;
        creationDate: string;
        updatedAt: string;
    }
}