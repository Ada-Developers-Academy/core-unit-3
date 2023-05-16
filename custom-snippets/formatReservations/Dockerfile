# Install latest version of node
FROM node:latest

# Set current directory
WORKDIR /app

# Copy everything to the image. Ignores anything specified in .dockerignore
COPY . ./

# Install dependencies
RUN yarn install
