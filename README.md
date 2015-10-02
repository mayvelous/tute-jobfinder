
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Hi there! Welcome to Cloud9 IDE!

To get you started, create some files, play with the terminal,
or visit http://docs.c9.io for our documentation.
If you want, you can also go watch some training videos at
http://www.youtube.com/user/c9ide.

Happy coding!
The Cloud9 IDE team

==================
Heroku Deployment 
==================
1. git init
2. create .gitignore file and show hidden files from the project node settings
3. Add the following to the .gitignore file.
.c9
data
node_modules
4. then commit: git add -A 
5. git commit -m "init commit root"
6. heroku login 
7. heroku create
8. git push heroku master
9. heroku ps:scale web=1
10. Can browse the deployed url: https://pure-ridge-2005.herokuapp.com/ 

==============================
MongoDB Deployment - Step 1: Setup
==============================
1. create a 'data' folder
2. create a new file 'mongod'
3. type the following in the file
mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"
4. need to change the permission on the file by typing the following in the terminal.
chmod a+x mongod
NOTE: The reason having this file is so that it's faster to run the script by typing ./mongod in the terminal

================
Step 2: Mongoose
================
1. npm install mongoose --save
2. add the mongoose require in the server.js and connect to localhost db
3. when the seeding function is done and running, run mongo console by typing: mongo 
4. type: show dbs
5. type: use tute-jobfinder
6. type: show collections
7. type: db.jobs.find()