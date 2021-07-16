#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹
# deploy to github
echo 'julie7366.github.io/my-blog' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:julie7366/my-blog.git
else
  msg='来自github action的自动部署'
  githubUrl=https://julie7366:${GITHUB_TOKEN}@github.com/julie7366/my-blog.git
  git config --global user.name "julie7366"
  git config --global user.email "736635982@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github