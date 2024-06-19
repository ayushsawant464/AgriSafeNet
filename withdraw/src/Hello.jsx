import React from "react";
import App from "./App";

const InvalidClaimPage = () => {
  return (
    <html>
      <head>
        <title>Invalid Claim</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style>{`
                    // Your CSS styles here
                `}</style>
      </head>
      <body
        style={{
          margin: "0 !important",
          padding: "0 !important",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          className="head flex justify-center"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a href="index.html">
            <img
              src="..\public\Agrologo.jpeg"
              alt="Logo"
              width="250px"
              height="70px"
            />
          </a>
        </div>

        <table cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td align="center" style={{ backgroundColor: "#eeeeee" }}>
              <table
                align="center"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style={{ maxWidth: "600px" }}
              >
                <tr>
                  <td
                    align="center"
                    valign="top"
                    style={{
                      fontSize: 0,
                      padding: "35px",
                      backgroundColor: "#82ca9c",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        maxWidth: "50%",
                        minWidth: "100px",
                        verticalAlign: "top",
                        width: "100%",
                      }}
                    >
                      <table
                        align="left"
                        cellpadding="0"
                        cellspacing="0"
                        width="100%"
                        style={{ maxWidth: "300px" }}
                      >
                        <tr>
                          <td
                            align="left"
                            valign="top"
                            style={{
                              fontFamily:
                                "Open Sans, Helvetica, Arial, sans-serif",
                              fontSize: "36px",
                              fontWeight: 800,
                              lineHeight: "48px",
                            }}
                          >
                            <h1
                              style={{
                                fontSize: "36px",
                                fontWeight: 800,
                                margin: 0,
                                paddingLeft: "50px",
                                color: "#ffffff",
                              }}
                            >
                              DONATE
                            </h1>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    style={{
                      padding: "35px 35px 20px 35px",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <table
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      width="100%"
                      style={{ maxWidth: "600px" }}
                    >
                      <tr>
                        <td
                          align="center"
                          style={{
                            fontFamily:
                              "Open Sans, Helvetica, Arial, sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            paddingTop: "25px",
                          }}
                        >
                          <img
                            src="https://static.vecteezy.com/system/resources/previews/004/599/558/original/cash-money-on-envelope-for-earning-gift-or-donate-icon-symbol-in-cartoon-flat-illustration-isolated-in-white-background-vector.jpg"
                            width="170"
                            height="120"
                            style={{ display: "block", border: "0px" }}
                          />
                          <br />
                          <h2
                            style={{
                              fontSize: "30px",
                              fontWeight: 800,
                              lineHeight: "36px",
                              color: "#333333",
                              margin: 0,
                            }}
                          >
                            Contribute Funds!
                          </h2>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style={{
                            fontFamily:
                              "Open Sans, Helvetica, Arial, sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            paddingTop: "10px",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td
                          align="center"
                          style={{
                            padding: "35px",
                            backgroundColor: "#82ca9c",
                          }}
                        >
                          <table
                            align="center"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            style={{ maxWidth: "600px" }}
                          >
                            <tr>
                              <td
                                align="center"
                                style={{
                                  fontFamily:
                                    "Open Sans, Helvetica, Arial, sans-serif",
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  paddingTop: "25px",
                                }}
                              >
                                <h2
                                  style={{
                                    fontSize: "24px",
                                    fontWeight: 800,
                                    lineHeight: "30px",
                                    color: "#ffffff",
                                    margin: 0,
                                  }}
                                >
                                  Your financial support, for green future.
                                </h2>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="center"
                                style={{ padding: "25px 0 15px 0" }}
                              >
                                <table cellSpacing="0" cellPadding="0">
                                  <tr>
                                    <td
                                      align="center"
                                      style={{
                                        borderRadius: "5px",
                                        backgroundColor: "#82ca9c",
                                      }}
                                    >
                                      {/* <a
                                        href="index.html"
                                        style={{
                                          fontSize: "18px",
                                          fontFamily:
                                            "Open Sans, Helvetica, Arial, sans-serif",
                                          color: "#ffffff",
                                          textDecoration: "none",
                                          borderRadius: "5px",
                                          backgroundColor: "#4caf50",
                                          padding: "15px 30px",
                                          display: "block",
                                        }}
                                      >
                                        Donate Now
                                      </a> */}
                                      <App />
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};

export default InvalidClaimPage;
