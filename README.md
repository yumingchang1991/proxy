# ETF Tracker

[ETF Tracker](https://yumingchang1991.github.io/proxy-frontend/) is a simple demonstration of using a proxy server to request data from a third party API.

[Marketstack](https://marketstack.com/documentation) is the third party API used in this project.

# Frontend Repo

This is the frontend repo, deployed to GitHub Pages.

# Frontend Techstack

- TypeScript
- React & MUI
- GitHub Pages
- Axios

# Frontend Description

It is a React application with TypeScript.

It includes a simple user interface to gather input from user, and then send it to proxy server.

# Repo Navigation
[to Backend Repo (AWS Proxy Server)](https://github.com/yumingchang1991/proxy-backend)

# Frontend Routes
| Access | Path                        | Desciption                                          |
| ------ | --------------------------- | --------------------------------------------------  |
| ALL    | `/proxy-frontend/login`     |  login page                                         |
| ALL    | `/proxy-frontend/register`  |  member signup page                                 |
| User   | `/proxy-frontend/features`  |  display features and roadmap of this application   |
| User   | `/proxy-frontend/symbols`   |  display entry point for Admin user to upload file  |
| User   | `/proxy-frontend/`          |  display portfolio page                             |

# Roadmap

| Group | Feature                                              | Progress    | Completed At |
| ----- | ---------------------------------------------------- | ----------- | ------------ |
| Infra | Set up AWS Server through Elastic Beanstalk          | completed   | 2022-08-06   |
| Data  | Set up api route to get one ETF data                 | completed   | 2022-08-16   |
| Infra | Set up rate limiter for application                  | completed   | 2022-08-19   |
| UX    | Cache route response                                 | completed   | 2022-08-20   |
| Infra | Set up HTTPS through AWS Route 53                    | completed   | 2022-09-02   |
| UX    | Complete Features section on landing page            | completed   | 2022-09-06   |
| UX    | Inplement JWT Auth through React State and Router    | completed   | 2022-09-14   |
| Data  | Add entry point to upload csv to set allowed ETFs    | completed   | 2022-10-28   |
| Data  | Handle error for invalid ETF Symbol from user input  | developing  | x |
| Data  | Handle error for invalid ETF Symbol from admin file  | developing  | x |
| Data  | Export ETF data as csv file                          | developing  | x |
| Data  | Group ETF data as portfolio                          | not yet     | x |
| Data  | Set up api route to get multiple ETF data            | not yet     | x |
| UX    | Cache api call to get multiple ETF data              | not yet     | x |
| UX    | Add performance hook for web monitor                 | not yet     | x |
| Data  | Use Chart.js to display portfolio                    | not yet     | x |
