import Card from "../card/Card";
import css from "./CardList.module.css";

const CardList = ({ cardList }: any) => {
    return (
        <ul className={css.wrapList}>
            {cardList &&
                cardList.map((card: any) => (
                    <li key={card.id}>
                        <Card info={card} />
                    </li>
                ))}
        </ul>
    );
};

export default CardList;
