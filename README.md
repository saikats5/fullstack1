# fullstack1
PC->ISP->DNS(to get the IP address) then comeback and send request with IP address and via ISP goes for internet lookup
216.58.210.46(google)

shell->interface
kernal->program that interfaces with the hardware, core of OS

mkdir newfolder //create directory
ls -a //list all files/folders //ls -- list
cd -- change directory  type tab to auto complete
cd ~ //to go to root directory
cd .. //to go 1 level back
clear //clean the screen
ctrl A // to go to start
ctrl E // to go to end
ctrl U // to clear the current command
touch newFileCreate.txt // to create a new file
open newFileCreate.txt // open the file
open -a Atom newFileCreate.txt
rm newFileCreate.txt // to delete the file
rm * // remove everything
rm -r folderName/ // -r allows to remove directory
pwd //print working directory

REPL // Read Evaluation Print Loop // Node REPL comes with node installation
node enter to go to REPL, it's similiar to chrome console // use tab to get possible commands
//to exit // .exit // ctrl + c // clear 

npm init

nodemon is for automatic reload on changes so instead of node index.js, nodemon index.js

npm install body-parser // allow us to pass data from post

bodyparser has few modes i.e., .text, .json, .urlencoded(data from html form)(extended: true // post nested objects)

//ls
//touch abc.txt
//open abc.txt
//vim // open the file in terminal
//git init // to initialize git
//ls -a // will show the hidden files as well // .git - is a hidden file // working directory
// git status // staging area is intermediate place to check what needs to be committed // untracked files in red
//git add abc.txt // to move the file to staging area // in green
//git commit -m "message" // commit
//git log // to check commits // commit hash
//git add . // to stage all files

//working directory -> staging area -> local repository

//git diff abc.txt
//git checkout abc.txt // to rollback

//git remote add origin https://github.com/project.git // origin is the name given by us it can be anything
//git push -u origin master

//.git // local repository
//github // remote repository

//touch .gitignore
//git rm --cached -r . // to remove everything from staging area

//in .gitignore file // specify each file on each line and # to comment // *.txt to ignore all files with txt extension

//git clone https://github.com/project.git // to clone the project