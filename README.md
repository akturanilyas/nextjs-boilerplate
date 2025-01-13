TODOS

- [x] Implement `i18n`
- [x] Add `@tanstack/react-query` for data fetching
- [x] Tailwind CSS
- [ ] Add core components
- [ ] Style components
- [ ] Implement react-scan
- [ ] React Buddy https://github.com/JetBrains/react-buddy-examples/blob/master/next13/src/pages/_app.tsx
- [ ] Axios
- [ ] `@tanstack/react-query` query handle

https://medium.com/@cristafovici.den/master-data-fetching-with-axios-and-react-query-in-2024-part-2-0d0100b1b40b

```tsx
import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from './ToastContext'; // Daha önce oluşturduğumuz toast hook'u

// API call
const createPost = async (postData) => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Post creation failed');
  }

  return response.json();
};

const PostForm = () => {
  const { showToast } = useToast();
  const queryClient = useQueryClient();  // queryClient'e erişim
  const mutation = useMutation(createPost, {
    onSuccess: (data) => {
      // Yeni post başarıyla oluşturulunca yapılacak işlemler
      showToast('Post created successfully!', 'success');

      // Burada global state'deki 'posts' query'sini güncelliyoruz
      // 'posts' query'sinin cache'ini güncelliyoruz ve yeni postu ekliyoruz
      queryClient.setQueryData(['posts'], (oldData) => {
        // oldData eski cache verisi
        return {
          ...oldData,
          data: [...oldData.data, data], // yeni postu listeye ekliyoruz
        };
      });
    },
    onError: (error) => {
      showToast(`Error: ${error.message}`, 'error');
    },
    onSettled: () => {
      // İsteğin tamamlanmasından sonra yapılacak işlemler
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = { title: 'New Post', content: 'This is a new post.' };
    mutation.mutate(postData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;

```
