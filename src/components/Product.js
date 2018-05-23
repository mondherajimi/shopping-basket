import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, quantity, title, promo }) => (
  <div>
    {title} - &#36;{price}{quantity ? ` x ${quantity}` : null} <span style={{ color: "red" }}>{promo ? ">>>Promo 3x2<<<" : ""}</span>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  promo: PropTypes.bool
}

export default Product
