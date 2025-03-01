export class CreateReviewDto { 
    placeId: string;
    rating: number;
    comment: string;
    multimedia: string[];
    createdAt: Date;
}