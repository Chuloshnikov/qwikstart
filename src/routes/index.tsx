import { component$, Resource, useResource$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";




interface BlogData {
  id: number,
  user_id: number,
  title: string, 
  body: string
}

/*

export const onGet: RequestHandler<BlogData[]> = async () => {
  console.log('fetching the data');
  //fetching data
  const res = await fetch('https://gorest.co.in/public/v2/posts');
  const data = await res.json();

  return data;
}
*/

export default component$(() => {
  /*
  const blogsData = useEndpoint<BlogData[]>()
  */

  const blogsData = useResource$ <BlogData> (async ({track}) => {
    const res = await fetch('https://gorest.co.in/public/v2/posts');
    const data = await res.json();
    return data;
  })

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
            key={blog.id}
            >
              <soan>{blog.user_id}</soan>
              <h3>{blog.title}</h3>
              <p>{blog.body.slice(0, 50)}...</p>
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
