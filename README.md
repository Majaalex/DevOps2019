# DevOps 2019

The project was to create a continuous integration pipline with Amazon Web Services.

## Table of Contents
* [Points of interest & custom bash scripts](https://github.com/Majaalex/DevOps2019#Points-of-interest-&-custom-bash-scripts)
* [Frontend application & unit testing](https://github.com/Majaalex/DevOps2019#Frontend-application-&-unit-testing)
* [Pull request pipeline](https://github.com/Majaalex/DevOps2019#Pull-request-pipeline)
* [Merge request pipeline](https://github.com/Majaalex/DevOps2019#Merge-request-pipeline)
* [Build status notifications](https://github.com/Majaalex/DevOps2019#Build-status-notifications)
* [Status requirements for pull requests](https://github.com/Majaalex/DevOps2019#Status-requirements-for-pull-requests)

## Points of interest & custom bash scripts
The frontend application is located in:
> /src/

The unit tests are located in:
> /src/unit-tests/

Custom scripts:
> /scripts/

Launch application in localhost:
> npm start

Run unit tests:
> npm run unit

Create & push new branch to github:
> npm run push

## Frontend application & unit testing
The frontend application is written in [React](https://reactjs.org/) and unit tested with the [React testing library](https://github.com/testing-library/react-testing-library). The application utilizes [VR.fi’s Rest API](https://www.digitraffic.fi/rautatieliikenne/) to fetch and present departing trains from Helsinki based what station the user searches for.

## Pull request pipeline

The repository makes use of a pull request pipeline on AWS to make sure there are no issues with the changes in the pull request. The pipeline will trigger an AWS codeBuild based on the buildspec.yml file, however this in this pipeline we do not deploy the build. We only test that it is compatible with the master branch.

## Merge request pipeline

The merge pipeline is run where we successfully merge a pull request to the master branch. When the pipeline triggers it uses the buildspec.yml file to build the applicatin with AWS codeBuild. The application is then deployed to an S3 bucket as a static website.

## Build status notifications

To send notifications of the builds from the merge pipeline we used AWS CloudWatch, AWS Simple Notification service and AWS Lambda.

The process is started from an AWS service, in this case our master request pipline project. Cloudwatch logs the build project and has been configured with a rule to create a message that is sent to the next component. In our SNS we can subscribe emails and our AWS Lambda function to be triggered. The SNS send the message to our emails and forward the message to AWS lambda.

Our lambda function is written in NodeJs. The lambda function takes the message and sends it to the webhook of our discord server.

## Status requirements for pull requests

On a pull request, there is an added check where it requires the pull request codeBuild to succeed for anyone to be able to merge the pull request. This is achieved by simply adding a branch protection rule in github. It connects the status check to the webhook we have already setup in the pipelines and waits for a result, either success or fail, from the codeBuild.

Additionally, the same person who makes a pull request cannot merge it into master. We require a second person to approve the pull request.
