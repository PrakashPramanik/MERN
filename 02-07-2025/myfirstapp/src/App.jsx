import "./App.css";
import style from "./Child.module.css";

export function Cart() {
    return (
        <HeroSection/>
    );
}

function HeroSection() {
    return (
        <>
            <h1 className="title">This is a cart</h1>
            <button style={style.button}>item1</button>
            <p>item2</p>
        </>
    );
}

