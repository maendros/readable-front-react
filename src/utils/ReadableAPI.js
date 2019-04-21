const api = "http://localhost:3001/api";

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}
//CATEGORIES
export const fetchCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const fetchPosts = category => {
  const url = category ? `${api}/${category}/posts` : `${api}/posts`;
  fetch(url, { headers })
    .then(res => res.json())
    .then(data => data);
};
//POSTS
export const fetchPost = id => {
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);
};
export const addPost = post => {
  const data = {
    ...post,
    timestamp: Date.now()
  };
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data })
  })
    .then(res => res.json())
    .then(data => data);
};

export const votePost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data);

export const updatePost = post => {
  const data = {
    ...post,
    timestamp: Date.now()
  };
  fetch(`${api}/posts/${post.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data })
  })
    .then(res => res.json())
    .then(data => data);
};

export const deletePost = post =>
  fetch(`${api}/posts/${post.id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => data);

//Comments

export const fetchComments = id =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

//POSTS
export const fetchComment = id =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const addComment = comment => {
  const data = {
    ...comment,
    timestamp: Date.now()
  };
  fetch(`${api}/comments`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data })
  })
    .then(res => res.json())
    .then(data => data);
};

export const voteComment = (id, option) =>
  fetch(`${api}/comments/${id}`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data);

export const updateComment = comment => {
  const data = {
    ...comment,
    timestamp: Date.now()
  };
  fetch(`${api}/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ data })
  })
    .then(res => res.json())
    .then(data => data);
};

export const removeComment = comment =>
  fetch(`${api}/comments/${comment.id}`, {
    method: "DELETE",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => data);
