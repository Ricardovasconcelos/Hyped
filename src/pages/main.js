import React, {Component} from 'react'

import { 
    View, 
    Text,
} from 'react-native'

 class Main extends Component{

    static navigationOptions = {
        headerTitle: 'TecHype',
        headerTitleStyle: { 
            textAlign:"center", 
            flex:1,
        },
      }


    render(){

        return(
            <View>
                <Text>Página Main</Text>
            </View>
        )
    } 

}

export default Main