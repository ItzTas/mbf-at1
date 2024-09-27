import { Container } from '@mui/material';
import AppBar from './components/app_bar/app_bar';
import PostFeed from './components/post_feed/post_feed';
import FriendList from './components/friend_list/friend_list';
import FriendSuggestion from './components/friend_suggestion/friend_suggestion';

const samplePosts = [
  {
    id: 1,
    title: 'Primeiro Post',
    text: 'Este é o meu primeiro post!',
    date: '2024-09-27',
    author: 'Autor 1',
    image: 'https://placehold.co/400',
    likes: 10,
    shares: 2,
    comments: [
      { text: 'Ótimo post!', author: 'Comentador 1' },
      { text: 'Concordo!', author: 'Comentador 2' },
    ],
  },
];

const sampleFriends = [
  {
    id: 1,
    name: 'Amigo 1',
    commonFriends: 3,
  },
  {
    id: 2,
    name: 'Amigo 2',
    commonFriends: 5,
  },
];

const sampleSuggestions = [
  {
    id: 1,
    name: 'Sugestão 1',
    commonFriend: 'Amigo em comum 1',
  },
  {
    id: 2,
    name: 'Sugestão 2',
    commonFriend: 'Amigo em comum 2',
  },
];

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar />
      <PostFeed posts={samplePosts} />
      <FriendList friends={sampleFriends} />
      <FriendSuggestion suggestions={sampleSuggestions} />
    </Container>
  );
}

export default App;
