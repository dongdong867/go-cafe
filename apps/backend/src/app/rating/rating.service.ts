import { Injectable } from '@nestjs/common';
import { Rating } from './models/rating.entity';

@Injectable()
export class RatingService {
  createRating(storeId: string): void {
    const rating: Rating = {
      general: 0,
      environment: 0,
      meals: 0,
      attitude: 0,
    };
    const ratingCount = 0;
  }

  addRating(storeId: string, rate: Rating): void {
    const fakeRatingCount = 20;
    const fakeRating: Rating = {
      general: 4,
      environment: 4,
      meals: 2,
      attitude: 3,
    };

    const newRatingCount = fakeRatingCount + 1;
    const newRating: Rating = {
      general:
        (fakeRating.general * fakeRatingCount + rate.general) / newRatingCount,
      environment:
        (fakeRating.environment * fakeRatingCount + rate.environment) /
        newRatingCount,
      meals: (fakeRating.meals * fakeRatingCount + rate.meals) / newRatingCount,
      attitude:
        (fakeRating.attitude * fakeRatingCount + rate.attitude) /
        newRatingCount,
    };
  }

  deleteRating(storeId: string, rate: Rating): void {
    const fakeRatingCount = 20;
    const fakeRating: Rating = {
      general: 4,
      environment: 4,
      meals: 2,
      attitude: 3,
    };

    const newRatingCount = fakeRatingCount - 1;
    const newRating: Rating = {
      general:
        (fakeRating.general * fakeRatingCount - rate.general) / newRatingCount,
      environment:
        (fakeRating.environment * fakeRatingCount + rate.environment) /
        newRatingCount,
      meals: (fakeRating.meals * fakeRatingCount + rate.meals) / newRatingCount,
      attitude:
        (fakeRating.attitude * fakeRatingCount + rate.attitude) /
        newRatingCount,
    };
  }
}
