Docker (in Windows):
Reference:
- https://www.sitepoint.com/docker-windows-10-home/
- https://blog.jayway.com/2017/04/19/running-docker-on-bash-on-windows/

- Steps to do (done so far):
 - (In Windows Powershell as admin)
    -   choco install virtualbox
    -   choco install docker-machine
 - (In Git bash)
    -   docker-machine create --driver virtualbox default (causing this error: VT-x is disabled in the BIOS for all CPU modes (VERR_VMX_MSR_ALL_VMX_DISABLED).)

################################################################################

1. To add a git repo as submodule in another repo (in that specific folder):
git submodule add https://github.com/sreegithub19/vuejs_training.git
git submodule add https://github.com/sreegithub19/vercel_flask_app.git
git submodule add https://github.com/sreegithub19/vercel_django_example.git
git submodule add https://github.com/sreegithub19/express_vercel_app.git
git submodule add https://github.com/sreegithub19/vue_project.git
git submodule add https://github.com/sreegithub19/JavaScript-Applications.git

# reference: https://stackoverflow.com/questions/1030169/pull-latest-changes-for-all-git-submodules
2. To update all the submodules according to the latest remote repo changes:
git submodule update --init --recursive
git submodule update --recursive


3. To fetch the all the submodules according to the latest remote repo changes:
git pull --recurse-submodules


4. Most important commands: 
git submodule add <git_repo_link>   (in that specific folder - when adding the module for the first time)
git submodule update --init --force --remote   (in the main folder)
git submodule add -b <branch A> --name <name A> --url <path A> 
 -eg:  git submodule add -b main https://github.com/sreegithub19/my_angular_app.git javascript/angular_/my_angular_app_main

To remove a submodule:
 - Delete the relevant section from the .gitmodules file.
 - git add .gitmodules
 - git rm --cached <path-to-submodule>  (no trailing slash).
 - rm -rf .git/modules/<path_to_submodule>
 - git commit -m "Removed submodule <name>"
 - rm -rf <path_to_submodule>

5. Steps:
(i) git pull origin main
(ii) git submodule update --init --force --remote
(iii) git add .
(iv) git commit -m "Message"
(v) git push origin main

6. 
- Delete branch ("typescript") locally: git branch -D typescript
- Delete branch ("typescript") in remote : git push https://github.com/sreegithub19/node_server.git --delete typescript


(All in one step) :  
Mac:
git add . && git commit -m "Message" && git push origin main
git pull origin main && git submodule update --init --force --remote && git add . && git commit -m "Message" && git push origin main
Windows:
git add . ; git commit -m "Message" ; git push origin main
git pull origin main ; git submodule update --init --force --remote ; git add . ; git commit -m "Message" ; git push origin main


Windows long file name issue:
1. Execute this command in Powershell (run as Administrator):  git config --system core.longpaths true

================================================================

Youtube Channel content (in "Projects" playlist):
https://studio.youtube.com/channel/UC-RGFZerA05PxdPGCBV9RTw/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D

Video compressor: (10MB video size limit to upload videos directly onto Github)
https://www.freeconvert.com/video-compressor

Video splitter:
https://split-video.com/