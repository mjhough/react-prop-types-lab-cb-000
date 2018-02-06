import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Has a watermark? {this.props.hasWatermark ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    let weight = props[propName];

    if (!weight) {
      return new Error('Weight is required.')
    }

    if (isNaN(weight)) {
      return new Error('Weight must be a number')
    }

    if (weight < 80 || weight > 300) {
      return new Error('Weight must be a number between 80 and 300')
    }
  }
};

export default Product;
