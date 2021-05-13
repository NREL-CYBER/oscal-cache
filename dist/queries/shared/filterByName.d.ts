export declare const filterByName: <T extends {
    name?: string | undefined;
}>(query?: string | undefined) => (target: T) => boolean;
