const React = require('react')
const Def = require('../default')

const show = (data) => {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.pic}></img>
            <div>
                <h2>{data.place.city}, {data.place.state}</h2>
                <h2>{data.place.cuisines}</h2>
                <h3>Rating</h3>
                <p>Currently Unrated</p>
            </div>
            <hr></hr>
            <h3>Comments</h3>
            <p>No comments yet!</p>
            <br></br>
            <div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>     
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">Delete</button>
                </form> 
            </div>
          </main>
        </Def>
    )
}

module.exports = show
