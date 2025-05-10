import { test, expect } from '@playwright/test';
import { getPostbody } from '../../src/utilities/FormatAPI';
import { faker } from '@faker-js/faker';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Typesafe, Faker, dynamic - GET API ', async ({ request }) => {
    const fn = faker.person.firstName();
    const ln = faker.person.lastName();
    const totprice = faker.number.int({min:1000, max:10000});

    const postbody = await getPostbody(fn, ln, totprice, true, 'macroni', '2025-01-01', '2025-01-05');

    const res = await request.post('/booking', {data : postbody});
    const jsonres = await res.json();
    console.log ('POST Response is' + JSON.stringify(jsonres,null,2));

    //Validating response
    expect(res.status()).toBe(200);
    expect(res.statusText()).toBe('OK');
    expect(res.headers()['content-type']).toContain('application/json');

    //Validating property key names
    expect(jsonres.booking).toHaveProperty('firstname');
    expect(jsonres.booking).toHaveProperty('lastname');

    expect(jsonres.booking.bookingdates).toHaveProperty('checkin');
    expect(jsonres.booking.bookingdates).toHaveProperty('checkout');

    //Validating response body
    expect(jsonres.bookingid).toBeGreaterThan(0);
    expect(jsonres.booking.firstname).toBe(fn);
    expect(jsonres.booking.lastname).toBe(ln);

    expect(jsonres.booking.bookingdates.checkin).toBe('2025-01-01');
    expect(jsonres.booking.bookingdates.checkout).toBe('2025-01-05');

    const bid = jsonres.bookingid;
    console.log('Booking id is: '+bid);

    const getres = await request.get('/booking/'+bid);
    const jgetres = await getres.json();
    console.log ('GET Response is' + JSON.stringify(jgetres,null,2));
    expect(getres.status()).toBe(200);
    expect(getres.statusText()).toBe('OK');
});