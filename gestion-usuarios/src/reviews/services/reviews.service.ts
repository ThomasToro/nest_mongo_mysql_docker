import { Injectable } from '@nestjs/common'; 
import { Review, ReviewDocument } from '../schemas/reviews.schema'; 
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose'; 
import { CreateReviewDto } from '../dto/create-review.dto'; 

// Decorador Injectable marca la clase como un servicio que puede ser inyectado en otros componentes
@Injectable()
export class ReviewsService {
    // Inyectamos el modelo Review en el constructor usando InjectModel
    constructor(@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>) {}

    // Método para crear una nueva reseña
    createReview(Review: CreateReviewDto) {
        // Creamos una nueva instancia del modelo Review utilizando los datos proporcionados por el DTO
        const newReview = new this.reviewModel(Review);

        // Guardamos la nueva reseña en la base de datos y retornamos el resultado
        return newReview.save();
    }
}

    
