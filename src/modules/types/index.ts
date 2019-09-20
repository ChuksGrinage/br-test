export enum stuff {
    stuff,
    stuff2
}

export interface Restaurant {
    name: string;
    category: string;
    contact: Contact;
    location: Location;
    backgroundImageURL: string;
}

export interface Contact {
    phone: string;
    formattedPhone: string;
    twitter: string;
}

export interface Location {
    address: string;
    cc: string,
    city: string;
    country: string;
    crossStreet: string;
    lat: number;
    lng: number;
    formattedAddress: string[];
    postalCode: string;
    state: string;
}