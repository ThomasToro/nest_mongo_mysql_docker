import { Module } from '@nestjs/common';
import { ReviewsController } from './controllers/reviews.controller';
import { ReviewsService } from './services/reviews.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Review , ReviewSchema} from './schemas/reviews.schema';

@Module({
  controllers: [ReviewsController],

  providers: [ReviewsService],
  imports: [
    MongooseModule.forFeature([{name:Review.name, schema:ReviewSchema}])
  ]
})
export class ReviewsModule {}
