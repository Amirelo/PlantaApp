import { View, Text } from 'react-native'
import React from 'react'
import { CustomInput, CustomView } from '../../../components/atoms'
import { ic_search } from '../../../assets/images'


const ExploreScreen = () => {
  return (
    <CustomView hasFlex bgColor='backgroundColor'>
      <CustomInput placeHolder='Search' source={ic_search} />
    </CustomView>
  )
}

export default ExploreScreen