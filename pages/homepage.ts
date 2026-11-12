import {Page} from "@playwright/test";
import { commonmethods } from "../Utilities/commonmethods";


export class HomePage extends commonmethods{
    page:Page;
  
    constructor(page:Page)
    {
        super(page);
        this.page=page;
    }

    verify_Loc_LogoutLink="//a[@href='index.php?module=Users&action=Logout']";

async clickLogOutLink()
{
    await this.clickElement(this.verify_Loc_LogoutLink);

}

}