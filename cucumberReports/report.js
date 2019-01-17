$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/Create_Delete_Leads.feature");
formatter.feature({
  "name": "Creation, Deletion of leads.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the login functionality.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user is on the login page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters UserID.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_enters_UserID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user enters password.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_enters_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user clicks the login button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate create Lead",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user is on the Home page.",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_is_on_the_Home_page()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat stepDefinition.Step_Create_Delete_Leads.the_user_is_on_the_Home_page(Step_Create_Delete_Leads.java:43)\n\tat ✽.The user is on the Home page.(src/main/java/features/Create_Delete_Leads.feature:10)\n",
  "status": "failed"
});
formatter.step({
  "name": "The user clicks on the CRMSFA button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_clicks_on_the_CRMSFA_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks on the Leads link.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_clicks_on_the_Leads_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clciks on the Create lead.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_clciks_on_the_Create_lead()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user enters company name.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_enters_company_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user enters first name.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_enters_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user enters last name.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_enters_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user clicks create lead button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Create_Delete_Leads.the_user_clicks_create_lead_button()"
});
formatter.result({
  "status": "skipped"
});
});