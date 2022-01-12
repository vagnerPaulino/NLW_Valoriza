import express, { response } from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Ola");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá método POST");
});

app.listen(3000, () => console.log("Server is running"));
