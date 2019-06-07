import React, { Component } from 'react';

class CatList extends Component {

  render() {
    const { catPics } = this.props;
    const showCats = catPics.map((cat, index) => {
      return <img src={cat.url} alt="Picture of cat" key={index} />
    })

    return (
      <div className="catList">
        {showCats}
      </div>
    );
  };
};

export default CatList;
