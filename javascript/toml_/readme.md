Reference:
https://thisdavej.com/using-toml-config-files-in-node-js-applications/
https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/

Steps:

- npm init -y
- npm install toml --save -g @ltd/j-toml -g

- npm link toml @ltd/j-toml
  (or)
- pat=$(pwd) && echo $pat && cd $( npm root -g ) && cd $pat
  (or)
- const toml1 = require(path.join(`${require("child_process").execSync(`npm root -g`).toString().trim()}`,'@ltd/j-toml'));

(Note: npm root -g : /Users/sreedhar.k/.nvm/versions/node/v16.10.0/lib/node_modules)
