import React, { useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  useEffect(()=>{
    document.title="Blog | Disney dolls"
},[])
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/1mskBW4/home3bg.png")`,
      }}
      className="background-blog px-5 mb-5 rounded-[20px]  border-[2px] border-red-300  my-5 shadow"
    >
      <div className="  my-5">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="card bg-base-100 ">
              <div className="card-body">
                <h2 className="card-title">
                  What is an access token and refresh token? How do they work
                  and where should we store them on the client-side?
                </h2>
                <p>
                  Access Token: An access token is a credential that is used to
                  access protected resources or perform certain actions on
                  behalf of an authenticated user.The access token is included
                  in each request to the server's protected resources to prove
                  the user's identity and permissions. It contains information
                  such as the user's identity and the granted permissions or
                  scopes.
                </p>
                <p className="divider"></p>
                <p>
                  Refresh Token: A refresh token is a long-lived credential that
                  is used to obtain a new access token when the current one
                  expires. Unlike access tokens, refresh tokens are not meant to
                  be included with each request to access protected resources.
                  Instead, they are securely stored on the client-side,
                  typically within a secure session or a token vault. When the
                  access token expires, the client can use the refresh token to
                  request a new access token from the authentication server
                  without requiring the user to reauthenticate.
                </p>
              </div>
            </div>
            <div className="card bg-base-100 slider-border">
              <div className="card-body">
                <h2 className="card-title">
                Compare SQL and NoSQL databases?
                </h2>
                <h3 className='py-2'>SQL</h3>
                        <ul className='space-y-2'>
                            <li>
                                1. It's databases follow a structured data model with predefined schemas. They use tables to organize and store data, where each table has a fixed set of columns and rows. Relationships between tables are established using foreign keys.
                            </li>
                            <li>
                                2. It's databases traditionally scale vertically by adding more resources to a single server. This approach has limitations in terms of scalability and handling large amounts of data and traffic.
                            </li>
                        </ul>
                        <p className="divider"></p>
                        <h3 className='py-2'>NoSQL</h3>
                        <ul className='space-y-2'>
                            <li>
                                1.  It's databases offer a flexible and dynamic data model. They are schema-less and can store unstructured, semi-structured, or structured data. NoSQL databases use various data models, such as key-value, document, columnar, or graph, to store and retrieve data.
                            </li>
                            <li>
                                2. It's databases are designed for horizontal scalability. They can distribute data across multiple servers and handle high volumes of data and traffic by adding more nodes to the database cluster.
                            </li>
                        </ul>
              </div>
            </div>
            <div className="card bg-base-100 slider-border">
              <div className="card-body">
                <h2 className="card-title">
                What is express js?<br /> What is Nest JS?
                </h2>
                Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware management, and rendering responses.
                        <p className='divider'></p>
                        <p className='py-2'>
                            NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It leverages TypeScript as its primary language, which adds static typing and enhanced tooling capabilities to JavaScript. NestJS follows the modular architecture pattern and is heavily inspired by Angular, a popular front-end framework. It provides a powerful set of features such as dependency injection, declarative routing, middleware, authentication, database integration, and more. NestJS aims to improve developer productivity and maintainability while enabling the creation of robust and scalable back-end applications.
                        </p>
              </div>
            </div>
            <div className="card bg-base-100 slider-border">
              <div className="card-body">
                <h2 className="card-title">
                What is MongoDB aggregate and how does it work ?
                </h2>
                <p>
                In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform documents within a collection to retrieve aggregated results based on specified criteria.
                        </p>
                        <p className='divider'></p>
                        <h3 className='py-2'>
                            Here's a high-level overview of how the aggregate method works:
                        </h3>
                        <ul className='space-y-2'>
                            <li>
                                1. Match Stage: This optional stage filters the documents in the collection based on specified criteria using the $match operator. Only the documents that match the criteria are passed to the next stage.
                            </li>
                            <li>
                                2. Project Stage: The $project stage allows you to shape the output documents by specifying which fields to include or exclude. It also supports computed fields and transformations using various operators.
                            </li>
                            <li>
                                3. Group Stage: The $group stage groups documents together based on a specified key and performs aggregation operations on the grouped data. Aggregation operators like $sum, $avg, $min, $max, and others can be used to calculate aggregate values within each group.
                            </li>
                        </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
