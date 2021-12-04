import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import CaricaturePreview from './preview-templates/CaricaturePreview'
import HistoryPagePreview from './preview-templates/HistoryPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('history', HistoryPagePreview)
CMS.registerPreviewTemplate('caricature', CaricaturePreview)
