import { Link, Route } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="ui footer segment">
            <div className="ui container grid centered">
                <a href="https://github.com/typsz/react-sklep">
                    <i className="big github icon"></i>
                </a>
                <a href="mailto:grzesniem@outlook.com">
                    <i className="big mail icon"></i>    
                </a>
            </div>
        </footer>
    )
}

export default Footer;