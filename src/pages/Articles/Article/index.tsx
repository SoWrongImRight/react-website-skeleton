import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-Markdown';
import { useQuery } from 'react-query';

// Import Components
import GoBack from './GoBack';
import Spinner from '../../../components/Spinner';

async function getPostById(id: string) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response.json();
}

function Article() {
    const {id} = useParams();

    const { data, isLoading, isError, error } = useQuery(["post", id], () => getPostById(id!))
    if(isLoading) return <Spinner />
    if(isError) return <div>Error</div>

    return ( 
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <GoBack />
        </div>
     );
}

export default Article;