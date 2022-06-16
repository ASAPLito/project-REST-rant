const React = require('react');
const Def = require('./default');

const error404 = () => {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/curious-cat.jpg" alt="A cat leaning out and looking at camera" height="500"/>
                    <div>
                        Photo by <a href="https://unsplash.com/@bogdanf">Bogdan Farca</a> on <a href="https://unsplash.com/photos/CEx86maLUSc">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404;