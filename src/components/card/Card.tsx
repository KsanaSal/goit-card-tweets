import Button from "../button/Button";
import css from "./Card.module.css";
import logo from "../../assets/images/Logo.png";
import thickQuestion from "../../assets/images/thick_question.png";

const Card = () => {
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
                <img src="" alt="" />
            </div>
            <div className={css.wrapText}>
                <p className={css.text}><span></span>tweets</p>
                <p className={`${css.text} ${css.followers}`}>followers</p>
                <Button />
            </div>
        </div>
    );
};
export default Card;
