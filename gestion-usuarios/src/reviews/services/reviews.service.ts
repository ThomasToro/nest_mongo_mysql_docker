import { Injectable } from '@nestjs/common';
import { Review, ReviewDocument } from '../schemas/reviews.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewDto } from '../dto/create-review.dto';

@Injectable()


export class ReviewsService {
    constructor(@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>){}
    getMessage(){
        return "Hola Mundo";
    }
    createReview(Review: CreateReviewDto){
        const newReview = new this.reviewModel(Review);
        return newReview.save();
            
        }
}
    
