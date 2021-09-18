export class ApiInterface {
    getAll(): Promise<void>;

    get(): Promise<void>;

    add(): Promise<void>;

    update(): Promise<void>;
}