import { User } from "../../interface/users.interface";
import Card from "../card/Card";
import css from "./CardList.module.css";

const CardList = ({ cardList }: { cardList: User[] }) => {
    return (
        <ul className={css.wrapList}>
            {cardList &&
                cardList.map((card) => (
                    <li key={card.id}>
                        <Card info={card} />
                    </li>
                ))}
        </ul>
    );
};

export default CardList;
