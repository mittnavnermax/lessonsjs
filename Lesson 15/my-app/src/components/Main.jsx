import './Main.css'

const Main = () => {
    return (
        <div className='container'>
            <main className="be-prepared">
                <div className="be-prepared__box">
                    <p className="heading-start-text">
                        A Hiking guide
                    </p>
                    <h1>
                        Be prepared for the Mountains and beyond!
                    </h1>
                    <a className="be-prepared__link" href="#article-1">
                        <span>
                            scroll down
                        </span> 
                        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </main>
        </div>
    )

}

export default Main