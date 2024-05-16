import React from "react";

export default function Header(){
    return(
        <section className ="header-container">
<div class="Navbar">
  <nav class="Navbar__Items">
    <div class="Navbar__Link Navbar__Link-brand">
      Website title
    </div>
    <div class="Navbar__Link">
      Sobre
    </div>
    <div class="Navbar__Link">
      Busines canvas
    </div>
    <div class="Navbar__Link">
      prototipo
    </div>
  </nav>
  <nav class="Navbar__Items Navbar__Items--right">
    <div class="Navbar__Link">
      Link
    </div>
  </nav>
</div>
        </section>
    )
}