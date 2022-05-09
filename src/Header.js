import React from "react";

export function Header({adatok}){
    return (
      <h1>Pontszámítás - {adatok.name}</h1>
    );
  }