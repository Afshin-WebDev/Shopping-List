export const convertNumbers = (number, isEn) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return String(number)
        .replace(/٫/g, '.')
        .split('')
        .map(char => {
            if (!isEn) {
                return englishDigits.includes(char) ? persianDigits[char] : char;
            } else {
                return persianDigits.includes(char)
                    ? englishDigits[persianDigits.indexOf(char)]
                    : char;
            }
        })
        .join('')
        .replace(/\./g, '٫');
};