const EXERSICES_ARRAY = [
    {
        condition: "Функция main получает в качестве параметров два целых числа a и b. Функция должна возвращать сумму полученных чисел.",
        params: [
            "a", "b"
        ],
        tests: [
            {
                type: "int",
                params: [
                    2, 3
                ],
                answer: 5,
            },
            {
                type: "int",
                params: [
                    12, 14
                ],
                answer: 26,
            },
            {
                type: "int",
                params: [
                    -15, 45
                ],
                answer: 30,
            },
            {
                type: "int",
                params: [
                    7, -12
                ],
                answer: -5,
            },
            {
                type: "int",
                params: [
                    8, 0
                ],
                answer: 8,
            },
        ]
    },
];

export default function exersices() {
    return EXERSICES_ARRAY;
}
