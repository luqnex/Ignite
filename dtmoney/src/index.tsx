import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  // inicia o banco de dados com valores padrão
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Dev de website",
          type: "deposit",
          category: "dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 9:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "casa",
          amount: 1100,
          createdAt: new Date("2021-02-12 9:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      // recebe as requisições da api
      const data = JSON.parse(request.requestBody);

      // salva no banco de dados do mirage
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
