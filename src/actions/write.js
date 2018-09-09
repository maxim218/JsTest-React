const ALLOW_WRITE = true;

/**
 * функция для вывода сообщения в консоль
 * @param message
 */
export default function write(message) {
    if(ALLOW_WRITE === true) {
        console.log(message);
    }
}
