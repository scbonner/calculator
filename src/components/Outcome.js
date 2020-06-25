import React, { Component } from 'react';


class Outcome extends Component {

    

    render() {
        let {outcome} = this.props;
        return(
            <div className="outcome">
                <p>{outcome}</p>
            </div>
        )
        ;
    }
}

export default Outcome;