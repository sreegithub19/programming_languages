Reference:
https://thisdavej.com/using-toml-config-files-in-node-js-applications/

Steps:

- npm init -y
- npm install toml --save -g @ltd/j-toml -g

- npm link toml @ltd/j-toml
  (or)
- pat=$(pwd) && echo $pat && cd $( npm root -g ) && cd $pat
  (or)
- const toml1 = require(path.join(`${require("child_process").execSync(`npm root -g`).toString().trim()}`,'@ltd/j-toml'));
