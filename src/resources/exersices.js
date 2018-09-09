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
            {
                type: "intarr",
                params: [
                    "[-7, -2, -5, 50, 40]"
                ],
                answer: [-14, -4, -10, 100, 80],
            },
            {
                type: "intarr",
                params: [
                    "[]"
                ],
                answer: [],
            },
            {
                type: "intarr",
                params: [
                    "[2, 0, 3, 0, 4, 0, 15, 0, 17]"
                ],
                answer: [4, 0, 6, 0, 8, 0, 30, 0, 34],
            },
            {
                type: "intarr",
                params: [
                    "[25, 75]"
                ],
                answer: [50, 150],
            },
        ]
    },
    {
        condition: "Функция main получает в качестве параметра массив целых чисел k. Функция должна возвращать массив, в котором все элементы упорядочены по возрастанию.",
        params: [
            "k",
        ],
        tests: [
            {
                type: "intarr",
                params: [
                    "[40, 30, 20, 10]"
                ],
                answer: [10, 20, 30, 40],
            },
            {
                type: "intarr",
                params: [
                    "[4000, 2000, 5000, 1000, 7000, 3000]"
                ],
                answer: [1000, 2000, 3000, 4000, 5000, 7000],
            },
            {
                type: "intarr",
                params: [
                    "[]"
                ],
                answer: [],
            },
            {
                type: "intarr",
                params: [
                    "[65, 75, 25, 35]"
                ],
                answer: [25, 35, 65, 75],
            },
            {
                type: "intarr",
                params: [
                    "[12, 12, 17, 114, 17, 9, 9, 3, 4, 5, 1]"
                ],
                answer: [1, 3, 4, 5, 9, 9, 12, 12, 17, 17, 114],
            },
            {
                type: "intarr",
                params: [
                    "[100, 200, 300, 50, 70, 80]"
                ],
                answer: [50, 70, 80, 100, 200, 300],
            },
        ]
    },
    {
        condition: "Функция main получает в качестве параметра объект w. Функция должна вернуть объект, у которого все поля увеличены в пять раз.",
        params: [
            "w",
        ],
        tests: [
            {
                type: "obj",
                params: [
                    "{x: 2, y: 3, z: 4}"
                ],
                answer: {x: 10, y: 15, z: 20},
            },
            {
                type: "obj",
                params: [
                    "{}"
                ],
                answer: {},
            },
            {
                type: "obj",
                params: [
                    "{a: 300, b: 100}"
                ],
                answer: {a: 1500, b: 500},
            },
            {
                type: "obj",
                params: [
                    "{w: 50, e: 70}"
                ],
                answer: {e: 350, w: 250},
            },
            {
                type: "obj",
                params: [
                    "{p: 20}"
                ],
                answer: {p: 100},
            },
        ]
    },
    {
        condition: "Функция main получает в качестве параметра массив объектов m. Функция должна вернуть массив, в котором сортировка идёт в начале по полю x, после чего по полю y.",
        params: [
            "m",
        ],
        tests: [
            {
                type: "objarr",
                params: [
                    "[{x: 7, y: 20}, {x: 2, y: 80}, {x: 5, y: 30}]"
                ],
                answer: [{x: 2, y: 80}, {x: 5, y: 30}, {x: 7, y: 20}],
            },
            {
                type: "objarr",
                params: [
                    "[]"
                ],
                answer: [],
            },
            {
                type: "objarr",
                params: [
                    "[{x: 5, y: 14}, {x: 5, y: 12}, {x: 7, y: 18}, {x: 7, y: 16}]"
                ],
                answer: [{x: 5, y: 12}, {x: 5, y: 14}, {x: 7, y: 16}, {x: 7, y: 18}],
            },
            {
                type: "objarr",
                params: [
                    "[{x: 2, y: 4}, {x: 2, y: 4}, {x: 2, y: 3}, {x: 2, y: 4}]"
                ],
                answer: [{x: 2, y: 3}, {x: 2, y: 4}, {x: 2, y: 4}, {x: 2, y: 4}],
            },
            {
                type: "objarr",
                params: [
                    "[{x: 5, y: 6}, {x: 3, y: 4}, {x: 1, y: 2}]"
                ],
                answer: [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}],
            },
            {
                type: "objarr",
                params: [
                    "[{x: 18, y: 2}, {x: 15, y: 3}, {x: 15, y: 2}, {x: 15, y: 4}, {x: 17, y: 2}, {x: 15, y: 1}]"
                ],
                answer: [{x: 15, y: 1}, {x: 15, y: 2}, {x: 15, y: 3}, {x: 15, y: 4}, {x: 17, y: 2}, {x: 18, y: 2}],
            },
            {
                type: "objarr",
                params: [
                    "[{x: 8, y: 4}]"
                ],
                answer: [{x: 8, y: 4}],
            },
        ]
    },
];

export default function exersices() {
    return EXERSICES_ARRAY;
}
