import React from 'react';
import fleur from '../images/fleur-de-lis.png';

class HomeLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hover: false};
    }

    handleMouse = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render(){
        return(
            <div className="nav-link" onMouseEnter={this.handleMouse} onMouseLeave={this.handleMouse}>
                <div className="fleur-div">{this.state.hover ? <img className="fleur-img" src={fleur} alt="fleur de lis"/> : null}</div>
                <h3>{this.props.name}</h3>
                <div className="fleur-div">{this.state.hover ? <img className="fleur-img" src={fleur} alt="fleur de lis"/> : null}</div>
            </div>
        )
    }

}

export default HomeLink


