import { test, expect } from '@playwright/test';
import { getPostbody } from '../../src/utilities/FormatAPI';
import { faker } from '@faker-js/faker';
import token from '../../test-data/API_REQ_Body/Token_API.json';
import putapi from '../../test-data/API_REQ_Body/PUT_API.json';
import patch from '../../test-data/API_REQ_Body/PATCH_API.json'

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('Typesafe, Faker, dynamic - PATCH API for firstname ', async ({ request }) => {
    const fn = faker.person.firstName();
    const ln = faker.person.lastName();
    const totprice = faker.number.int({ min: 1000, max: 10000 });

    const postbody = await getPostbody(fn, ln, totprice, true, 'macroni', '2025-01-01', '2025-01-05');

    const postres = await request.post('/booking', { data: postbody });
    const jsonres = await postres.json();
    console.log('POST Response is : ' + JSON.stringify(jsonres, null, 2));

    //Validating response
    expect(postres.status()).toBe(200);
    expect(postres.statusText()).toBe('OK');
    expect(postres.headers()['content-type']).toContain('application/json');

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
    console.log('Booking id is: ' + bid);

    const getres = await request.get('/booking/' + bid);
    const jgetres = await getres.json();
    console.log('GET Response is : ' + JSON.stringify(jgetres, null, 2));
    expect(getres.status()).toBe(200);
    expect(getres.statusText()).toBe('OK');

    //get token
    const tokres = await request.post('/auth', { data: token });
    expect(tokres.status()).toBe(200);
    expect(tokres.statusText()).toBe('OK');
    const jtokres = await tokres.json();
    const tok = jtokres.token;
    console.log('Token is : ' + tok);

    //patch api
    const patchres = await request.patch('/booking/' + bid, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": "token=" + tok,
        },
        data: patch,
    });

    expect(patchres.status()).toBe(200);
    expect(patchres.statusText()).toBe('OK');
    const jpatchres = await patchres.json();
    console.log('Patch Response is : ' + JSON.stringify(jpatchres, null, 2));
    
    //Delete api
    const delres = await request.delete('/booking/' + bid, {
        headers: {
            "Content-Type": "application/json",
            "Cookie": "token=" + tok,
        },
    });

    expect(delres.status()).toBe(201);
    expect(delres.statusText()).toBe('Created');
    console.log('Delete Response is : ' + await delres.body());

});