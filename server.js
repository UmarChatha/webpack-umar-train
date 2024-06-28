const express = require("express");
const path = require("path");
const app = express();
const PORT = 1000;
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.use(express.static(path.join(__dirname)));


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ucussucgshc