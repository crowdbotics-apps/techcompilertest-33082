import React from "react"
import { Text, View, ImageBackground } from "react-native"
import { useSelector } from "react-redux"
import { styles } from "./styles"

function Article({ route }) {
  const id = route.params?.id
  const article = useSelector(state =>
    state.Articles.articles[id]
  )

  return (
    <View>
      <Text>
        Techcompiler test application
      </Text>
    </View>
  )
}

export default Article
