const YES = "зачет".toUpperCase();
const NO = "незачет".toUpperCase();

/**
 * функция для вывода результатов тестирования
 * @param resultObj
 */
export default function printTestResult(resultObj) {
    // получаем параметры
    const all = parseInt(resultObj.all, 10);
    const yes = parseInt(resultObj.yes, 10);
    const no = parseInt(resultObj.no, 10);

    // массив с сообщениями для вывода
    const buffer = [
        "",
       "Всего тестов: " + all,
       "Пройдено верно: " + yes,
       "Ошибок: " + no,
        "",
        "Результат: " + ((yes === all) ? YES : NO),
        ""
    ];

    // формируем единую строку с сообщениями
    const message = buffer.join("\n");
    // выводим сообщения на экран
    alert(message.toString());
}