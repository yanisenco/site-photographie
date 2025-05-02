import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchEmail = async (
  emailForConfirmation: string,
  subject: string,
  htmlComponent: ReactElement,
  setStatus: (status: string) => void
) => {
  setStatus("Envoi en cours...");

  try {
    const htmlContent = ReactDOMServer.renderToStaticMarkup(htmlComponent);

    const response = await fetch(`${BASE_URL}/api/postEmail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: emailForConfirmation,
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      setStatus("Email envoyé avec succès !");
    } else {
      setStatus(`Erreur : ${result.error}`);
    }
  } catch (error) {
    setStatus("Erreur lors de l'envoi.");
    console.error(error);
  }
};
