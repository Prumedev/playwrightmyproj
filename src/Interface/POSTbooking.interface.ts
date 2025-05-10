interface BookingPOST {
    "firstname": string,
    "lastname": string,
    "totalprice": number,
    "depositpaid": boolean,
    "additionalneeds": string,
    "bookingdates": Bdates
}

interface Bdates {
    "checkin": string,
    "checkout": string
}