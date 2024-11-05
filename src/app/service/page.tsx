import Gallery from "../components/Gallery/Gallery";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import SectionTitle from "../components/SectionTitle/SectionTitle";

export default function Page() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      alt: "",
    },
    {
      src: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      alt: "",
    },
  ];
  return (
    <PageTemplate>
      <div className="mt-20">
        <SectionTitle idSection="portrait-studio" title="Portrait Studio" />
      </div>

      <p className="mb-10">
        {" "}
        Nous proposons des services de photographie en studio pour capturer des
        portraits uniques de votre animal, de vous-même, ou en duo avec votre
        compagnon à quatre pattes. Que ce soit pour capturer la personnalité
        d’un individu, la beauté de votre animal, ou des moments de complicité,
        nos séances sont conçues pour créer des images authentiques et
        mémorables.
      </p>
      <Gallery images={images} />
    </PageTemplate>
  );
}
