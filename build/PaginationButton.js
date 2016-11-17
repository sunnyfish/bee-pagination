'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// TODO: This should be `<Pagination.Item>`.

// TODO: This should use `componentClass` like other components.

var propTypes = {
  className: _react2["default"].PropTypes.string,
  eventKey: _react2["default"].PropTypes.any,
  onSelect: _react2["default"].PropTypes.func,
  disabled: _react2["default"].PropTypes.bool,
  active: _react2["default"].PropTypes.bool,
  onClick: _react2["default"].PropTypes.func
};

var defaultProps = {
  active: false,
  disabled: false
};

var PaginationButton = function (_React$Component) {
  _inherits(PaginationButton, _React$Component);

  function PaginationButton(props, context) {
    _classCallCheck(this, PaginationButton);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  PaginationButton.prototype.handleClick = function handleClick(event) {
    var _props = this.props;
    var disabled = _props.disabled;
    var onSelect = _props.onSelect;
    var eventKey = _props.eventKey;


    if (disabled) {
      return;
    }

    if (onSelect) {
      onSelect(eventKey, event);
    }
  };

  PaginationButton.prototype.render = function render() {
    var _props2 = this.props;
    var Component = _props2.componentClass;
    var active = _props2.active;
    var disabled = _props2.disabled;
    var onClick = _props2.onClick;
    var className = _props2.className;
    var style = _props2.style;

    var props = _objectWithoutProperties(_props2, ['componentClass', 'active', 'disabled', 'onClick', 'className', 'style']);

    delete props.onSelect;

    return _react2["default"].createElement(
      'li',
      {
        className: (0, _classnames2["default"])(className, { active: active, disabled: disabled }),
        style: style
      },
      _react2["default"].createElement('a', _extends({ href: '#'
      }, props, {
        disabled: disabled,
        onClick: this.handleClick
      }))
    );
  };

  return PaginationButton;
}(_react2["default"].Component);

PaginationButton.propTypes = propTypes;
PaginationButton.defaultProps = defaultProps;

exports["default"] = PaginationButton;
module.exports = exports['default'];