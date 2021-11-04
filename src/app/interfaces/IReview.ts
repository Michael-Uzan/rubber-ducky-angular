export interface IReview {
    _id?: string,
    to?: {
        duckId?: string,
        duckName: string,
        duckImg: string,
    },
    name: string,
    rating: number,
    description: string,
    at?: number
}

