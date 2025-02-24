export class CreateQaDto {
    placeId: string;
    question: string;
    askedAt: Date;
    answers: { answerText: string, answeredAt: Date }[];
}