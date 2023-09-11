import { component$, Resource } from "@builder.io/qwik";
import type { RequestEvent } from '@builder.io/qwik-city';
import { routeLoader$ } from '@builder.io/qwik-city';

interface Blog {
    id: number,
    user_id: number,
    title: string, 
    body: string
  }


export const useBlogDetails = routeLoader$(async ({params, redirect}:RequestEvent) => {
    console.log(params);
    const res = await fetch(`https://gorest.co.in/public/v2/posts?id=${params.id}`);
    
        const blog = await res.json();
        if (!blog.length) {
            console.log('blog not found, redirect');
            throw redirect(302, '/')
          } else {
        console.log(blog)
        return blog;
      }
  });

export default component$(() => {
    const signal = useBlogDetails<Blog>();
    
    return (
        <div>
            <Resource
            value={signal}
            onPending={() => 
            <div>
                loading...
            </div>}
            onResolved={(blog) => (
                <div
                class=""
                >
                {blog && blog.map(blog => (
                    <div
                    key={blog.id}
                    >
                    <soan>{blog.user_id}</soan>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    </div>
                ))}
                </div>
            )}
            />
        </div>
        )
})