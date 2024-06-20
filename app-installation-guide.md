# NewsPaper App Installation Guide - Ahsan Mahmood ([aoneahsan.com](aoneahsan.com)) ([linkedin.com/in/aoneahsan](linkedin.com/in/aoneahsan)) - Software Developer

## Frontend Project Installation Guide

- Clone the App Frontend Code from Repo [https://github.com/aoneahsan/newspaper-app-reactjs-laravel](https://github.com/aoneahsan/newspaper-app-reactjs-laravel) - Branch name: "frontend/v1"
- navigate into the project folder (frontend project folder)
- run "yarn install"
- once the packages are installed, then copy, paste "env-example" file in the same folder and rename the newly copied file to ".env"
- set the value of these env variables
  - "VITE_BACKEND_URL_LOCAL" set it's value to backend app url "<http://localhost:8000/api>" (in case the backend project was run using "php artisan serve" command)
  - "VITE_BACKEND_URL_PROD" for now you can set it's value to same as "VITE_BACKEND_URL_LOCAL" ("<http://localhost:8000/api>"), this is only for production app (once we deploy our app to server, then it will point to backend server url)
  - lastly set a secret value for "VITE_CRYPTO_SECRET", don't share it with me it's a secret :)
- once the env variables are set, then please run "npm start" in the project folder and it should start the project on "<http://localhost:5173>"
- now before visiting this url, please make sure the backend project is setup and running, because the frontend will try to access the backend project for data.
- that's all for frontend, next let's setup backend (laravel) project.

## Backend Project Installation Guide

- Clone the App Backend Code from Repo [https://github.com/aoneahsan/newspaper-app-reactjs-laravel](https://github.com/aoneahsan/newspaper-app-reactjs-laravel) - Branch name: "backend/v1"
- navigate into the project folder (backend project folder)
- run "composer install"
- hopefully that should complete successfully, next please copy, paste ".env.example" file in the same folder and rename the newly copied file to ".env"
- now we need to setup env variables value in ".env" file properly
  - for "NEWS_API_AI_APP_KEY" key please get a "API Key" from "[https://www.newsapi.ai](https://www.newsapi.ai)" and use that as it's value.
    - this key is required otherwise the news apis will not fetch data from "[newsapi.ai](newsapi.ai)"
  - for "NEWS_API_ORG_APP_KEY" key please get a "API Key" from "[https://newsapi.org](https://newsapi.org)" and use that as it's value.
    - this key is required otherwise the news apis will not fetch data from "[newsapi.org](newsapi.org)"
  - for "THE_GUARDIAN_APP_KEY" key please get a "API Key" from "[https://open-platform.theguardian.com](https://open-platform.theguardian.com)" and use that as it's value.
    - this key is required otherwise the news apis will not fetch data from "[open-platform.theguardian.com](open-platform.theguardian.com)"
  - for "NY_TIMES_APP_KEY" key please get a "API Key" from "[https://developer.nytimes.com/](https://developer.nytimes.com/)" and use that as it's value.
    - this key is required otherwise the news apis will not fetch data from "[developer.nytimes.com](developer.nytimes.com)"
  - for "FRONTEND_URL" env key please set it's value to frontend project url (where frontend project is running) (e.g: "<http://localhost:5173>"), this one is not critical, it's just used to show a message on welcome page, so you can skip it if you want.
  - once these env variables are setup, then please create a "mysql" database locally using "xampp"/"wampp" or locally install "mysql server".
  - and set it's connection details properly in ".env" file.
  - once the mentioned env variables and Database env variables are setup, and "composer install" command has completed successfully, then please run "php artisan key:generate" to create a "APP_KEY".
  - after that, please run "php artisan serve" in the backend project folder and hopefully it should start working on "<http://localhost:8000>".

## View the running project

- Once Frontend and backend projects are setup and running please visit the frontend project url and hopefully you should be able to see a running app.

### Developer System Tools Details

- NodeJs version (v22.2.0)
- Yarn version (1.22.22)
- Composer version (2.7.6)
- PHP version (8.1.28)

### Other Details

- I have created and completed a "Postman" collection i used to test the backend and third party APIs i used in this project, if you want to check that then please use this link to import "Postman Collection" directly in your locally running postman software
  - [https://api.postman.com/collections/9763817-b3ff3117-3b71-4b67-a3a4-b177837c6a92?access_key=PMAT-01HZWPR6TWDYFG9VWS6R7HMEZR](https://api.postman.com/collections/9763817-b3ff3117-3b71-4b67-a3a4-b177837c6a92?access_key=PMAT-01HZWPR6TWDYFG9VWS6R7HMEZR)
- I have setup a Private Github repo for this project [https://github.com/aoneahsan/newspaper-app-reactjs-laravel](https://github.com/aoneahsan/newspaper-app-reactjs-laravel)
  - if you want to access that please let me know
    - share a email and i will add that as contributor in this repo
- like mentioned in software demo video [https://youtu.be/sfHE_CcW8B0](https://youtu.be/sfHE_CcW8B0), i have used "[https://capacitorjs.com](https://capacitorjs.com)" in the project, mean i can create, Hybrid "Android and IOS" app for this project as well
  - if needed let me know and i will share "Android App APK of the project"

### Contact Details

- Linkedin: [linkedin.com/in/aoneahsan](https://linkedin.com/in/aoneahsan)
- Portfolio: [aoneahsan.com](https://aoneahsan.com)
- Updated Resume: [aoneahsan.com/resume](https://aoneahsan.com/resume)
- Updated CV: [aoneahsan.com/cv](https://aoneahsan.com/cv)
- Github: [github.com/aoneahsan](https://github.com/aoneahsan)
- Phone/WhatsApp/Imo: [+923046619706](tel:+923046619706)
- Email: [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com)
- Skype: [live:aoneahsan](live:aoneahsan)

#### Closing Comments

- Please do let me know your feedback on app code quality and lets connect and talk.

Thanks, Have a great day

Sincerely,
Ahsan Mahmood
