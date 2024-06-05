import React from 'react';
import PropTypes from 'prop-types';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

Price.propTypes = {
  price: PropTypes.number.isRequired,
  locale: PropTypes.string,
  currency: PropTypes.string,
};

Price.defaultProps = {
  locale: 'en-US',
  currency: 'MNT',
};
