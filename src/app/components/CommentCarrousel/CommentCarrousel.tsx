import CommentCard from "../CommentCard/CommentCard";

export default function CommentCarrousel() {
  return (
    <div className="snap-x flex">
      <div className="snap-center p-5">
        <CommentCard
          name={"Lauriane.L"}
          comment={
            "Les photos de notre mariage étaient tout simplement incroyables. Ianaphotographie a su capturer chaque émotion et chaque détail avec une précision exceptionnelle."
          }
        />
      </div>
      <div className="snap-center p-5">
        <CommentCard
          name={"Thomas.L"}
          comment={
            "J'ai fait une séance photo avec mon chien et je suis ravi du résultat. Les images sont magnifiques et reflètent parfaitement notre complicité"
          }
        />
      </div>
      <div className="snap-center p-5">
        <CommentCard
          name={"Zoé.K"}
          comment={
            "Les photos de sport prises par Ianaphotographie sont dynamiques et saisissantes. Chaque cliché raconte une histoire et transmet l'essence de l'action."
          }
        />
      </div>
    </div>
  );
}
