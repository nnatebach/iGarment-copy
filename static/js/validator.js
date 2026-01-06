const strategies = {
        isNonEmpty(value, errorMsg) {
            return value === '' ?
                errorMsg : void 0
        },
        minLength(value, length, errorMsg) {
            return value.length < length ?
                errorMsg : void 0
        },
        isEmail(value, errorMsg) {
            return !/^\w+([+-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value) ?
                errorMsg : void 0
        },
        isNumber(value, errorMsg){
             return !/^[0-9\+]*$/.test(value) ?
                errorMsg : void 0
        }
    }

class Validator {
    constructor() {
        this.cache = []
    }
    add(dom, rules) {
        for (let rule of rules) {
            let strategyAry = rule.strategy.split(':')
            let errorMsg = rule.errorMsg
            this.cache.push(() => {
                let strategy = strategyAry.shift()
                strategyAry.unshift(dom.value)
                strategyAry.push(errorMsg)
                return strategies[strategy].apply(dom, strategyAry)
            })
        }
    }
    start() {
        for (let validatorFunc of this.cache) {
            let errorMsg = validatorFunc()
            if (errorMsg) {
                return errorMsg
            }
        }
    }
}

