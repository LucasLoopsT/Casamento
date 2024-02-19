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
        
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("menu-icon").addEventListener("click", function () {
                let menu = document.getElementById("menu");
                menu.classList.toggle("active");
            });
        });
        
        document.addEventListener("DOMContentLoaded", function () {
            var scrollToTopButton = document.getElementById("ancora");
        
            window.addEventListener("scroll", function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    scrollToTopButton.style.display = "flex";
                } else {
                    scrollToTopButton.style.display = "none";
                }
            });
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
                            <span onClick={scrollWhere('#giftsToBuy')}>Presentes</span>
                            <span onClick={scrollWhere('#recados')}>Recados</span>
                            <span>Login</span>
                        </div>
                    </nav>
                </header>
            </div>
            <div id="ancora" onclick={scrollWhere('header')}>
                <img src="https://cdn-icons-png.flaticon.com/512/6321/6321864.png" />
            </div>
        </>
    );
}

export default Header;
