import React from 'react';

const PostsStatusFilter = () => {
    return (
        <div className="btn-group">
            <button  type="button" className="btn btn-info">Todos</button>
            <button type="button" className="btn btn-outline-secondary">Que gustan</button>
        </div>
    )
}

export default PostsStatusFilter;