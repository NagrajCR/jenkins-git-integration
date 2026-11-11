import {test,expect} from '@playwright/test'
test('Practice Test1',async({page}) => {
    await console.log('Starting Practice Test1');
    await page.goto('https://www.google.com');
    console.log(await page.title());   
   
})
test('Practice Test2',async({page}) => {
    await console.log('Starting Practice Test2');
    await page.goto('https://www.google.com');
    console.log(await page.title());
    console.log('Nagraj');
})