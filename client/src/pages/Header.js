import React from "react";
import "./Header.css";

function Header() {
  return (
    <div >
      <header>
        
                <h2>Si vos comptes clients vous pèsent, Vendez-les ! </h2>
                <p>
                  UNIFACTOR est un établissement financier d'affacturage,
                  affilié au réseau international FCI et partenaire des
                  principaux établissements bancaires tunisiens.
                </p>
                <form>
                  <input type="email" placeholder="email" />
                  <button type="submit">subscribe</button>
                </form>
              
      </header>
    </div>
  );
}

export default Header;
