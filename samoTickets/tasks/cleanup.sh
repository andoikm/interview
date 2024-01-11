#!/bin/sh
echo "Performing cleanup in task-4..."
(cd "task-4"; rm -rf node_modules )
echo "Performing cleanup in task-5..."
(cd "task-5"; rm -rf node_modules )
rm -rf .git __MACOSX .idea
