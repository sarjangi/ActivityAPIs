Dear Reviewer,
To test the app, please follow the instructions 
-create a db named workingdb in pgAdmin and restore the dbBackup.sql file in the folowing path \glia\dbBackup.sql
-change the db user/pwd in the folowing path glia\app\getPostapi\database\connection.js.
-run npm install
-run npm start
-follow the https://www.boredapi.com/ for the requirements.
-use postman to create a user. 
	http://localhost:8001/api/user
	here is the sample body
 	{
  	"name":"test",
   	"price":"High",
   	"accessibility":"Low"
  	}
here is the get sample
-http://localhost:8001/api/activity
-http://localhost:8001/api/activity?type=X
-http://localhost:8001/api/activity?key=X
-http://localhost:8001/api/activity?price=X
-http://localhost:8001/api/activity?accessibility=X
-http://localhost:8001/api/activity?minaccessibility=X&maxaccessibility=Y
-http://localhost:8001/api/activity?minprice=X&maxprice=Y

It could be possible to have a proper 
error handling module
user authenticatio
tables defenition and etc
which required more time.

Hopefully to talk more about it in our next meeting.
Regards
Sara
