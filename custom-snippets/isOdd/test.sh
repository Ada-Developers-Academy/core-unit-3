#!/bin/sh
submission_file=${1:-submission.txt}

cp "$submission_file" submission.js
echo "module.exports = isOdd;" >> submission.js

npm test
