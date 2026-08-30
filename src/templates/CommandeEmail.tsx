import React from "react";

interface CommandeEmailProps {
    selectedImages: string[];
}

const CommandeEmail: React.FC<CommandeEmailProps> = ({ selectedImages }) => (
    <html lang="fr">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Email Focus et Lumière</title>
        </head>
        <body style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", margin: 0, padding: 0 }}>
            <div style={{ maxWidth: "600px", margin: "20px auto", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px", color: "#333333" }}>
                <h2>Récapitulatif de votre sélection 📸</h2>
                <p>
                    Bonjour, <br />
                    <br />
                    Merci encore pour votre confiance !<br />
                    Voici les photos commandées :
                </p>

                <table role="presentation" width="100%" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse", margin: "20px 0" }}>
                    <tbody>
                        {selectedImages.reduce((rows: string[][], src: string, index: number) => {
                            if (index % 2 === 0) rows.push([]);
                            rows[rows.length - 1].push(src);
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((src, colIndex) => (
                                    <td key={colIndex} style={{ padding: "10px", textAlign: "center", verticalAlign: "top" }}>
                                        <a href={src} target="_blank" rel="noopener noreferrer">
                                            <img
                                                src={src}
                                                alt={`Image ${rowIndex * 2 + colIndex + 1}`}
                                                width="250"
                                                style={{ display: "block", width: "100%", maxWidth: "250px", height: "auto", borderRadius: "5px" }}
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
                    À très vite,<br />
                    L’équipe Focus & Lumière
                </p>

                {/* Signature */}
                <table width="100%" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse", marginTop: "24px" }}>
                    <tbody>
                        <tr>
                            <td>
                                <hr style={{ border: "none", borderTop: "1px solid #151515", width: "100%", margin: "16px 0" }} />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center", fontFamily: "Arial, sans-serif", fontSize: "25px", fontWeight: "bold", color: "#151515", textTransform: "uppercase" }}>
                                Yanis &amp; Iana
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center", fontFamily: "Arial, sans-serif", color: "#666", fontSize: "15px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                                Photographe • Focus &amp; Lumière
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center", paddingTop: "20px" }}>
                                <span style={{ color: "#151515" }}><strong>tel</strong></span>
                                <span style={{ margin: "0 4px" }}>:</span>
                                <a href="tel:07 81 95 15 03" style={{ color: "#151515", textDecoration: "none" }}>07 81 95 15 03</a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center", paddingTop: "8px" }}>
                                <span style={{ color: "#151515" }}><strong>site</strong></span>
                                <span style={{ margin: "0 4px" }}>:</span>
                                <a href="https://focusetlumiere.fr" style={{ color: "#1a73e8", textDecoration: "none" }}>focusetlumiere.fr</a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "center", paddingTop: "8px" }}>
                                <span style={{ color: "#151515" }}><strong>email</strong></span>
                                <span style={{ margin: "0 4px" }}>:</span>
                                <a href="mailto:contact@focusetlumiere.fr" style={{ color: "#1a73e8", textDecoration: "none" }}>contact@focusetlumiere.fr</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    </html>
);

export default CommandeEmail;
