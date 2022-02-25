exports.linkResolver = doc => {
  if (doc.type === "blog_post") {
    return `/blog/${doc.uid}`
  }

  if (doc.type === "sermon_series") {
    return `/sermons/${doc.uid}`
  }
  if (doc.type === "page") {
    return `/${doc.uid}`
  }
  return `/`
}
