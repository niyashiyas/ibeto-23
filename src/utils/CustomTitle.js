import React from 'react'
import { Helmet } from 'react-helmet'
const CustomTitle = ({title}) => {
  return (
    <Helmet>
        <title>{title} | Excel 2023</title>
    </Helmet>
  )
}

export default CustomTitle