import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Sidebar } from '../containers'
import { Article } from './'
const Categories = () => {
  return (
    <div className="row">
      <div className="col-lg-3">
        <Sidebar/>
      </div>
      <div className="col-lg-9">
        <Route path="/categories/:CategoriesID" component={Article} />
        <Redirect from="/categories" to="/categories/1" />
      </div>
    </div>
  )
}

export default Categories
