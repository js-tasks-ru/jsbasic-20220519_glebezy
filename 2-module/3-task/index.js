let calculator = {
    read(a, b) {
        this.saved = [a, b]
    },
    sum() {
        return this.saved[0] + this.saved[1]
    },
    mul() {
        return this.saved[0] * this.saved[1]
    }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
