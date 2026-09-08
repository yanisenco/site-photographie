import React from "react";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  details: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({
  name,
  email,
  phone,
  details,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        color: "#333",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <table
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <thead>
          <tr>
            <td
              style={{
                backgroundColor: "#1e3d59",
                color: "#ffffff",
                padding: "20px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              Nouvelle demande de contact
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "20px" }}>
              <p>Bonjour,</p>
              <p>Vous avez reçu un nouveau message de contact via le site :</p>
              <p><strong>Nom :</strong> {name}</p>
              <p><strong>Email :</strong> {email}</p>
              <p><strong>Téléphone :</strong> {phone}</p>
              <p><strong>Message :</strong></p>
              <p style={{ whiteSpace: "pre-wrap" }}>{details}</p>

              <p style={{ marginTop: "30px" }}>
                Veuillez répondre à cette demande dès que possible.
              </p>
            </td>
          </tr>
          <tr>
            <td
              style={{
                backgroundColor: "#f1f1f1",
                textAlign: "center",
                padding: "10px",
                fontSize: "12px",
                color: "#888",
              }}
            >
              &copy; {new Date().getFullYear()} Studio Photo. Tous droits réservés.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactEmail;
