#!/bin/bash    
cp $(npm root)/public-project-stub/_variables.scss $(npm root)/sierra-library/src/
cp $(npm root)/public-project-stub/_variables.light.scss $(npm root)/sierra-library/src/
cd $(npm root)/sierra-library/ 
npm install 
gulp build 
mv dist/sierra.min.css ../../extrategy-styleguide.css