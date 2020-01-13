function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // The Calculator component will house all child components
// and will maintain a state with an evaluation initialized 
// to an empty String and a result initialized at 0. 
class Calculator extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "evaluate",








    evaluation => {
      this.setState({
        evaluation: evaluation });

    });_defineProperty(this, "result",

    evaluation => {
      if (String(evaluation).length === 0) {
        evaluation = 0;
      } else {
        if (Number.isInteger(math.eval(evaluation))) {
          evaluation = math.eval(evaluation);
        } else {
          evaluation = Math.round(math.eval(evaluation) * 10000) / 10000;
        }

      }

      this.setState({
        result: evaluation });


    });this.state = { evaluation: '0', result: 0 };} //

  render() {
    return (
      React.createElement("div", { className: "calculator" },
      React.createElement(Display, { id: "display", evaluation: this.state.evaluation, result: this.state.result }),
      React.createElement(Keypad, { setEvaluation: this.evaluate, setResult: this.result })));


  }}


class Display extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "display" },
      React.createElement("div", { className: "display__current" },
      this.props.evaluation),

      React.createElement("div", { className: "display__result" }, this.props.result)));


  }}


class Keypad extends React.Component {
  constructor() {
    super();_defineProperty(this, "handleClick",





    event => {
      let value = event.target.getAttribute("data-value");
      const regex = /(\d*\.\d+\.)|\.{2,}|\+{2,}|\-{2,}|\*{2,}|^[*\/]|^00|[+\-\/*]0{2}/;
      const operatorLast = /[*/\-+]$/;
      if (!regex.test(this.state.evaluation.join("") + value)) {
        if (operatorLast.test(value) && operatorLast.test(this.state.evaluation.join(""))) {
          this.setState({
            evaluation: [this.state.evaluation.join("").replace(operatorLast, value)] });

        }
        if (/^0./.test(this.state.evaluation.join("") + value)) {
          value = ".";
          this.setState({
            evaluation: [] });


        } else {
          this.setState({
            evaluation: [this.state.evaluation.join("") + value] });

          switch (value) {

            case "clear":
              this.setState({ evaluation: ["0"] }, () => {
                this.props.setEvaluation(this.state.evaluation.join(''));
                this.props.setResult(this.state.evaluation.join(''));
              });

              break;

            case "=":
              if (isNaN(this.state.evaluation[this.state.evaluation.length - 1])) {
                break;
              }


              this.props.setResult(this.state.evaluation.join(''));
              this.setState({
                evaluation: [Math.round(math.eval(this.state.evaluation.join("")) * 10000) / 10000] },
              () => {
                this.props.setEvaluation(this.state.evaluation.join(""));

              });
              break;

            case "posNeg":
              let posNeg = [[...this.state.evaluation].join("") * -1];
              this.setState({
                evaluation: posNeg },
              () => {
                this.props.setEvaluation(this.state.evaluation);
              });
              break;

            case "percentage":
              let percentage = [[...this.state.evaluation].join("") / 100];
              this.setState({
                evaluation: percentage },
              () => {
                this.props.setEvaluation(this.state.evaluation);
              });
              break;

            default:

              if (isNaN(value) && isNaN(this.state.evaluation[this.state.evaluation.length - 1])) {
                this.setState({
                  evaluation: [] },
                () => {
                  this.props.setEvaluation(this.state.evaluation);
                });
                break;
              };

              this.setState({ evaluation: [...this.state.evaluation, value] }, () => {
                this.props.setEvaluation(this.state.evaluation.join(""));
              });
              break;}

        }
      }

    });this.state = { evaluation: ["0"] };}

  render() {
    return (
      React.createElement("div", { className: "keypad" },

      React.createElement(Button, {
        onClick: this.handleClick,
        id: "clear",
        name: "C",
        value: "clear",
        color: "keypad__button--blue-gray" }),

      React.createElement(Button, {
        onClick: this.handleClick,
        id: "posNeg",
        name: "+ / -",
        value: "posNeg",
        color: "keypad__button--blue-gray" }),

      React.createElement(Button, {
        onClick: this.handleClick,
        id: "percentage",
        name: "%",
        value: "percentage",
        color: "keypad__button--blue-gray" }),

      React.createElement(Button, {
        onClick: this.handleClick,
        id: "divide",
        name: "/",
        value: "/",
        color: "keypad__button--medium-purple" }),



      React.createElement(Button, { onClick: this.handleClick, id: "seven", name: "7", value: "7" }),
      React.createElement(Button, { onClick: this.handleClick, id: "eight", name: "8", value: "8" }),
      React.createElement(Button, { onClick: this.handleClick, id: "nine", name: "9", value: "9" }),
      React.createElement(Button, {
        onClick: this.handleClick,
        id: "multiply",
        name: "x",
        value: "*",
        color: "keypad__button--medium-purple" }),



      React.createElement(Button, { onClick: this.handleClick, id: "four", name: "4", value: "4" }),
      React.createElement(Button, { onClick: this.handleClick, id: "five", name: "5", value: "5" }),
      React.createElement(Button, { onClick: this.handleClick, id: "six", name: "6", value: "6" }),
      React.createElement(Button, {
        onClick: this.handleClick,
        id: "subtract",
        name: "-",
        value: "-",
        color: "keypad__button--medium-purple" }),



      React.createElement(Button, { onClick: this.handleClick, id: "one", name: "1", value: "1" }),
      React.createElement(Button, { onClick: this.handleClick, id: "two", name: "2", value: "2" }),
      React.createElement(Button, { onClick: this.handleClick, id: "three", name: "3", value: "3" }),
      React.createElement(Button, {
        onClick: this.handleClick,
        id: "add",
        name: "+",
        value: "+",
        color: "keypad__button--medium-purple" }),



      React.createElement(Button, { onClick: this.handleClick, id: "zero", name: "0", value: "0" }),
      React.createElement(Button, { onClick: this.handleClick, id: "decimal", name: ".", value: "." }),
      React.createElement(Button, {
        onClick: this.handleClick,
        id: "equals",
        name: "=",
        value: "=",
        color: "keypad__button--blue-violet" })));



  }}




class Button extends React.Component {

  render() {
    const styles = "keypad__button " + this.props.color;
    return (
      React.createElement("button", {
        className: styles,
        onClick: this.props.onClick,
        "data-value": this.props.value },

      this.props.name));



  }}


ReactDOM.render(React.createElement(Calculator, null), document.getElementById("calculator_app"));