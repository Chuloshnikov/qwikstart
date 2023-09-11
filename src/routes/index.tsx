import { component$, Resource, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';




interface BlogData {
  id: number,
  user_id: number,
  title: string, 
  body: string
}



export const useBlogsData = routeLoader$(async (requestEvent) => {
  console.log('fetching the data');
  //fetching data
  const res = await fetch('https://gorest.co.in/public/v2/posts');

  
  const data = await res.json();

  return data;
});



export default component$(() => {

  const blogsData = useBlogsData<BlogData>();
  

  return (
    <div>
      <Resource
      value={blogsData}
      onPending={() => 
      <div>
        loading...
      </div>}
      onResolved={(blogs) => (
        <div
        class=""
        >
          {blogs && blogs.map(blog => (
            <div
            class="p-4 m-4 border-2 border-red-800 flex flex-col gap-2"
            key={blog.id}
            >
              <soan>{blog.user_id}</soan>
              <h3>{blog.title}</h3>
              <p>{blog.body.slice(0, 50)}...</p>
              <div>
                <Link 
                href={`/blog/${blog.id}`}
                class="px-4 py-2 bg-red-800 text-white"
                >
                  More info
                </Link>
              </div>
            
            </div>
          ))}
        </div>
      )}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Some things for first look",
  meta: [
    {
      name: "description",
      content: "Is it that fast?",
    },
  ],
  links: []
};
