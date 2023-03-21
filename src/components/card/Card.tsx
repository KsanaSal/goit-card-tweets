// import Button from "../button/Button";
import css from "./Card.module.css";
import logo from "../../assets/images/Logo.png";
import thickQuestion from "../../assets/images/thick_question.png";
import { useEffect, useState } from "react";

const Card = ({ info }: any) => {
    const [follow, setFollow] = useState(false);
    const [countFollowers, setCountFollowers] = useState(0);

    useEffect(() => {
        setCountFollowers(info.followers);
    }, [info]);

    const handleClick = (e: any) => {
        setFollow(!follow);
        if (follow) {
            setCountFollowers(countFollowers - 1);
        } else {
            setCountFollowers(countFollowers + 1);
        }
        console.log(e);
    };
    console.log(info);

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
                <img src={info.avatar} alt="Avatar" />
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
                {/* <Button click={info} test={test} /> */}
                <button
                    type="button"
                    className={`${css.button} ${follow ? css.buttonClick : ""}`}
                    onClick={() => handleClick(info.id)}
                >
                    {follow ? "Following" : "Follow"}
                </button>
            </div>
        </div>
    );
};
export default Card;
