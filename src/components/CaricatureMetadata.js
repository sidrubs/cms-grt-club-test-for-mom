import * as React from "react";
import PropTypes from "prop-types";

/**
 * Displays caricature metadata as JSX
 */
const CaricatureMetadata = ({ born, died, artist }) => {

  // Create an array of metadata objects
  const metadataItems = []
  if (born) { metadataItems.push({ key: "Born", value: born }) }
  if (died) { metadataItems.push({ key: "Died", value: died }) }
  if (artist) { metadataItems.push({ key: "Artist", value: artist }) }

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

CaricatureMetadata.propTypes = {
  born: PropTypes.string,
  died: PropTypes.string,
  artist: PropTypes.string
};

export default CaricatureMetadata;
