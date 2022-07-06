const React = require('react')
const Def = require('../default.jsx')

const EditForm = ({ place }) => {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" defaultValue={place.pic} />
                    </div>
                </div>
                    <div className='Form-group col-sm-4'>
                        <label htmlFor='founded'>Founded</label>
                        <input className='form-control'
                        id='founded'
                        name='founded'
                        value={data.place.founded}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" defaultValue={place.city} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" defaultValue={place.state} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisines} required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
          </main>
        </Def>
    )
}

module.exports = EditForm
