import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/+$/, "");

export const fetchEmail = async (
  emailForConfirmation: string,
  subject: string,
  htmlComponent: ReactElement,
  setStatus: (status: { isLoading: boolean; isSuccess: boolean; isError: boolean }) => void
) => {
  setStatus({ isLoading: true, isSuccess: false, isError: false });

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
      setStatus({ isLoading: false, isSuccess: true, isError: false });
    } else {
      setStatus({ isLoading: false, isSuccess: false, isError: true });
      console.error(`Erreur : ${result.error}`);
    }
  } catch (error) {
    setStatus({ isLoading: false, isSuccess: false, isError: true });
    console.error(error);
  }
};
