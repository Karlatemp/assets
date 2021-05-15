
let scriptToRun = process.env.PROCESS_TO_RUN;
if (scriptToRun == undefined) {
    console.log("Please specify `PROCESS_TO_RUN` in env");
    process.exit(-1);
}
require('./' + scriptToRun);
