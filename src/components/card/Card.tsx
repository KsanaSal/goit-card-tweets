import css from "./Card.module.css";
import logo from "../../assets/images/Logo.png";
import thickQuestion from "../../assets/images/thick_question.png";
import { useEffect, useState } from "react";
import { User } from "../../interface/users.interface";

const Card = ({ info }: { info: User }) => {
    const [follow, setFollow] = useState(false);
    const [countFollowers, setCountFollowers] = useState(0);

    useEffect(() => {
        setCountFollowers(info.followers);
        const getInfo = localStorage.getItem(`${info.user}+${info.id}`);
        if (getInfo) {
            const parsedInfo = JSON.parse(getInfo);
            setFollow(parsedInfo.follow);
            setCountFollowers(parsedInfo.followers);
        }
    }, [info]);

    const handleClick = () => {
        setFollow(!follow);
        let newCountFollowers = 0;
        if (follow) {
            newCountFollowers = countFollowers - 1;
        } else {
            newCountFollowers = countFollowers + 1;
        }
        setCountFollowers(newCountFollowers);
        localStorage.setItem(
            `${info.user}+${info.id}`,
            JSON.stringify({ followers: newCountFollowers, follow: !follow })
        );
    };

    return (
        <div className={css.wrapCard}>
            <img src={logo} alt="Logo" className={css.logo} />
            <img
                src={thickQuestion}
                alt="Think and question"
                className={css.image}
            />
            <div className={css.line}></div>
            <div className={css.wrapPhoto}>
                <div className={css.wrapAvatar}>
                    <img
                        src={require(`../../assets/avatar/${info.avatar}.png`)}
                        alt="Avatar"
                    />
                </div>
            </div>
            <div className={css.wrapText}>
                <p className={css.text}>
                    <span className={css.span}>{info.tweets}</span>
                    tweets
                </p>
                <p className={`${css.text} ${css.followers}`}>
                    <span className={css.span}>
                        {countFollowers.toLocaleString("en-US")}
                    </span>
                    followers
                </p>
                <button
                    type="button"
                    className={`${css.button} ${follow ? css.buttonClick : ""}`}
                    onClick={() => handleClick()}
                >
                    {follow ? "Following" : "Follow"}
                </button>
            </div>
        </div>
    );
};
export default Card;
