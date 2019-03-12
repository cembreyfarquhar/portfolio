const Header = () => (
    <div>
        <h1>Chance Halo Anthony Embrey-Farquhar</h1>
        <h2>Full-Stack Web Development</h2>
        <style jsx>{`
            div {
                grid-column: 1 / 21;
                grid-row: 1 / 7;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                margin-top: 5%;
                align-items: center;
            }
            h1 {
                font-size: 3.6rem;
            }
            h2 {
                font-size: 2.4rem;
            }
        `}</style>
    </div>
)

export default Header;