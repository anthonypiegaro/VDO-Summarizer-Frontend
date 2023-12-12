# VDO-Summarizer-Frontend
https://github.com/anthonypiegaro/VDO-Summarizer-Frontend/assets/84252391/ad3fd297-074a-448a-b77f-aa2868f75882
## Background Info
Vdo Summarizer is a web app that creates Youtube video summaries for users. This repo is the frontend. The frontend depends on the backend to run, so I suggest downloading and running the backend before trying to run the frontend. Go to the [VDO-Summarizer-Backend](https://github.com/anthonypiegaro/VDO-Summarizer-Backend/tree/master) to get started with the backend.
### Features
1. Youtube Video Summarization
2. Past Summaries Archive
3. User Registration and Login
## Getting Started
### Cloning
To get started, clone the repo by running the following in the command line:
```
git clone https://github.com/anthonypiegaro/VDO-Summarizer-Backend.git
```
### Dependencies
This project uses React, thus you must make sure to have [Node.js](https://nodejs.org/en) installed. You can follow the link to download Node.js. Once you have Node.js installed, you will need to download the dependencies from the package.json file. You can do this by running the following command:
```
npm install
```
### Running Locally
To run locally, you can run the following command:
```
npm start
```
Be sure that your proxy is set up properly in the package.json file. If you are running the backend locally, be sure that proxy is set up to the correct port. In the package.json file:
```
"proxy": "http://localhost:port_backend_running_on",
```
For example, if your running the backend on port 8000, proxy would look like this:
```
"proxy": "http://localhost:8000",
```
If the backend is deployed, you need to change the proxy to the url of your backend, like so:
```
"proxy": "your_url",
```
For example, if the url is "https://backend.com" then proxy would look like this:
```
"proxy": "https://backend.com",
```
### Deploy
To deploy, you can choose a variety of options to host. For example, you can use [Netlify](https://www.netlify.com/), which is an easy place to get your React projects hosted. Follow the link for more guidance on getting the project hosted.
## Thank you
I hope you enjoy!
