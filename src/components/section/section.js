import React from "react"
import "./section.css"

export default function section() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="title">Section Heading</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">section 1</div>
            <div className="col-sm-4">section 2</div>
            <div className="col-sm-4">section 3</div>
          </div>
        </div>
      </section>
    </div>
  )
}
