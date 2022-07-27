#!/usr/bin/env bash
export EXISTING_VARS=$(printenv | awk -F= '{print $1}' | sed 's/^/\$/g' | paste -sd,); 
# for file in $JSFOLDER;
# do
#   cat $file | envsubst $EXISTING_VARS | tee $file
# done
echo $EXISTING_VARS | grep KEY
JSFOLDER=/usr/share/nginx/html/assets
templatefile=$JSFOLDER/env.template.js
envfile=$JSFOLDER/env.js
cat $templatefile | envsubst $EXISTING_VARS | tee $envfile 
echo "template file after substitution" | cat $templatefile
echo "env file for consumption"| cat $envfile
nginx -g 'daemon off;'