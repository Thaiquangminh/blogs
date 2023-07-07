export default {
    addBlog(state, blogData) {
        state.blogs.unshift({
            title: blogData.blogTitle,
            blogCoverPhoto: blogData.fileUrl,
            blogHTML: blogData.blogHTML,
            id: blogData.id,
            blogDate: blogData.blogDate
        })
    }
}
