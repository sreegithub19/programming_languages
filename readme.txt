1. To add a git repo as submodule in another repo (in that specific folder):
git submodule add https://github.com/sreegithub19/vuejs_training.git
git submodule add https://github.com/sreegithub19/vercel_flask_app.git
git submodule add https://github.com/sreegithub19/vercel_django_example.git

# reference: https://stackoverflow.com/questions/1030169/pull-latest-changes-for-all-git-submodules
2. To update all the submodules according to the latest remote repo changes:
git submodule update --init --recursive
git submodule update --recursive


3. To fetch the all the submodules according to the latest remote repo changes:
git pull --recurse-submodules

4. Most important command: 
git submodule update --init --force --remote 

5. Steps:
(i) git pull origin main
(ii) git submodule update --init --force --remote
(iii) git add .
(iv) git commit -m "Message"
(v) git push origin main
