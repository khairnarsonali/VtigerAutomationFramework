import {Page} from "@playwright/test";
export class commonmethods{

    page:Page;
    constructor(page:Page)
    {
        this.page=page;
    }
    async setInput(locator:string, value:string)
    {
        try{
            await this.page.fill(locator, value);
        }
       catch(error)
       {
        console.error("Error while adding an input",error);
        throw error;
       }
    }
    
    async clickElement(locator: string)
    {
        try{
            await this.page.click(locator);
        }
        catch (error)
        {
            console.error("error while clicking an element", error);
            throw error;
        }

    }
}