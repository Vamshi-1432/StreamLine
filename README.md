<<<<<<< HEAD
# NetFlix GPT

i.Login/SignUp page
-Sign In/Sign Up form
-Redirect to Browse Page

ii.Browse (After authentication)
-Header
-Main Movie
--Trailer in Background
--Title & description
--Movie Suggestion
---Movie Lists

iii.NetFlix GPT
iv.Search Bar
v. Movie Suggestions

#Deploment a project into FireBase
#create a root directory for your web app.
-Sign in to Google
// firebase login

#Initiate your project
Run this command from your app's root directory:

// firebase init
When you're ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). Then, run this command from your app's root directory:
-->Select "Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys"
-->Select Use an existing project
-->What do you want to use as your public directory? (public) ->Mention it as "build"
-->Configure as a single-page app (rewrite all urls to /index.html)? No
--> Set up automatic builds and deploys with GitHub? (y/N) No

Now it will generate config file of firebase as firebase.json
\*\*Currently we are having build folder

\*\* Before deployment first we need to build the project, So run "npm run build"
-->It will create optimizing production file
// firebase deploy
-->Now app is deployed into prod server

After deploying, view your app at netflixgpt-30d03.web.app
=======
# NetFlix_Clone
>>>>>>> origin/main
