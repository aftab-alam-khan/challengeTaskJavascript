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
        if (area.toString().length != 3) {
            throw new InvalidAreaPhoneNumberError(`The area length is allowed only 3 and you passed '${area.toString().length}'.`);
        }
        if (/^\d{3}$/.test(area)) {
            throw new InvalidAreaPhoneNumberError(`Only integers are allowed for the area code. You passed '${area}'.`);
        }

        //validation for serviceCode
        if (serviceCode.toString().length != 3) {
            throw new InvalidAreaPhoneNumberError(`The serviceCode length is allowed only 3 and you passed '${area.toString().length}'.`);
        }
        if (/^\d{3}$/.test(serviceCode)) {
            throw new InvalidAreaPhoneNumberError(`Only integers are allowed for the serviceCode code. You passed '${area}'.`);
        }

        //validation for subscriber
        if (subscriber.toString().length != 4) {
            throw new InvalidAreaPhoneNumberError(`The subscriber length is allowed only 4 and you passed '${area.toString().length}'.`);
        }
        if (/^\d{3}$/.test(subscriber)) {
            throw new InvalidAreaPhoneNumberError(`Only integers are allowed for the subscriber code. You passed '${area}'.`);
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
    const phone = new PhoneNumber('231', '456', '78896');
    console.log(phone.area);
    console.log(phone.serviceCode);
    console.log(phone.subscriber);
} catch (error) {
    if (error instanceof InvalidAreaPhoneNumberError) {
        console.debug(`${error.name}: ${error.message}`);
    }
    else if (error instanceof InvalidServiceCodePhoneNumberError) {
        console.debug(`${error.name}: ${error.message}`);
    }
    else if (error instanceof InvalidSubscriberPhoneNumberError) {
        console.debug(`${error.name}: ${error.message}`);
    } else {
        console.debug(error)
    }
}


