const xor = (a, b) => {
    return (a || b) && !(a && b)
}

exports.xor = xor