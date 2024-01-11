#!/bin/sh
echo "Running npm install in task-4..."
(cd "task-4"; (stat package-lock.json > /dev/null 2>&1 && npm ci) || npm install --no-package-lock --no-shrinkwrap )
echo "Running npm install in task-5..."
(cd "task-5"; (stat package-lock.json > /dev/null 2>&1 && npm ci) || npm install --no-package-lock --no-shrinkwrap )
git init
git add .
git commit -m "initial commit"

