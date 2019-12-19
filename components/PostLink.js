import React from 'react'
import Link from 'next/link'

const PostLink = (props) => (
    <Link as={`/p/${props.show.id}`} href={`/post?id=${props.show.id}`}>
        <a>{props.show.name}</a>
    </Link>
)

export default PostLink