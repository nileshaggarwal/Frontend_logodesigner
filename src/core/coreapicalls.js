import React from "react";
import { API } from "../backend";

export const getAllLogos = () => {
  return fetch(`${API}/logos`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
