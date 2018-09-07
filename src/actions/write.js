const ALLOW_WRITE = true;

export default function write(message) {
    if(ALLOW_WRITE === true) {
        console.log(message);
    }
}
