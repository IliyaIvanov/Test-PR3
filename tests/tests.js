const chai = window.chai
const expect = chai.expect

//___WordCheck___//
describe('WordCheck_1', () => {
    it('OK (проверка на правильность написаняи слов)', () => {
        expect(WordCheck_1()).to.deep.equal('кошка')
    })
})
describe('WordCheck_2', () => {
    it('OK (проверка на правильность написаняи слов)' , () => {
        expect(WordCheck_2()).to.deep.equal('собака')
    })
})
describe('WordCheck_3', () => {
    it('OK (проверка на правильность написаняи слов)', () => {
        expect(WordCheck_3()).to.deep.equal('колибри')
    })
})
describe('WordCheck_4', () => {
    it('OK (проверка на правильность написаняи слов)', () => {
        expect(WordCheck_4()).to.deep.equal('бергамот')
    })
})
describe('WordCheck_5', () => {
    it('OK (проверка на правильность написаняи слов)', () => {
        expect(WordCheck_5()).to.deep.equal('вратарь')
    })
})

//___ButtonCheck___//
describe('ButtonCheck_1', () => {
    it('OK (проверка на правильность нажатия кнопки ввода числа)', () => {
        expect(ButtonCheck_1(1)).to.deep.equal('1')
    })
})
describe('ButtonCheck_2', () => {
    it('OK (Проверка на нажатие кнопки повторения попытки)', () => {
        expect(ButtonCheck_2(0)).to.deep.equal('0')
    })
})