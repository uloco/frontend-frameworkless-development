#!/bin/bash    
cp node_modules/public-project-stub/_variables.scss node_modules/sierra-library/src/
cp node_modules/public-project-stub/_variables.light.scss node_modules/sierra-library/src/
cd node_modules/sierra-library/ 
npm install 
./node_modules/.bin/gulp build 
mv dist/sierra.min.css ../../extrategy-styleguide.css