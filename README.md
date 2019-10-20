# DevOps 2019

The project was to create a continuous integration pipline with Amazon Web Services. 

## 1. Pull request pipeline


## 2. Merge request pipeline


## 3. Build status notifications from master pipeline to discord or/and email

To send notifications of the builds from the master pipeline we used AWS CloudWatch, AWS Simple Notification service and AWS Lambda.

The process is started from an AWS service, in this case our master request pipline project. Cloudwatch logs the build project and has been configured with a rule to create a message that is sent to the next component. In our SNS we can subscribe emails and our AWS Lambda function to be triggered. The SNS send the message to our emails and forward the message to AWS lambda.

Our lambda function is written in NodeJs. The lambda function takes the message and sends it to the webhook of our discord server.

## 4. Application and unit testing


## 5. Github require status checks for pull requests 

