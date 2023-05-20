#!/bin/sh
submission_file=${1:-submission.txt}

cp "$submission_file" index.js
echo >> index.js
echo "module.exports = formatLibrary" >> index.js

yarn test
