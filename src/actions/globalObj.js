// глобальный объект (доступен в любом месте программы)
// через него классы могут общаться друг с другом
const GLOBAL_OBJ = {};

/**
 * функция возвращает глобальный объект
 */
export default function globalObj() {
    return GLOBAL_OBJ;
}
