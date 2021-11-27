import React from "react"
import ContentLoader from "react-content-loader"

const ProductItemLoader = (props) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={460}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect width="100%" height="100%" />
  </ContentLoader>
)

export default ProductItemLoader
