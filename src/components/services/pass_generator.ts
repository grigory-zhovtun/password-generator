interface SymbolMap {
    [key: number]: string
}

const symbols: SymbolMap = {
    "31": "", "32": " ", "33": "!", "34": "\"", "35": "#",
    "36": "$", "37": "%", "38": "&", "39": "'", "40": "(",
    "41": ")", "42": "*", "43": "+", "44": ",", "45": "-",
    "46": ".", "47": "/", "48": "0", "49": "1", "50": "2",
    "51": "3", "52": "4", "53": "5", "54": "6", "55": "7",
    "56": "8", "57": "9", "58": ":", "59": ";", "60": "<",
    "61": "=", "62": ">", "63": "?", "64": "@", "65": "A",
    "66": "B", "67": "C", "68": "D", "69": "E", "70": "F",
    "71": "G", "72": "H", "73": "I", "74": "J", "75": "K",
    "76": "L", "77": "M", "78": "N", "79": "O", "80": "P",
    "81": "Q", "82": "R", "83": "S", "84": "T", "85": "U",
    "86": "V", "87": "W", "88": "X", "89": "Y", "90": "Z",
    "91": "[", "92": "\\", "93": "]", "94": "^", "95": "_",
    "96": "`", "97": "a", "98": "b", "99": "c", "100": "d",
    "101": "e", "102": "f", "103": "g", "104": "h", "105": "i",
    "106": "j", "107": "k", "108": "l", "109": "m", "110": "n",
    "111": "o", "112": "p", "113": "q", "114": "r", "115": "s",
    "116": "t", "117": "u", "118": "v", "119": "w", "120": "x",
    "121": "y", "122": "z", "123": "{", "124": "|", "125": "}",
    "126": "~", "127": ""
}

export type Complexity = "ABC" | "NUMBERS" | "SYMBOLS"

export const passwordGenerator = (len: number, c:Complexity) => {
    let result = ''

    switch (c) {
        case "ABC": 
            for (let i = 0; i < len; i++) {
                const newCodeSymbolUpper = Math.floor((Math.random() * (90-65)) + 65)
                const newCodeSymbolLower = Math.floor((Math.random() * (122-96)) + 97)
                const caseCode = Math.floor((Math.random() * 2))
                if (caseCode === 0) {
                    result += symbols[newCodeSymbolUpper]
                } else {
                    result += symbols[newCodeSymbolLower]
                }
                
            }
            break;
        case "NUMBERS":
            for (let i = 0; i < len; i++) {
                const newCodeSymbolUpper = Math.floor((Math.random() * (90-65)) + 65)
                const newCodeSymbolLower = Math.floor((Math.random() * (122-96)) + 97)
                const newCodeSymbolNumber = Math.floor((Math.random() * (57-47)) + 48)
                const caseCode = Math.floor((Math.random() * 3))
                if (caseCode === 0) {
                    result += symbols[newCodeSymbolUpper]
                } else if (caseCode === 1) {
                    result += symbols[newCodeSymbolLower]
                } else {
                    result += symbols[newCodeSymbolNumber]
                }
                
            }
            break;
        case "SYMBOLS":
            for (let i = 0; i < len; i++) {
                const newCodeSymbol = Math.floor((Math.random() * (126-31)) + 32)
                result += symbols[newCodeSymbol]
            }
            break;
        default:
            console.log("Error: Unknown")
            break;
    }

    return result
}
