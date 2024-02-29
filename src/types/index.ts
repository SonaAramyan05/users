export type User = {
    id?: number;
    firstName: string;
    lastName: string;
    age: string;
};
export type Message = {
    id: string;
    username: string;
    text: string;
    date: string;
};

export type MovieDTO = {
    id: string;
    title: string;
    description: string;
    year: number;
    country: string;
    rating: number;
    genres: string[];
    actors: string[];
    imageUrl: string;
    videoUrl: string;
};
