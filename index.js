import chalk from "chalk"

export const LOG_INFO = 'info';
export const LOG_SUCCESS = 'success';
export const LOG_ERROR = 'error';

const log = console.log

export const logError = (message, title = 'Erreur') => {
    colorLog({message, title, mode: LOG_ERROR});
}

export const logInfo = (message, title = '') => {
    colorLog({message, title, mode: LOG_INFO});
}

export const logSuccess = (message, title = '') => {
    colorLog({message, title, mode: LOG_SUCCESS});
}

export const colorLog = ({message, title = '', mode = ''}) => {
    let base;
    switch (mode) {
        case LOG_ERROR:
            base = chalk.red;
            break;
        case LOG_INFO:
            base = chalk.green;
            break;
        case LOG_SUCCESS:
            base = chalk.blue;
            break;
        default:
            base = chalk.reset;
            break;
    }
    const suf = title !== '' ?  (chalk.inverse.bold.underline(`${title} : `) + '\n') : '';
    log(base(`${suf}${message}`))
}

export const logc = console.log
