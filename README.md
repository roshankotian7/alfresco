# alfresco

In the README file of the repository we want to see also the following sections:
1. ***Prerequisites*** List here what/if anything needs to be installed

Cypress Installation  and Project setup 

1>Download Node js
Steps:   go to https://nodejs.org/en/download/
Note : for 'Windows Installer ' click on '64 bit' to download 

2>  Set home node in Environment variables 
 Steps:  Set the name and the path -> eg  NODE_home = C:\Program Files\nodejs

3> Download Visual Studio code editor for Windows and install 

4> Clone/Download  https://github.com/roshankotian7/alfresco.git

5>Click File--> Open Folder in VS editor and open alfresco folder downloaded from git repo mentioned in step 4

6> Open Visual Studio terminal


2. ***Description*** Describes of how to run the automation test

1> Open Visual Studio terminal run below command to run automation test
 a> npm run headTest   --> This will run all test suits in headed mode ( default browser electron)
    example: D:\Roshan\Alfresco>npm run headTest

In case if you get error while running above command please follow below steps
  npm cache clean --force
  npm install
  npm run headTest

3. ***Explanation*** Describes the choice made in the solution

The framework used is Cypress, Node JS, Visual Studio and Test Runner 