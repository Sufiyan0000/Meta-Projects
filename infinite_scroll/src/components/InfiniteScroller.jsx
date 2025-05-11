import { useEffect, useState } from "react";

export default function InfiniteScroller() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  async function fetchCardData() {
    setLoading(true);

    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const data = await resp.json();

    setPosts((prev) => [...prev, ...data]);
    setLoading(false);

  }

  useEffect(() => {
    fetchCardData();
  }, [page]);


  async function handleInfiniteScroll(){
    
      try{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight && !loading){
            setPage(prev => prev+1)
        }
      }catch(e){
        console.log('some error : ', e)
    }
  
  }

  useEffect(() => {
      window.addEventListener('scroll',handleInfiniteScroll)

      return () => window.removeEventListener('scroll',handleInfiniteScroll)
  },[])

 {loading && <div>Loading Please wait!</div>}
  return (
    <div className="App">
      <div className="container flex flex-col justify-center items-center">
        <div className="header">
          <h2 className="text-3xl text-neutral-700">Infinite Scroll Project</h2>
        </div>
        <div className="Card-section w-full h-screen">
          {posts !== null ? (
            <div className="card-container flex flex-wrap gap-8 items-center justify-center">
              {posts.map((post) => (
                <div className="card">
                  <Card title={post.title} id={post.id} className="w-60 h-40"/>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <div className="container mt-3 border-2 border-neutral-500 p-3 text-center w-60 h-50">
        <h1 className="bg-neutral-700 text-white w-6 rounded-full">
          {props.id}
        </h1>
        <p className="text-md font-mono text-neutral-600">{props.title}</p>
        <button className="bg-teal-400 px-3 py-1 mt-2 text-white rounded-sm">
          Read More
        </button>
      </div>
    </div>
  );
}
