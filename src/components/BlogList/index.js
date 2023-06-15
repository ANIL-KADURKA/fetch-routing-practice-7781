import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    BlogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      topic: eachItem.topic,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({
      BlogsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {BlogsList, isLoading} = this.state
    return (
      <div className="blogs-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          BlogsList.map(eachItem => (
            <BlogItem BlogEachItem={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
