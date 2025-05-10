import { test, expect } from '@playwright/test';
import postreq from '../../test-data/API_REQ_Body/POST_API_Static.json'

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('POST API using static file', async ({ request }) => {

    const res = await request.post('/booking', {data : postreq});
    const jsonres = await res.json();
    console.log ('Response is' + JSON.stringify(jsonres,null,2));

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
    expect(jsonres.booking.firstname).toBe('test');
    expect(jsonres.booking.lastname).toBe('api');

    expect(jsonres.booking.bookingdates.checkin).toBe('2025-01-01');
    expect(jsonres.booking.bookingdates.checkout).toBe('2025-01-05');
});