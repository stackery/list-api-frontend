# List API Frontend

This is a simple list app, written in NodeJS 10.x.

Follow the [Stackery List API Frontend Tutorial](https://docs.stackery.io/docs/tutorials/list-api-frontend/) to learn to use Stackery while writing this application.

The following are descriptions of the Stackery resources in this stack:

* ___Rest API___ : An API Gateway with GET and POST endpoints

* ___Function___ : Two Lambda functions will POST and GET items to and from the table

* ___Table___ : A DynamoDB table that will store our items

* ___Function___ : The Function deploys the static files that make up the frontend to an S3 bucket each time it is deployed.

* ___Object Store___ : The S3 Bucket our Function will be publishing to. It will be configured to host a static website.

The application architecture is defined in the `template.yaml`, a Serverless Application Model (SAM) template which can be managed through the Stackery Dashboard at app.stackery.io.
