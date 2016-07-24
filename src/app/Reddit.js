import React, {Component} from 'react'
import {View, Text} from 'react-native'

export class Reddit extends Component {
   constructor(props) {
      super(props)
      this.state = {
         loading: 'Loading',
         posts: []
      }
   }

   componentDidMount() {
      fetch('https://www.reddit.com/.json', {
         Accept: 'application/json'
      })
      .then(res => res.json())
      .then(data => this.setState({posts: data.data.children}))


   }

   render() {
    let d = (new Date).getTime() % 1E7

     return (
       <View style={{flex:1, backgroundColor:'brown'}}>
         <Text>reddit</Text>
         <View>

            {this.state.posts.map(post => (
               <View key={++d} style={{
                 borderBottomWidth:2,
               borderBottomColor: 'navy',



            }}>
               <Text style={{color:'orange'}} key={++d}>{post.data.author}</Text>
               </View>
            ))}
         </View>
       </View>

     )
   }
}
