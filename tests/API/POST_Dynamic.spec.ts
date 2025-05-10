import { test, expect } from '@playwright/test';
import { formatAPIbody } from '../../src/utilities/FormatAPI';
import path from 'path';
import fs from 'fs';

test.use({
    baseURL: process.env.BASE_API_URL,
})

test('POST API using dynamic file', async ({ request }) => {
    const dirpath = path.join(__dirname,'../../test-data/API_REQ_Body/POST_API_Dynamic.json');
    const jtemp = fs.readFileSync(dirpath, 'utf-8');

    //array values ot pass to generate api method in api helper
    const val = ['test', 'api', 1000];
    //passing json file jtemp and the array values val to generateapibode method
    const apibody = await formatAPIbody(jtemp, val);

    const res = await request.post('/booking', {data : JSON.parse(apibody)});
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