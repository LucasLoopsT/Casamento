import React, { useEffect } from 'react';
    
const scrollWhere = (element) => {
    var element = document.querySelector(element);

    if (element) {
        var topOffset = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
}

const Header = () => {
    
    useEffect(() => {
        // Event listener for menu icon click
        const menuIconClickHandler = () => {
            let menu = document.getElementById("menu");
            alert("clicou!");
            menu.classList.toggle("active");
        };
    
        // Event listener for scroll to top button
        var scrollToTopButton = document.querySelector("#ancora");
        window.addEventListener("scroll", () => {
          if (document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "flex"; // Show the button
          } else {
            scrollToTopButton.style.display = "none"; // Hide the button
          }
        });
      }, []);
    return (
        <>
            <div className="Header">
                <header>
                    <nav>
                        <div id="menu-icon">&#9776;</div>
                        <div id="menu">
                            <span onClick={() => scrollWhere('header')}>Home</span>
                            <span onClick={() => scrollWhere('#giftsToBuy')}>Presentes</span>
                            <span onClick={() => scrollWhere('#recados')}>Recados</span>
                            <span>Login</span>
                        </div>
                    </nav>
                </header>
            </div>
            <div id="ancora" onClick={() => scrollWhere('header')}>     
                <img src="https://cdn-icons-png.flaticon.com/512/6321/6321864.png" />
            </div>
        </>
    );
}

export default Header;
