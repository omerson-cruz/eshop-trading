import React from 'react'
import {connect} from 'react-redux'
// selectors
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { createStructuredSelector } from "reselect";

import CollectionPreview from '../collection-preview/collection-preview.component'
import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => {

  console.log("collections: ", collections)

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })

export default connect(mapStateToProps) (CollectionsOverview)