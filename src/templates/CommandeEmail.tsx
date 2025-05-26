import Head from "next/head";
import Image from "next/image";
import React from "react";


interface CommandeEmailProps {
    selectedImages: string[];
}

const CommandeEmail: React.FC<CommandeEmailProps> = ({ selectedImages }) => {
    return (
        <html lang="fr">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Email Focus et Lumière</title>
                <style>
                    {`
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                        }

                        .container {
                            max-width: 600px;
                            margin: 20px auto;
                            background-color: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            color: #333333;
                        }

                        a {
                            color: #1a73e8;
                            text-decoration: none;
                        }
                    `}
                </style>
            </Head>
            <body>
                <div className="container">
                    <h2>Récapitulatif de votre sélection 📸</h2>
                    <p>
                        Bonjour, <br />
                        <br />
                        Merci encore pour votre confiance !<br />
                        Voici les photos commandées :
                    </p>

                    <table
                    role="presentation"
                    style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}
                    >
                    <tbody>
                        {selectedImages.reduce((rows: string[][], src, index) => {
                        if (index % 2 === 0) rows.push([]);
                        rows[rows.length - 1].push(src);
                        return rows;
                        }, []).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((src, colIndex) => (
                            <td
                                key={colIndex}
                                style={{ padding: "10px", textAlign: "center", verticalAlign: "top" }}
                            >
                                <a href={src} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={src}
                                    alt={`Image ${rowIndex * 2 + colIndex + 1}`}
                                    width={250}
                                    height={167}
                                    style={{ display: "block", width: "100%", height: "auto", borderRadius: "5px" }}
                                />
                                </a>
                            </td>
                            ))}
                            {row.length < 2 && (
                            <td style={{ padding: "10px" }}></td>
                            )}
                        </tr>
                        ))}
                    </tbody>
                    </table>

                    <p>
                        À très vite, <br />
                        L’équipe Focus & Lumière
                    </p>

                    <table
                        id="signature-start"
                        className="es-table-not-adapt sign"
                        style={{
                            borderCollapse: "collapse",
                            borderSpacing: 0,
                            margin: "auto",
                            width: "62.9866%",
                            height: "234px",
                        }}
                        role="presentation"
                        cellSpacing={0}
                        cellPadding={0}
                    >
                        <tbody>
                            <tr style={{ height: "81px" }}>
                                <td
                                    style={{
                                        padding: "20px 0px 0px",
                                        margin: 0,
                                        width: "99.5857%",
                                        height: "81px",
                                    }}
                                    align="center"
                                >
                                    <table
                                        className="es-table-not-adapt"
                                        style={{
                                            borderCollapse: "collapse",
                                            borderSpacing: 0,
                                            width: "100.396%",
                                            height: "77px",
                                        }}
                                        role="presentation"
                                    >
                                        <tbody>
                                            <tr className="sig-name-block">
                                                <td
                                                    style={{
                                                        padding: 0,
                                                        margin: 0,
                                                        width: "18.5721%",
                                                        fontSize: 0,
                                                    }}
                                                >
                                                    <table
                                                        style={{
                                                            borderCollapse: "collapse",
                                                            borderSpacing: 0,
                                                        }}
                                                        role="presentation"
                                                        border={0}
                                                        width="100%"
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        padding: 0,
                                                                        margin: 0,
                                                                        borderBottom: "1px solid #151515",
                                                                        background: "unset",
                                                                        height: "1px",
                                                                        width: "100%",
                                                                    }}
                                                                ></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                                <td
                                                    style={{
                                                        padding: 0,
                                                        margin: 0,
                                                        width: "8.28601%",
                                                    }}
                                                ></td>
                                                <td
                                                    className="es-m-txt-c"
                                                    style={{
                                                        padding: 0,
                                                        margin: 0,
                                                        width: "46.0016%",
                                                    }}
                                                    align="left"
                                                >
                                                    <h2
                                                        style={{
                                                            margin: 0,
                                                            lineHeight: "30px",
                                                            fontFamily: "arial",
                                                            fontSize: "25px",
                                                            fontStyle: "normal",
                                                            fontWeight: "normal",
                                                            color: "#151515",
                                                            textTransform: "uppercase",
                                                        }}
                                                    >
                                                        Yanis &amp; Iana
                                                    </h2>
                                                </td>
                                                <td
                                                    style={{
                                                        padding: 0,
                                                        margin: 0,
                                                        width: "8.28601%",
                                                    }}
                                                ></td>
                                                <td
                                                    style={{
                                                        padding: 0,
                                                        margin: 0,
                                                        width: "18.5721%",
                                                        fontSize: 0,
                                                    }}
                                                >
                                                    <table
                                                        style={{
                                                            borderCollapse: "collapse",
                                                            borderSpacing: 0,
                                                        }}
                                                        role="presentation"
                                                        border={0}
                                                        width="100%"
                                                        cellSpacing={0}
                                                        cellPadding={0}
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td
                                                                    style={{
                                                                        padding: 0,
                                                                        margin: 0,
                                                                        borderBottom: "1px solid #151515",
                                                                        background: "unset",
                                                                        height: "1px",
                                                                        width: "100%",
                                                                    }}
                                                                ></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr className="sig-job-and-company-block" style={{ height: "46px" }}>
                                <td
                                    style={{
                                        padding: "10px 0px 0px",
                                        margin: 0,
                                        width: "99.5857%",
                                        height: "46px",
                                    }}
                                    align="center"
                                >
                                    <p
                                        style={{
                                            margin: 0,
                                            fontFamily: "arial",
                                            lineHeight: "23px",
                                            color: "#666666",
                                            fontSize: "15px",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        <span className="sig-job-title">Photographe</span>
                                        <span className="sig-job-company-separator"> • </span>
                                        <span className="sig-company-name">Focus &amp; Lumière</span>
                                    </p>
                                </td>
                            </tr>
                            <tr style={{ height: "2.6px" }}>
                                <td
                                    style={{
                                        padding: "25px 0px 0px",
                                        margin: 0,
                                        fontSize: 0,
                                        width: "99.5857%",
                                        height: "2.6px",
                                    }}
                                    align="center"
                                >
                                    <table
                                        style={{
                                            borderCollapse: "collapse",
                                            borderSpacing: 0,
                                        }}
                                        role="presentation"
                                        border={0}
                                        width="100%"
                                        cellSpacing={0}
                                        cellPadding={0}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    style={{
                                                        padding: 0,
                                                        margin: 0,
                                                        borderBottom: "1px solid #0b5394",
                                                        background: "unset",
                                                        height: "1px",
                                                        width: "250px",
                                                    }}
                                                ></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            <tr style={{ height: "94.4px" }}>
                                <td
                                    style={{
                                        padding: "15px 0px 0px",
                                        margin: 0,
                                        width: "99.5857%",
                                        height: "94.4px",
                                    }}
                                    align="center"
                                >
                                    <table
                                        className="es-table-not-adapt"
                                        style={{
                                            borderCollapse: "collapse",
                                            borderSpacing: 0,
                                        }}
                                        role="presentation"
                                    >
                                        <tbody>
                                            <tr className="sig-phone-block">
                                                <td style={{ padding: 0, margin: 0 }}>
                                                    <table
                                                        style={{
                                                            borderCollapse: "collapse",
                                                            borderSpacing: 0,
                                                        }}
                                                        role="presentation"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: 0, margin: 0, width: "12px" }}>
                                                                    <p
                                                                        style={{
                                                                            margin: 0,
                                                                            fontFamily: "arial",
                                                                            lineHeight: "21px",
                                                                            color: "#666666",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        <strong>tel</strong>
                                                                    </p>
                                                                </td>
                                                                <td style={{ padding: 0, margin: 0, width: "10px" }}></td>
                                                                <td style={{ padding: 0, margin: 0 }}>
                                                                    <p
                                                                        style={{
                                                                            margin: 0,
                                                                            fontFamily: "arial",
                                                                            lineHeight: "21px",
                                                                            color: "#666666",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        <a
                                                                            style={{
                                                                                textDecoration: "none",
                                                                                color: "#151515",
                                                                                fontSize: "14px",
                                                                            }}
                                                                            href="tel:07 81 95 15 03"
                                                                        >
                                                                            07 81 95 15 03
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr className="sig-site-block">
                                                <td style={{ padding: 0, margin: 0 }}>
                                                    <table
                                                        style={{
                                                            borderCollapse: "collapse",
                                                            borderSpacing: 0,
                                                        }}
                                                        role="presentation"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: 0, margin: 0, width: "12px" }}>
                                                                    <p
                                                                        style={{
                                                                            margin: 0,
                                                                            fontFamily: "arial",
                                                                            lineHeight: "21px",
                                                                            color: "#666666",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        <strong>site</strong>
                                                                    </p>
                                                                </td>
                                                                <td style={{ padding: 0, margin: 0, width: "10px" }}></td>
                                                                <td style={{ padding: 0, margin: 0 }} align="left">
                                                                    <p
                                                                        style={{
                                                                            margin: 0,
                                                                            fontFamily: "arial",
                                                                            lineHeight: "21px",
                                                                            color: "#666666",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        <a
                                                                            style={{
                                                                                textDecoration: "none",
                                                                                color: "#151515",
                                                                                fontSize: "14px",
                                                                            }}
                                                                            href="https://focusetlumiere.fr"
                                                                        >
                                                                            https://focusetlumiere.fr
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr className="sig-email-block">
                                                <td style={{ padding: 0, margin: 0 }}>
                                                    <table
                                                        style={{
                                                            borderCollapse: "collapse",
                                                            borderSpacing: 0,
                                                        }}
                                                        role="presentation"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ padding: 0, margin: 0, width: "12px" }}>
                                                                    <p
                                                                        style={{
                                                                            margin: 0,
                                                                            fontFamily: "arial",
                                                                            lineHeight: "21px",
                                                                            color: "#666666",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        <strong>email</strong>
                                                                    </p>
                                                                </td>
                                                                <td style={{ padding: 0, margin: 0, width: "10px" }}></td>
                                                                <td style={{ padding: 0, margin: 0 }} align="left">
                                                                    <p
                                                                        style={{
                                                                            margin: 0,
                                                                            fontFamily: "arial",
                                                                            lineHeight: "21px",
                                                                            color: "#666666",
                                                                            fontSize: "14px",
                                                                        }}
                                                                    >
                                                                        <a
                                                                            style={{
                                                                                textDecoration: "none",
                                                                                color: "#151515",
                                                                                fontSize: "14px",
                                                                            }}
                                                                            href="mailto:iana&yanis@focusetlumiere.fr"
                                                                        >
                                                                            iana&yanis@focusetlumiere.fr
                                                                        </a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    );
};

export default CommandeEmail;