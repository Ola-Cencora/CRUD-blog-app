import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dateToStr from '../../../utils/dateToStr';

import { getAllPosts, getPostByCategory } from '../../../redux/postsRedux';

const PostBox = ({ categoryId }) => {

    const posts = useSelector(categoryId ? (state) => getPostByCategory(state, categoryId) : getAllPosts);

    return (
        <Row className="mx-1" xs={1} sm={2} md={3}>
        {posts.map(({ id, title, author, publishedDate, shortDescription, category }) => (
            <Card key={id}>
                <Card.Body>
                    <Card.Title className="mb-3">{title}</Card.Title>
                    <Card.Text className="mb-1"><b>Author: </b>{author}</Card.Text>
                    <Card.Text className="mb-1"><b>Published: </b>{dateToStr(publishedDate)}</Card.Text>
                    <Card.Text><b>Category: </b>{category}</Card.Text>
                    <Card.Text>{shortDescription}</Card.Text>
                    <Link to={`/post/${id}`}>
                        <Button variant="primary">Read more</Button>
                    </Link>                
                </Card.Body>
            </Card>        
        ))}
        </Row>
    );
};

export default PostBox;