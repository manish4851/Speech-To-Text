const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const staticPath=__dirname+"/public";
app.use(express.static(staticPath));
app.use(express.json());
app.listen(port, (err) => {
  if (!err) {
    console.log(`Successfully started at port ${port}`);
  } else {
    console.log(err);
  }
});
