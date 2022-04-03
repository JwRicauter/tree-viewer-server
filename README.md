# Server of a Tree Viewer

Server that provides information about their structure to a client, made it with Express.js, a framework of Node.

## Installation

In order to run the project you have to clone the repo and make (inside the downloaded folder):

```bash
npm i
```
After that, with a simply 

```bash
npm run start
```

the project will run.

## API Structure

This first version of this app provide just two endpoints:

1) GET children
```/api/v1/tree/children ```. Receive a ```param``` named ```path``` with the path of a folder or file. The ```response``` will be 200 with an array that represents the file or folder and their respective children nodes with depth 1 if the path is valid or 404 if the path is not valid.

The structure of the response of the children endpoint will be like the next array:

```bash
    [
       { path:string, name:string, children:boolean }
       ...
    ]
```

The children boolean indicates if this is a folder or not.

2) GET childFile
```/api/v1/tree/childFile```. Receive a ```param``` named ```path``` with the path of a folder or file. The ```response``` will be 200 with their respective datafile (in base64 string format, fileData format, etc) if the path is valid, otherwise 404.


