var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        })
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },
    
    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('button', {}, 'Increment ' + this.state.counter)
        ),
        React.createElement('div', {onClick: this.decrement},
           React.createElement('button', {}, 'Decrement ' + this.state.counter)
        )
    }
});


var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));