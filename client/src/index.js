import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { CartProvider } from "./contexts/cart.context";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/", //"https://sabka-bazaar-apolloserver.herokuapp.com/",
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
