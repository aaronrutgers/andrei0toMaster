const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, array) => {
        debugger
        return [].concat(array)
    },
    []
)

// 用debugger修复这段代码