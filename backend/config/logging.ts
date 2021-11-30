//depending on the request info, program will return accordingly
const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(
            `[${getTimeStamp()}] [INFO] [${namespace}] ${message}`,
            object
        );
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
};

//depending on the request info, program will return accordingly
const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(
            `[${getTimeStamp()}] [WARN] [${namespace}] ${message}`,
            object
        );
    } else {
        console.info(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
};

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.error(
            `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`,
            object
        );
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
};

//depending on the request info, program will return accordingly
const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.info(
            `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`,
            object
        );
    } else {
        console.info(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

const getTimeStamp = (): string => {
    //gets date and returns it in a readable string!
    return new Date().toISOString();
};

export default {
    info,
    warn,
    error,
    debug,
};
