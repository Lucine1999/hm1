///find///

Array.prototype.arrFind = function (callback, thisArg) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return this[i];
    }
};

///find///

///findIndex///

Array.prototype.arrFindIndex = function (callback, thisArg) {
    const length = this.length;

    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) return i;
    }
    return -1;
};

///findIndex///

///lastIndexOf///

Array.prototype.arrLastIndexOf = function (item, fromIndex) {
    let length = this.length;

    if (fromIndex < 0) {
        length = length + fromIndex;
        if (length < 0) {
            return -1;
        }
    } else {
        if (fromIndex < length) {
            length = fromIndex;
        }
    }

    for (let i = length - 1; i >= 0; i--) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};

///lastIndexOf///

///some///

Array.prototype.arrSome = function (callback, thisArg) {
    const length = this.length;

    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            return true;
        }
    }
    return false;
};

///some///

///every///

Array.prototype.arrEvery = function (callback, thisArg) {
    const length = this.length;

    for (let i = 0; i < length; i++) {
        if (this[i] == null) {
            break;
        }
        if (!callback.call(thisArg, this[i], i, this)) {
            return false;
        }
    }
    return true;
};

///every///

///reduce///

Array.prototype.arrReduce = function (callback, initialValue) {
    const length = this.length;
    let result;

    if (length === 1) {
        if (initialValue == null) {
            return this[0];
        }
    } else if (length === 0) {
        if (initialValue !== undefined) {
            return initialValue;
        } else {
            throw new TypeError("Reduce of empty array with no initial value");
        }
    }
    if (initialValue == null) {
        result = this[0];
    } else {
        result = callback(initialValue, this[0], 0, this);
    }

    for (let i = 1; i < length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

///reduce///

///reduceRight///

Array.prototype.arrReduceRight = function (callback, initialValue) {
    const length = this.length;
    let result;

    if (length === 1) {
        if (initialValue == null) {
            return this[0];
        }
    } else if (length === 0) {
        if (initialValue !== undefined) {
            return initialValue;
        } else {
            throw new TypeError("Reduce of empty array with no initial value");
        }
    }
    if (initialValue == null) {
        result = this[length - 1];
    } else {
        result = callback(initialValue, this[length - 1], length - 1, this);
    }

    for (let i = length - 2; i >= 0; i--) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

///reduceRight///

///join///

Array.prototype.arrJoin = function (symbol = ",") {
    const length = this.length;

    if (length === 0) {
        return "";
    }

    let result = "";
    let separator = "";
    if (length === 1) {
        return this[0];
    }

    for (let i = 0; i < length; i++) {
        if (this[i] == null) {
            this[i] = "";
        }
        result += separator + this[i];
        separator = symbol;
    }

    return result;
};

///join///

///pop///

Array.prototype.arrPop = function () {
    const length = this.length;

    if (length === 0) {
        return undefined;
    }
    const lastElem = this[length - 1];

    if (Array.isArray(this)) {
        this.splice(-1);
    } else {
        delete this[length - 1];
        this.length -= 1;
    }

    return lastElem;
};

///pop///

///unshift///

Array.prototype.arrUnshift = function (...args) {
    const arr = this;
    const length = args.length + this.length;

    if (length === 0) {
        return length;
    }

    let arrLength = this.length;

    for (let i = length - 1; i >= 0; i--) {
        if (arrLength < 0) {
            this[i] = undefined;
        }
        this[i] = arr[arrLength - 1];
        arrLength -= 1;
    }
    for (let i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    return length;
};

///unshift///
