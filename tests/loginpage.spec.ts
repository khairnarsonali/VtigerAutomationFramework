import{test, expect}from '../fixtures/fixtures';
import { HomePage } from '../pages/homepage';
import { LoginPage} from '../pages/loginpage';
import logindata from '../testdata/logindata.json';

test('TC_001_Verify login with valid data', async ({mypage})=>
{
const loginPageObj=new LoginPage(mypage);
await loginPageObj.setUsername(logindata['TC_001_Login with valid data'].UserName1);
await loginPageObj.setPassword(logindata['TC_001_Login with valid data'].Password1);
await loginPageObj.clickLoginButton();
const homePageObj=new HomePage(mypage);
await expect(mypage.locator(homePageObj.verify_Loc_LogoutLink)).toBeVisible();
});