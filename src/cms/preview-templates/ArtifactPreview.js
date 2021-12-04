import React from 'react'
import PropTypes from 'prop-types'
import { ArtifactTemplate } from '../../templates/artifact'


const ArtifactPreview = ({ entry, getAsset, widgetFor }) => {
  return (
    <ArtifactTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      image={getAsset(entry.getIn(['data', 'image']))}
    />
  )
}

ArtifactPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ArtifactPreview
