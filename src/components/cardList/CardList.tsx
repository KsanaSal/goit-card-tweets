import Card from "../card/Card";

const CardList = ({ cardList }: any) => {
    console.log(cardList);
    return (
        <ul>
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
