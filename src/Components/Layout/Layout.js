import React from 'react'
import { Helmet } from "react-helmet";
const Layout = ({ children, title, description, keywords, author }) => {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8" />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <title>GO BEYOND {title}</title>
            </Helmet>

            {children}
        </>
    )
}

Layout.defaultProps = {
    title: "Landing",
    description: "mern stack project",
    keywords: "mern,react,node,mongodb",
    author: "Techinfoyt",
}

export default Layout