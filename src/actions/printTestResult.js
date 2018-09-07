const YES = "зачет".toUpperCase();
const NO = "незачет".toUpperCase();

export default function printTestResult(resultObj) {
    const all = parseInt(resultObj.all, 10);
    const yes = parseInt(resultObj.yes, 10);
    const no = parseInt(resultObj.no, 10);

    const buffer = [
        "",
       "Всего тестов: " + all,
       "Пройдено верно: " + yes,
       "Ошибок: " + no,
        "",
        "Результат: " + ((yes === all) ? YES : NO),
        ""
    ];

    const message = buffer.join("\n");
    alert(message.toString());
}