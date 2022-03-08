import { Link, Route } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="ui inverted footer segment">
            <div className="ui container grid centered">
                <a href="https://github.com/typsz/react-sklep" className="inverted">
                    <i className="big github icon"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer;