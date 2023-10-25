function Footer() {
    return (
        <footer>
            <div className="social-links">
                {/* <h2>GitHub</h2> */}
                <a href="https://github.com/Gera1313" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                </a>
                {/* <h2>LinkedIn</h2> */}
                <a href="https://www.linkedin.com/in/gerardoperez13/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                </a>
                {/* <h2>Stack Overflow</h2> */}
                <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-stack-overflow"></i>
                </a>
                {/* <h2>Spotify</h2> */}
                <a href="https://open.spotify.com/user/1213083432" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-spotify"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;