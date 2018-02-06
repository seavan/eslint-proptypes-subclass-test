const React = require('react');

/* @extends React.Component */
class SafeComponent extends React.Component {
}

class TestEslintRegular extends React.Component {
    render() {
        return (
            <div>{this.props.text}</div>
        );
    }
}

class TestEslint extends SafeComponent {
    render() {
        return (
            <div>{this.props.text}</div>
        );
    }
}

