import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Band {
    tagline: string;
    name: string;
    email: string;
    foundingYear: bigint;
    genres: Array<string>;
    location: string;
}
export type BandId = bigint;
export interface backendInterface {
    addBand(name: string, tagline: string, email: string, location: string, genres: Array<string>, foundingYear: bigint): Promise<BandId>;
    getAllBands(): Promise<Array<Band>>;
    getBand(id: BandId): Promise<Band | null>;
}
