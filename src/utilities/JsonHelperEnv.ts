import fs from 'fs';
import path from 'path';
import { hrmlogin } from '../Interface/hrmlogin.interface';

export async function readenv() {
    const envdet = process.env.TEST_EXECUTION_ENV || 'qa';
    const dirpath = path.join(__dirname, '../../test-data/', envdet);

    const envdata: hrmlogin = {};
    fs.readdirSync(dirpath).forEach(file => {
        if (path.extname(file) === '.json'){
            const filepath = path.join(dirpath, file);
            const filedata: hrmlogin = JSON.parse(fs.readFileSync(filepath, 'utf-8'));
            Object.assign(envdata, filedata); // Merge the content into a single object
        }
    });
    return envdata;
}