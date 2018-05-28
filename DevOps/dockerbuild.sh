#!/bin/bash

TIMESTAMP=`TZ=IST-5:30 date +%F-%H%M`

GITHUB_LINK="https://github.com/Shwshank/QCI-Collect-frontend.git"

DOCKERNAME="Collect-Frontend"

IMAGENAME="qci-collect-front"

REPONAME="collect-frontend-pipeline"

rm -rf /var/lib/jenkins/workspace/collect-frontend/dist/
mv /var/lib/jenkins/workspace/collect-frontend-pipeline/dist /var/lib/jenkins/workspace/collect-frontend/
rm -rf $REPONAME
docker stop $DOCKERNAME
docker rm $DOCKERNAME
docker rmi $IMAGENAME
docker build -t $IMAGENAME /var/lib/jenkins/workspace/collect-frontend/.
docker run -dt --name $DOCKERNAME $IMAGENAME
