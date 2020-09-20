function getLookupValue_arr (originalValue) {
    let originalString = originalValue + "";
    let lookupValue_arr = [];
    let firstLetter_arr = pinyinUtil.getFirstLetter(originalString, true);
    let pinyin_arr = pinyinUtil.getPinyin(originalString, "", false, true);
    for (let i = 0; i < firstLetter_arr.length; ++i) {
        lookupValue_arr.push(firstLetter_arr[i]);
    }
    for (let i = 0; i < pinyin_arr.length; ++i) {
        let lookupValue = pinyin_arr[i];
        if (lookupValue_arr.indexOf(lookupValue) === -1) {
            lookupValue_arr.push(lookupValue);
        }
    }
    if (lookupValue_arr.indexOf(originalString) === -1) {
        lookupValue_arr.push(originalString);
    }
    return lookupValue_arr;
}

function isMatch (matchValue, lookupValue_arr) {
    let matchValue_reg = new RegExp(matchValue + "", "i");
    let match_flag = false;
    for (let i = 0; i < lookupValue_arr.length; ++i) {
        if (lookupValue_arr[i].match(matchValue_reg) !== null) {
            match_flag = true;
            break;
        }
    }
    return match_flag;
}
