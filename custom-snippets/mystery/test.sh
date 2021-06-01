#!/bin/sh
submission_file=${1:-submission.txt}

cp "$submission_file" mystery.js
echo "module.exports = mystery" >> mystery.js

npm test
