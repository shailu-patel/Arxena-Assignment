import React from 'react';

import ArxenaLogo from '../img/arxena-logo/arxena-logo.jpg';
import Profile from '../img/mannan_pacha_dp.webp';
import quote1 from '../img/quote.png';
import quote2 from '../img/quote1.png';
import linkedin from '../img/linkdin.png'

class Signup extends React.Component{
    render() {
        return (
            <div className="desk" style={{ height: "100%" }}>
                <div style={{ display: "table", width: "100%", height: "100%" }}>
                    <div
                        style={{
                            display: "table-cell",
                            width: "70%",
                            backgroundColor: "white",
                            padding: 20
                        }}
                    >
                        <img
                            style={{ width: "10vw", marginTop: 5, cursor: "pointer" }}
                            onclick="new PageContents().changePage('/#')"
                            src={ArxenaLogo}
                            alt="Arxenalogo"
                        />
                        <div
                            className="shadow content_section"
                            style={{
                                width: 500,
                                padding: 30,
                                backgroundColor: "rgba(255,255,255)",
                                borderRadius: 5,
                                textAlign: "center",
                                left: "0px, right:0"
                            }}
                        >
                            <div id="signup_form_content">
                                <span style={{ fontSize: "16pt", fontWeight: 300 }}>
                                    Get started with 10 free org-chart credits.
                                    <br />
                                    No credit card is needed.
                                </span>
                                <br />
                                <br />
                                <div style={{ width: "90%", left: "5%", position: "relative" }}>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input
                                                id="full_name"
                                                type="text"
                                                className="form-control-custom"
                                                placeholder="Full Name"
                                                oninput="new SessionStorageUpdates().updateFullName(this)"
                                            />
                                            <br />
                                        </div>
                                        <div className="col-sm-12 phone_number_input">
                                            <input
                                                id="phone"
                                                type="text"
                                                className="form-control-custom enter_click phone_number"
                                                placeholder="Mobile Number"
                                                oninput="new SessionStorageUpdates().updatePhone(this)"
                                            />
                                            <br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                id="email"
                                                type="text"
                                                className="form-control-custom enter_click"
                                                placeholder="Business Email"
                                                oninput="new SessionStorageUpdates().updateEmail(this)"
                                            />
                                            <br />
                                        </div>
                                        <div className="col-sm-12">
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control-custom enter_click"
                                                placeholder="Password"
                                                oninput="new SessionStorageUpdates().updatePassword(this)"
                                            />
                                            <br />
                                        </div>
                                        <div className="col-sm-12 dropdown show">
                                            <button
                                                id="new_account_use_case"
                                                className="btn dropdown-toggle"
                                                type="button"
                                                style={{
                                                    width: "100%",
                                                    fontSize: "10pt",
                                                    backgroundColor: "white",
                                                    border: "1px solid rgb(210,210,210)",
                                                    color: "#495057"
                                                }}
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="true"
                                            >
                                                I work for a
                                            </button>
                                            <div
                                                className="dropdown-menu "
                                                aria-labelledby="dropdownMenuButton"
                                                style={{
                                                    width: "93%",
                                                    fontSize: "10pt",
                                                    position: "absolute",
                                                    willChange: "transform",
                                                    top: 0,
                                                    left: 0,
                                                    transform: "translate3d(0px, 34px, 0px)"
                                                }}
                                                x-placement="bottom-start"
                                            >
                                                <a href='/'
                                                    className="dropdown-item"
                                                    onclick="new Selections().selectNewAccountUseCase(this)"
                                                    use_case="agency"
                                                    label="Recruitment Agency"
                                                >
                                                    Recruitment Agency
                                                </a>
                                                <a href='/'
                                                    className="dropdown-item"
                                                    onclick="new Selections().selectNewAccountUseCase(this)"
                                                    use_case="corporate"
                                                    label="Corporate"
                                                >
                                                    Corporate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            width: "100%",
                                            textAlign: "center",
                                            position: "relative",
                                            padding: 20,
                                            marginTop: 20
                                        }}
                                    >
                                        <div
                                            id="signup_button_desktop"
                                            className="form_button enter_click"
                                            style={{
                                                margin: "auto",
                                                position: "absolute",
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                bottom: 0
                                            }}
                                            onclick="new PageContents().signUp()"
                                        >
                                            Create account
                                        </div>
                                    </div>
                                </div>
                                <div id="signup_error" style={{ marginTop: 20 }} />
                                <div
                                    style={{ color: "rgb(197,197,205)", cursor: "pointer" }}
                                    onclick="new PageContents().changePage('/login')"
                                >
                                    Already registered?{" "}
                                    <u style={{ borderBottom: "1px dashed", textDecoration: "none" }}>
                                        Log in instead
                                    </u>
                                </div>
                                <br />
                                <div style={{ color: "rgb(197,197,205)" }}>
                                    <u style={{ borderBottom: "1px dashed", textDecoration: "none" }}>
                                        Account lock:{" "}
                                    </u>
                                    We discourage licence sharing. Your account will be accessible from
                                    this device only
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="signup_lateral"
                        style={{
                            display: "table-cell",
                            width: "30%",
                            padding: 20,
                            textAlign: "left"
                        }}
                    >
                        <br />
                        <br />
                        <div style={{ textAlign: "center" }}>
                            <img
                                id="testimonial_photo"
                                src={Profile}
                                alt='profile'
                                style={{ width: 150, borderRadius: "50%" }}
                            />
                        </div>
                        <div style={{ textAlign: "left" }}>
                            <img
                                src={quote1}
                                alt='quote1'
                                style={{ width: 40, marginRight: 40, marginBottom: 20 }}
                            />
                        </div>
                        <i id="testimonial_quote">
                            Arxena helps me map with large F100 accounts saving me hours of manual
                            work for resourcing projects.
                        </i>
                        <br />
                        <span style={{ fontSize: "13pt" }}>
                            <br />
                            <br />
                            <strong style={{ fontWeight: 500 }} id="testimonial_name">
                                Mannan Pacha
                            </strong>{" "}
                            |{" "}
                        </span>
                        <span id="testimonial_title" style={{ fontSize: "13pt" }}>
                            Manager - Ernst &amp; Young
                        </span>
                        <br />
                        <img
                            id="testimonial_logo"
                            src="/static/img/EY_logo_2019.png"
                            alt='Ey'
                            style={{ height: 20 }}
                        />
                        <br />
                        <br />
                        <img
                            id="linkedin_logo"
                            src={linkedin}
                            onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')"
                            alt='linkdin'
                            style={{ height: 20, cursor: "pointer" }}
                        />
                        <div style={{ textAlign: "right" }}>
                            <img
                                src={quote2}
                                alt='quote2'
                                style={{ width: 40, marginRight: 40 }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Signup;