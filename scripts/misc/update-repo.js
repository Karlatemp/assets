let pwd = require('child_process');

let commit_msg = "Update " + new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' });

pwd.execFileSync('git', ['add', '-A'], { stdio: 'inherit' });
pwd.execFileSync('git', ['commit', '-m', commit_msg], { stdio: 'inherit' });
