import './Aside.css'

const Aside = () => {
    return (
        <aside class="scroll-nav">
            <ul class="scroll-nav__list">
                <li class="scroll-nav__item">
                    <a href="#start">Start</a>
                </li>
                <li class="scroll-nav__item">
                    <a href="#article-1">01</a>
                </li>
                <li class="scroll-nav__item">
                    <a href="#article-2">02</a>
                </li>
                <li class="scroll-nav__item">
                    <a href="#article-3">03</a>
                </li>
            </ul>
        </aside>
    )
}

export default Aside