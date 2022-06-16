const React = require('react');
const Def = require('./default');

const home = () => {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/cake-slice.jpg" alt="A slice of cake" height="500"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@anna_tukhfatullina">Anna Tukhfatullina</a> on <a href="https://unsplash.com/photos/Mzy-OjtCI70">Unsplash</a>
                    </div>
                </div>
                <a href="/places"><button className="btn-primary">Places Page</button></a>
            </main>
        </Def>
    )
}

module.exports = home;