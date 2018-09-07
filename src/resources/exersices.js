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
    {
        condition: "Функция main получает в качестве параметров три целых числа x, y и z. Функция должна возвращать наибольшее из полученных чисел.",
        params: [
            "x", "y", "z"
        ],
        tests: [
            {
                type: "int",
                params: [
                    10, 20, 30
                ],
                answer: 30,
            },
            {
                type: "int",
                params: [
                    57, 84, 12
                ],
                answer: 84,
            },
            {
                type: "int",
                params: [
                    99, 15, 25
                ],
                answer: 99,
            },
            {
                type: "int",
                params: [
                    57, 125, 64
                ],
                answer: 125,
            },
            {
                type: "int",
                params: [
                    -45, -3, -12
                ],
                answer: -3,
            },
            {
                type: "int",
                params: [
                    62, 62, 31
                ],
                answer: 62,
            },
        ]
    },
];

export default function exersices() {
    return EXERSICES_ARRAY;
}
