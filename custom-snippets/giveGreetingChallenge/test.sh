#!/bin/sh
submission_file=${1:-submission.txt}

cp "$submission_file" submission.js
echo >> submission.js
echo "module.exports = {giveCasualGreeting, giveFormalGreeting, writeLetter};" >> submission.js

yarn test
