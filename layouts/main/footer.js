import Link from 'next/link'
import Button from 'react-md/lib/Buttons/Button';

export default () => (
    <footer className="app-footer">
        <div className="md-grid footer-top">
            <div className="md-cell md-cell--6">
                <h4 className="md-title">¿Quiénes somos?</h4>
                <p>BIG es una empresa peruana que fomenta la cultura emprendedora en el país a través de talleres, seminarios,
                    cursos y conferencias.</p>
                <Link href="/nosotros">
                    <a><Button style={{padding: 0}} flat primary iconBefore={false} label="Conócenos">keyboard_arrow_right</Button></a>
                </Link>
            </div>
            <div className="md-cell md-cell--6">
                <h4 className="md-title">Mantente en contácto</h4>
                <div className="social-network">
                    <ul className="social list-inline">
                        <li>
                            <a href="https://www.facebook.com/businessideasgroupperu/" target="_blank">
                                <i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC7nyCydiTAQ_PWq22sgMbDg" target="_blank">
                                <i className="fa fa-youtube-play"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/business-ideas-group" target="_blank">
                                <i className="fa fa-linkedin"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="md-grid footer-bottom">
            <div className="md-cell md-cell--6">
                <p>Copyright © {new Date().getFullYear()} Business Ideas Group (BIG).</p>
            </div>
        </div>
        <style jsx>{`
            a {
                text-decoration: none;
            }

            .app-footer {
                background: rgb(35, 35, 35);
            }

            .md-grid {
                padding: 0.5rem 10rem;
            }

            p, li {
                font-size: 1.2rem;
                color: rgb(140, 140, 140);
            }

            .footer-top {
                padding-top: 30px;
            }

            .footer-bottom {
                background: #424242;
            }

            .md-title {
                font-size: 2rem;
                color: rgb(200,200,200);
            }

            .list-inline {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }

            .list-inline li{
                display: inline;
                padding-right: 8px;
            }

            .social-network {
                position: relative;
                z-index: 0;
            }

            .social-network .social li {
                display: table-cell;
            }

            .social-network .social li a i {
                width: 55px;
                height: 80px;
                font-size: 20px;
            }

            .social {
                padding: 0;
                margin: 0;
            }
            .social li {
                margin-right: 4px;
            }
            .social li {
                position: relative;
            }
            .text-center .social li {
                margin: 0 2px;
            }
            .social li a {
                display: table;
                position: relative;
            }
            .social li a i {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
                color: #8C8C8C;
                width: 30px;
                height: 30px;
                font-size: 1.5em;
                -webkit-transition: all 200ms ease-out;
                -moz-transition: all 200ms ease-out;
                    -o-transition: all 200ms ease-out;
                        transition: all 200ms ease-out;
            }
            .social li a i:after {
                content: '';
                z-index: -1;
                position: absolute;
                width: 100%;
                height: 0;
                top: 0;
                left: 0;
                -webkit-transition: all 200ms ease-out;
                -moz-transition: all 200ms ease-out;
                    -o-transition: all 200ms ease-out;
                        transition: all 200ms ease-out;
            }
            .social li a:hover i {
                color: #FFF;
            }
            .social li a:hover i:after {
                height: 100%;
            }

            .social a .fa-facebook:after {
                background: #4668B3;
            }

            .social a .fa-twitter:after {
                background: #2FBBED;
            }

            .social a .fa-youtube-play:after {
                background: #e72e25;
            }

            .social a .fa-linkedin:after {
                background: #1884BB;
            }

            `}</style>
    </footer>
)