package pom.qa.stepDefinition;

import java.util.concurrent.TimeUnit;

//import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Step_Create_Delete_Leads {
	
	public static ChromeDriver driver;
	
	@Given("^The user is on the login page.$")
	public void the_user_is_on_the_login_page() {
		System.setProperty("webdriver.chrome.driver","./driver/chromedriver");
		driver = new ChromeDriver();
		driver.get("http://leaftaps.com/opentaps");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@Then("^The user enters UserID.$")
	public void the_user_enters_UserID() {
	    
		driver.findElementById("username").sendKeys("demosalesmanager");
	}

	@Then("^The user enters password.$")
	public void the_user_enters_password() {
	    driver.findElementById("password").sendKeys("crmsfa");
	}

	@Then("^The user clicks the login button.$")
	public void the_user_clicks_the_login_button() {
	    driver.findElementByClassName("decorativeSubmit").click();
	}

	@Given("^The user is on the Home page.$")
	public void the_user_is_on_the_Home_page() {
		//System.out.println(driver.findElementByXPath("//div[@id=\"form\"]/h2").getText());
		Assert.assertEquals(driver.findElementByXPath("//div[@id=\"form\"]/h2").getText(), "Welcome\n" + 
	  		"Demo Sales Manager");
	}

	@Then("^The user clicks on the CRMSFA button.$")
	public void the_user_clicks_on_the_CRMSFA_button() {
	   driver.findElementByLinkText("CRM/SFA").click();
	}

	@Then("^The user clicks on the Leads link.$")
	public void the_user_clicks_on_the_Leads_link() {
	    driver.findElementByLinkText("Leads").click();
	}

	@Then("^The user clciks on the Create lead.$")
	public void the_user_clciks_on_the_Create_lead() {
	    driver.findElementByLinkText("Create Lead").click();
	}

	@Then("^The user enters company name.$")
	public void the_user_enters_company_name() {
	    driver.findElementById("createLeadForm_companyName").sendKeys("Shooter");
	}

	@Then("^The user enters first name.$")
	public void the_user_enters_first_name() {
		driver.findElementById("createLeadForm_firstName").sendKeys("Bob");
	}

	@Then("^The user enters last name.$")
	public void the_user_enters_last_name() {
		driver.findElementById("createLeadForm_lastName").sendKeys("Weeger");
	}

	@Then("^The user clicks create lead button.$")
	public void the_user_clicks_create_lead_button() {
	    driver.findElementByClassName("smallSubmit").click();
	}
}
