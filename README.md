# UserInfoManagement
Enhancement of Vue3, User Information Management System
The ui framework utilised bootstrap 4 and
the imported methods adopted CDN methods
therefore no need to use css and js files
for the bootstrap excepted the self defiled js and 
css files.
<br>
# Record an issue
All elements must be in the instance of Vue otherwise there will exist
some unknown exception. In the case, I faced a problem of data echo, which means
that data cannot show back correctly, according to the inspection, The modal I did not
put in the instance of Vue, which posed the problem, therefore It is necessary 
to put all elements in the instance of Vue.
<br>
Meanwhile, for the issue of double binding in the edition function, we must 
invoke the JSON.stringify function convert the object to be strings, then
invoke JSON.parse function to recombine the string to be a object. Which involves
the shallow and deep copy problem.