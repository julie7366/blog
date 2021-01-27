#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github

git init
git add -A
git commit -m "${msg}"
git push -f git@github.com:julie7366/julie7366.github.io.git master
