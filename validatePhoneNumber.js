
class PhoneNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "PhoneNumberError";
    }
}

class PhoneNumber{
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    #regexFilter () {
        const regex = /\d+/g;
        const regexMatch = this.phoneNumber.toString().match(regex);
        return  regexMatch.join('');
    }

    #filterPhoneNumber() {
        try {
            const finalString = this.#regexFilter();
            if  (finalString.length === 11 && finalString[0] === '1'){
                const a = finalString.slice(1, 4);
                const b = finalString.slice(4, 7);
                const c = finalString.slice(7, );

                return [a, b, c];
            
            } else if (finalString.length === 10) {
                const a = finalString.slice(0, 3);
                const b = finalString.slice(3, 6);
                const c = finalString.slice(6, );

                return [a, b, c];
            } else {
                throw new PhoneNumberError('Please enter valid US phone number');
            }
        } catch (error) {
            console.log(error.message);
            console.log(error.name);
            console.log(error.stack)
        }
        
    }
    get area() {
        if (this.#filterPhoneNumber()) {
            return this.#filterPhoneNumber()[0];
        }
    }

    get prefix() {
        if (this.#filterPhoneNumber()) {
            return this.#filterPhoneNumber()[1];
        }
    }

    get subscribe() {
        if (this.#filterPhoneNumber()) {
            return this.#filterPhoneNumber()[2];
        }
    }

    get fancyString() {
        if (this.#filterPhoneNumber()) {
            return `+1 (${this.#filterPhoneNumber()[0]}) (${this.#filterPhoneNumber()[1]}) (${this.#filterPhoneNumber()[2]})`;
        }
    }
}


// mix string
// console.log('mix string')
// console.log('=================')
// console.log('')
const phone = new PhoneNumber(`17asd897897asfsdf879';*(*)&*&`);
// console.log(p.area);
// console.log(p.prefix);
// console.log(p.subscribe);
// console.log(p.fancyString);

// console.log('')
// console.log('')

// only interger string
// console.log('only interger string')
// console.log('=================')
const phone1 = new PhoneNumber(`7879878239`);
// console.log(p1.area);
// console.log(p1.prefix);
// console.log(p1.subscribe);
// console.log(p1.fancyString);

// console.log('')
// console.log('')

// only interger
// console.log('only interger')
// console.log('=================')
const phone2 = new PhoneNumber(7879878239);
// console.log(p2.area);
// console.log(p2.prefix);
// console.log(p2.subscribe);
// console.log(p2.fancyString);

console.table(
    [
        {
            'mix string': [
                `area: ${phone.area}, prefix: ${phone.prefix}, subscribe: ${phone.subscribe}`
            ],
            'only interger string': [
                `area: ${phone1.area}, prefix: ${phone1.prefix}, subscribe: ${phone1.subscribe}`
            ],
            'only interger': [
                `area: ${phone2.area}, prefix: ${phone2.prefix}, subscribe: ${phone2.subscribe}`
            ]
        },
        {
            'mix string': [
                `fancyString: ${phone.fancyString}`
            ],
            'only interger string': [
                `fancyString: ${phone1.fancyString}`
            ],
            'only interger': [
                `fancyString: ${phone2.fancyString}`
            ]
        }
    ]
)

console.log('\n')
// wrong phone number interger string
//this will show the custom error
console.log(`Show the custom error`)
console.log('=================')
const phone3 = new PhoneNumber(`87879878239`);
console.log(phone3.area);
