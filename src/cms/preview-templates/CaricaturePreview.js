import React from 'react'
import PropTypes from 'prop-types'
import { CaricatureTemplate } from '../../templates/caricature'


const CaricaturePreview = ({ entry, getAsset, widgetFor }) => {
  return (
    <CaricatureTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      image={getAsset(entry.getIn(['data', 'image']))}
    />
  )
}

CaricaturePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CaricaturePreview
