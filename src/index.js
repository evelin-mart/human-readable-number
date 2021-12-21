module.exports = function toReadable(number) {
    let str = '';

    const numb = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    const dec = [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    function decimal(number) {
        if (number < 20) {
            return numb[number];
        }
        if (number < 100) {
            let part2 = (number % 10 ? ` ${numb[number % 10]}` : '');
            return `${dec[Math.trunc(number / 10)]}${part2}`;
        }
    }

    if (number < 100) {
        str = decimal(number);
    } else if (number < 1000) {
        let part3 = (number % 100 ? ` ${decimal(number % 100)}` : '');
        str = `${numb[Math.trunc(number / 100)]} hundred${part3}`;
    };

    return str;
}
