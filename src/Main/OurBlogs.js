import React, { useEffect } from 'react'
import DataTable from 'datatables.net-dt';
import 'jquery'
import $ from 'jquery'
import {GetApi} from '../CallApi'
import Book from './Book.module.css'
import { Link } from 'react-router'


const OurBlogs = () => {  
  const Blogs=GetApi("https://healquickbackend-1.onrender.com/blog")
  return (
    <div className={Book.head}>
    <div className={`${Book.BlogBanner}`}>
      <div  className={`${Book.title}`}>
        <h1>OUR <span>BLOGS</span></h1>
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Our Blog</li>
        </ol>
        </nav>
        </div>
    </div>
    <div className={Book.Blogs}>
    <div className="container ">
      <div className='row'>
        <div className='col-lg-8'>
          <table>
          {Blogs.map((blog,index)=>{return (
                    <tr className={`${Book.BlogMain}`}>
                <div key={index} className='row '>
                    <div className='col-lg-4 p-0'><img src={`https://healquickbackend-1.onrender.com/${blog.blog_image}`} alt='Blog_image' className={Book.blogImg} /></div>
                    <div className={`col-lg-8 ${Book.BlogContent}`}>
                        <h1>{blog.blog_title}</h1>
                        <p className='text-break'>{blog.blog_description}</p>
                    </div>
                </div>
                </tr>
                )})}
          </table>
        </div>
        <div className={`col-lg-4 ${Book.BlogSuggest}`}>
          <div>
            <h3><i class="bi bi-search"></i>Recent post</h3>
            <ul className='p-0'>
            {Blogs.map((blog,index)=>{
              return(
                  <li><h3><i class="bi bi-caret-right-fill"></i> {blog.blog_title}</h3></li>
              )
            })}
            </ul>
          </div>
          <div>
            <h3><i class="bi bi-search"></i>Recent post</h3>
            <ul className='p-0'>
            {Blogs.map((blog,index)=>{
              return(
                  <li><h3><i class="bi bi-caret-right-fill"></i> {blog.blog_title}</h3></li>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
      </div>
            
                
            
    </div>
        </div>
        
  )
}

export default OurBlogs
