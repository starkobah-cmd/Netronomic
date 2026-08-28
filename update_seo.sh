sed -i "1i import { useSEO } from '../hooks/useSEO';" src/pages/BlogPost.tsx
sed -i "/const { slug } = useParams();/a \ \ useSEO({ title: post.title + ' - Skyline Digital', description: post.excerpt, image: post.imageUrl, type: 'article' });" src/pages/BlogPost.tsx

sed -i "1i import { useSEO } from '../hooks/useSEO';" src/pages/BlogList.tsx
sed -i "/const \[searchQuery, setSearchQuery\] = useState('');/a \ \ useSEO({ title: 'Blog - Skyline Digital', description: 'Discover the latest trends, strategies, and tutorials from our team of expert designers and developers.' });" src/pages/BlogList.tsx
