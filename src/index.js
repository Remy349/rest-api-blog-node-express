const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

const PORT = 3000 || process.env.PORT;

app.use(morgan("dev"));

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
