import express from "express";
import todoRoutes from "./src/routes/todoRoutes";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/todos", todoRoutes);

app.use((req, res, next) => {
  if (req instanceof Object && req.method) {
    console.log(req.method);
  }
  next();
});

app.listen(port, () => {
  console.log(`Server listening on port, ${port}`);
});
