import React from "react";

export default class BrBad {
  getMainUrl = () => {
    return "https://www.breakingbadapi.com/api/";
  };

  async getAllCharacters() {
    const data = await fetch(`${this.getMainUrl()}characters`);
    return data.json();
  }
}
