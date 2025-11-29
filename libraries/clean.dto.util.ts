export function cleanDto<T extends object>(dto: T): Partial<T> {
    const cleaned: Partial<T> = {};

    for (const key in dto) {
        if (dto[key] !== undefined) {
            cleaned[key] = dto[key];
        }
    }

    return cleaned;
}