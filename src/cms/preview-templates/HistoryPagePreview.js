import React from 'react'
import PropTypes from 'prop-types'
import { HistoryPageTemplate } from '../../templates/history-page'

const HistoryPagePreview = ({ entry, getAsset }) => {


  return (
    <HistoryPageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
    />
  )
}

HistoryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default HistoryPagePreview
