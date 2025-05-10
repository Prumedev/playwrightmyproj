export async function formatAPIbody(template: string, values: any[]): Promise<string> {
    return template.replace(/{(\d+)}/g, (match, p1) => {
        const index = parseInt(p1, 10);
        return index < values.length ? String(values[index]) : match;
    });
};

export async function getPostbody(
    fname: string,
    lname: string,
    price: number,
    paid: boolean,
    addneeds: string,
    chin: string,
    chout: string) {

    const bpost: BookingPOST = {
        firstname: fname,
        lastname: lname,
        totalprice: price,
        depositpaid: paid,
        additionalneeds: addneeds,
        bookingdates: {
            checkin: chin,
            checkout: chout
        }
    }

    return bpost;

}

