import React from 'react'

export default function title(props) {
  return (
    <>
        <section class="page-title-section bg-img cover-background" style={{backgroundImage:"url('img/bg/page-title.jpg')"}}>
        <div class="container">

            <div class="title-info">
                <h1>{props.message}</h1></div>
            <div class="breadcrumbs-info">
                <ul class="ps-0">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">{props.message}</a></li>
                </ul>
            </div>

        </div>
        </section>
    </>
  )
}
