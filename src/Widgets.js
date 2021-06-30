import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Adyan make app", "Top news - many readers")}
      {newsArticle("Coronavirus is suck", "Top news - a lot of readers")}
      {newsArticle("BREAKING NEWS not so important", "Ok news - no readers")}
      {newsArticle("Lorem Ipsum I forgot the rest", "Top news - 1 reader")}
      {newsArticle("Quick fox jumped over", "bad news - too many readers")}
      {newsArticle("The lazy dog", "news - readers")}

    </div>
  ) 
}

export default Widgets
