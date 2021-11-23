export const exceptionCodeHandler = (err_code: number): number => {
    switch(err_code) {
        case 404:
            return 404;
        case 500:
            return 500;
        case 429:
            return 429;
        default:
            return 500;
    }
}
