1. To add a git repo as submodule in another repo:
git submodule add https://github.com/sreegithub19/vuejs_training.git
git submodule add https://github.com/sreegithub19/vercel_flask_app.git

# reference: https://stackoverflow.com/questions/1030169/pull-latest-changes-for-all-git-submodules
2. To update all the submodules according to the latest remote repo changes:
git submodule update --init --recursive
git submodule update --recursive

