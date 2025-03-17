const { exec } = require("child_process");

const srcDB = "postgres://avnadmin:AVNS_9p5jJWf7wsb7dg6PEpb@pg-365d3318-sherinsk007-c0b5.a.aivencloud.com:26753/hexiscopy2?sslmode=require";
const destDB = "postgres://avnadmin:AVNS_EcTV8LzV5Yq208wRKoQ@pg-15a44c8-sherinsk-1754.e.aivencloud.com:26205/hexisbackup?sslmode=require";

exec(`pg_dump ${srcDB} | psql ${destDB}`, (err, stdout, stderr) => {
    if (err) {
        console.error(`❌ Error: ${err.message}`);
        return;
    }
    console.log("✅ Database copied successfully!");
});

// ensure pg_dump installed
// where pg_dump in windows

