import * as React from "react";
import PropTypes from "prop-types";
import { startCase } from "lodash";

/**
 * Displays caricature/artifact metadata as JSX
 *
 * @param {Object} metadataMap - Key-value mappings of metadata attributes and
 * their values. The keys will be converted to start case.
 */
const Metadata = (metadataMap) => {

  // Create an array of metadata objects, converting keys to start case
  const metadataItems = []
  Object.keys(metadataMap).forEach((key) => {
    if (metadataMap[key]) {
      metadataItems.push({ key: startCase(key), value: metadataMap[key] })
    }
  })

  return (
    <div className="metadata-container">
      <div className="metadata caricature">
        {
          metadataItems.map((item) => (
            <div><b>{item.key}:</b> {item.value}</div>
          ))
        }
      </div>
    </div>
  )
};

Metadata.propTypes = {
  born: PropTypes.string,
  died: PropTypes.string,
  artist: PropTypes.string
};

export default Metadata;
