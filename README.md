# Image processing API, Udacity Full-Stack Javascript Nanodegree

This project consists in an express server that processes images from a local folder and creates a resized version of it and saves it inside a different folder using the file system. Once created a thumb version it serves the processed image through the api endpoint.

# API Reference

### List of the images avaiable to be accessed through the endpoint

GET /api/listImages

# Resize image

GET /api/chooseImage?fileName=palmtunnel&height=50&width=50

| PARAMETER | TYPE   |
| --------- | ------ |
| fileName  | string |
| height    | number |
| width     | number |

# Functionality

- This will create a resized version of the image in a thumb folder
- If the thumb folder does not exist, it is created
- Any changes to the height or width parameters will create a new image with the desired parameters widthout deleting the previous resized image

# Scripts

### Run prettier

- npm run prettier

### Run jasmine

- npm run jasmine

### Run lint

- npm run lint

### Run tests

- npm run test

### Start the dev server

- npm run start

### Build the project

- npm run build

# Run Locally

### Clone the project

- git clone https://github.com/DCS97/Image_Processing_Api

### Go to the project directory

- cd Image_Processing_Api

### Install dependencies

- npm i

### Start the dev server

- npm run start
