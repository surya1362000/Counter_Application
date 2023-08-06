import {Component} from 'react'

class UserProfile extends Component {
  render() {
    const {name} = this.props
    return <h1>hi welcome {name}</h1>
  }
}

export default UserProfile
