function Navbar() {
    return(
        <nav>
            <ul className="start">
                <div className="itens start">

                    <div className="logo">
                        <li><a href="#sectionS"><img src="images/logo-branco.png" alt=""/></a></li>
                    </div>
                    <div className="item-nav">
                        <li><a href="#section1"><strong>Workshops</strong></a></li>
                    </div>
                    <div className="item-nav">
                        <li><a href="#section2"><strong>Competições</strong></a></li>
                    </div>
                    <div className="item-nav">
                        <li><a href="#section3"><strong>Palestras</strong></a></li>
                    </div>
                    <div className="item-nav">
                        <li><a href="#section4"><strong>Mostras Científicas</strong></a></li>
                    </div>
                    <div className="item-nav">
                        <li><a href="#section4"><strong>Entretenimento</strong></a></li>
                    </div>
                </div>
                <div className="item-nav-end start">
                    <li><a href="#"><strong>Inscreva-se</strong></a></li>
                </div>
                
            </ul>
        </nav>
    );
}
export default Navbar;