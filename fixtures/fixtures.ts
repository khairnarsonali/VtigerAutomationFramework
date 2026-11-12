import {test as base, Page, expect}from "@playwright/test";
import config from "../testdata/config.json";

type Myfixtures=
{
    mypage:Page;
}

export const test=base.extend <Myfixtures>({
mypage: async({page},use)=>{
await page.goto(config.AppURL1);
await use (page);
}
});
export {expect};