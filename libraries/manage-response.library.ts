export class ManageResponse {
    static microservice(data: any, meta: any) {
        return {
            data,
            ...meta,
        };
    }
}