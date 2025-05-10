//import playwright module
import {test, expect} from '@playwright/test'

//write test 
test('alerts', async({page}) => {
    //open selenium web page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    
    page.once('dialog', dialog =>{
        dialog.accept();
        console.log('Alert msg is : '+ dialog.message());
        console.log('Dailogtype is : '+ dialog.type());
    })

    await page.getByText('See an example alert', { exact: true }).click();
    
})

test('confirm', async({page}) => {
    //open selenium web page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
    
    page.once('dialog', dialog =>{
        //dialog.accept();
        console.log('Alert msg is : '+ dialog.message());
        console.log('Dailogtype is : '+ dialog.type());
        dialog.dismiss();
    })

    await page.getByText('See a sample confirm', { exact: true }).click();
    
})

test('prompt', async({page}) => {
    //open selenium web page
    await page.goto('https://www.selenium.dev/documentation/webdriver/interactions/alerts/');
        
    page.once('dialog', async(dialog) =>{
        console.log('Alert msg is : '+ dialog.message());
        console.log('Dailogtype is : '+ dialog.type());
        await dialog.accept('play');
    })
    await page.getByText('See a sample prompt', {exact: true}).click();
})