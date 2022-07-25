# How to deploy

1. First, we start from the main branch name: main. We should pull the current source to local machine. After that, we run the command `npm run build`.
2. After build successfully, copy file index.html and change its name to 404.html
3. Commit the dist directory to the branch gh-pages by: `git add dist -f` and `git commit -m <comment>` and `git subtree push --prefix dist origin gh-pages`
4. Check result page at: https://yrdxai.github.io/yrdx-ai/
