const payload = {
    "user": {
        "username": "teste",
        "cpf": "12345678912",
        "password": "123"
    },
    "lat": -23.000,
    "long": -46.000,
    "ip": '123.123.123.123'
};

interface IPayload {
    user: IUser,
    lat: number | string,
    long: number | string,
    ip: string
};

interface IUser {
    username: string,
    cpf: string,
    password: string
};

const sensitiveAttributes = ["user.password", "user.cpf", "lat", "long"]

const redacted = redactedPayload(payload, sensitiveAttributes, '😎')

console.log(redacted)

function redactedPayload(payload: IPayload, sensitiveAttributes: string[], replacementString: string): IPayload | void {
    const redactedPayload = payload;

    const fieldsToBeRedacted = ["user.password", "user.cpf", "lat", "long"];

    const containsSensitiveAttributes = sensitiveAttributes.every((el: string) => fieldsToBeRedacted.includes(el));

    if (containsSensitiveAttributes) {
        redactedPayload["user"]["password"] = replacementString;
        redactedPayload["user"]["cpf"] = replacementString;
        redactedPayload["lat"] = replacementString;
        redactedPayload["long"] = replacementString;
        return redactedPayload;
    }

    return;
}