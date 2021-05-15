
function getOrDefault(thiz, index, defV) {
    if (thiz instanceof Array) {
        if (index >= 0 && index < thiz.length) {
            return thiz[index]
        }
        return defV()
    }
    if (index in thiz) {
        return thiz[index]
    }
    return defV()
}

function Optional(params) {
    this.value = params;
}

Optional.of = function (params) {
    return new Optional(params)
};
Optional.prototype.orElse = function (v) {
    const thisv = this.value;
    if (thisv !== undefined) return thisv;
    return v
};
Optional.prototype.or = function (v) {
    const thisv = this.value;
    if (thisv !== undefined) return this;
    return new Optional(v)
};

module.exports = {
    getOrDefault: getOrDefault,
    Optional: Optional,
    orElse: function (v, ols) {
        if (v === undefined) return ols();
        return v;
    },
};
