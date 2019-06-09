import React, { Component } from 'react';

class CatList extends Component {

    render() {

        const catRender = this.props.catPics.map(cat => <img src={cat.url} />)

        return(
            <div>
                {catRender}
            </div>
        )}
}

export default CatList