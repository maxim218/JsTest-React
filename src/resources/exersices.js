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
    {
        condition: "Функция main получает в качестве параметров два целых числа b и k. Функция должна возвращать сумму всех целых чисел на отрезке от b до k. Числа b и k учитываются.",
        params: [
            "b", "k"
        ],
        tests: [
            {
                type: "int",
                params: [
                    2, 5
                ],
                answer: 14,
            },
            {
                type: "int",
                params: [
                    -25, 17
                ],
                answer: -172,
            },
            {
                type: "int",
                params: [
                    7, 12
                ],
                answer: 57,
            },
            {
                type: "int",
                params: [
                    48, 74
                ],
                answer: 1647,
            },
            {
                type: "int",
                params: [
                    -2, 3
                ],
                answer: 3,
            },
        ]
    },
    {
        condition: "Функция main получает в качестве параметров три целых числа a, b и t. Если переменная t равняется десяти, то функция должна возвращать сумму всех чётных чисел на отрезке от a до b. В противном случае функция должна возвращать сумму всех нечётных чисел на отрезке от a до b. Числа a и b учитываются.",
        params: [
            "a", "b", "t"
        ],
        tests: [
            {
                type: "int",
                params: [
                    20, 25, 10
                ],
                answer: 66,
            },
            {
                type: "int",
                params: [
                    20, 25, 17
                ],
                answer: 69,
            },
            {
                type: "int",
                params: [
                    125, 138, 10
                ],
                answer: 924,
            },
            {
                type: "int",
                params: [
                    125, 138, 45
                ],
                answer: 917,
            },
            {
                type: "int",
                params: [
                    -54, 40, 10
                ],
                answer: -336,
            },
            {
                type: "int",
                params: [
                    -54, 40, -7
                ],
                answer: -329,
            },
        ]
    },
    {
        condition: "Функция main получает в качестве параметра массив m. Функция должна возвращать длину полученного массива.",
        params: [
            "m",
        ],
        tests: [
            {
                type: "int",
                params: [
                    "[10, 20, 30, 40]"
                ],
                answer: 4,
            },
            {
                type: "int",
                params: [
                    "[500, 400, 300, 200, 100, 50]"
                ],
                answer: 6,
            },
            {
                type: "int",
                params: [
                    "[]"
                ],
                answer: 0,
            },
            {
                type: "int",
                params: [
                    "[12, -63, 25]"
                ],
                answer: 3,
            },
        ]
    },
    {
        condition: "Функция main получает в качестве параметра массив целых чисел q. Функция должна возвращать массив, в котором все элементы увеличены в два раза.",
        params: [
            "q",
        ],
        tests: [
            {
                type: "intarr",
                params: [
                    "[15, 25, 35]"
                ],
                answer: [30, 50, 70],
            },

        ]
    },
];

export default function exersices() {
    return EXERSICES_ARRAY;
}
