package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/main/java/features",glue="stepDefinition",monochrome=true,plugin= {"pretty","html:cucumberReports"})
public class Runner_Create_Delete_Leads {

}
