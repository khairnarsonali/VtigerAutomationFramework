import {Page} from "@playwright/test";
import { commonmethods } from "../Utilities/commonmethods";


export class LoginPage extends commonmethods{
    page:Page;
  
    constructor(page:Page)
    {
        super(page);
        this.page=page;
    }
    
    loc_userNm="input[name='user_name']";
    loc_password="input[name='user_password']";
    loc_Login_Btn="input[title='Login [Alt+L]']";
    loc_Verify_Logout='a[href="index.php?module=Users&action=Logout"]';


async setUsername(username:string)
{
await this.setInput(this.loc_userNm,username);
}

async setPassword(password:string)
{
await this.setInput(this.loc_password,password);
}

async clickLoginButton()
{
await this.clickElement(this.loc_Login_Btn);
}

}