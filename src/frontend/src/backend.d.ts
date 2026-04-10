import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RSVPSubmission {
    guestCount: bigint;
    name: string;
    email: string;
    dietary: string;
    songRequest: string;
}
export interface RSVPRecord {
    guestCount: bigint;
    name: string;
    submittedAt: bigint;
    email: string;
    dietary: string;
    songRequest: string;
}
export interface backendInterface {
    getRSVPs(): Promise<Array<RSVPRecord>>;
    submitRSVP(submission: RSVPSubmission): Promise<{
        __kind__: "ok";
        ok: string;
    } | {
        __kind__: "err";
        err: string;
    }>;
}
