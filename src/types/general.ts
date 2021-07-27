export type Place = {
    id: string | number;
    image: string;
    title: string;
    coordinate: [number, number];
};

export type Places = Place[];

export type User = {
    id: string | number;
    image: string;
    name: string;
    places?: Place[];
    placeCount?: number;
};

export type Users = User[];
