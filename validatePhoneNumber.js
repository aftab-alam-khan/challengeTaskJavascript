
class PhoneNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "PhoneNumberError";
    }
}

class InvalidAreaPhoneNumberError extends Error{
    constructor(message) {
        super(message);
        this.name = "InvalidAreaPhoneNumberError";
    }
}

class InvalidServiceCodePhoneNumberError extends Error{
    constructor(message) {
        super(message);
        this.name = "InvalidServiceCodePhoneNumberError";
    }
}

class InvalidSubscriberPhoneNumberError extends Error{
    constructor(message) {
        super(message);
        this.name = "InvalidSubscriberPhoneNumberError";
    }
}

class PhoneNumber {

    constructor(area, serviceCode, subscriber) {
        
        //validation for Area
        if ( (area.toString().length != 3) || (isNaN(area)) ) {
            throw new InvalidAreaPhoneNumberError(`The area length is allowed only 3 and you passed '${area.toString().length}' and only numeric digit is allowed.`);
        }

        //validation for serviceCode
        if ( (serviceCode.toString().length != 3) || (isNaN(serviceCode)) ) {
            throw new InvalidServiceCodePhoneNumberError(`The serviceCode length is allowed only 3 and you passed ${serviceCode.toString().length} and only numeric digit is allowed.`);
        }

        //validation for subscriber
        if ( (subscriber.toString().length != 3) || (isNaN(subscriber)) ) {
            throw new InvalidSubscriberPhoneNumberError(`The subscriber length is allowed only 4 and you passed ${subscriber.toString().length} and only numeric digit is allowed.`);
        }
        this._area = area;
        this._serviceCode = serviceCode;
        this._subscriber = subscriber;
    }

    get area() {
        return this._area;
    }
    get serviceCode() {
        return this._serviceCode;
    }
    get subscriber() {
        return this._subscriber;
    }
}

try {
    const phone = new PhoneNumber('231', '4567', '78896');
    console.log(phone.area);
    console.log(phone.serviceCode);
    console.log(phone.subscriber);
} catch (error) {
    if (error instanceof InvalidAreaPhoneNumberError) {
        console.debug(error.message);
    }
    else if (error instanceof InvalidServiceCodePhoneNumberError) {
        console.debug(error.message);
    }
    else if (error instanceof InvalidSubscriberPhoneNumberError) {
        console.debug(error.message);
    } else {
        console.debug(error)
    }
}
