import React, { useEffect, useState } from "react";

const articles = [
  {
    title: "A message to our customers",
    upvotes: 12,
    date: "2020-01-24",
  },
  {
    title: "Alphabet earnings",
    upvotes: 22,
    date: "2019-11-23",
  },
  {
    title: "Artificial Mountains",
    upvotes: 2,
    date: "2019-11-22",
  },
  {
    title: "Scaling to 100k Users",
    upvotes: 72,
    date: "2019-01-21",
  },
  {
    title: "the Emu War",
    upvotes: 24,
    date: "2019-10-21",
  },
  {
    title: "What's SAP",
    upvotes: 1,
    date: "2019-11-21",
  },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

function Articles() {
  //1 for sort by date 2 for sort by votes  
  const [sortBy,setSortBy] = useState(1)
  const [sorted,setSorted] = useState([]);
  // Sort the ARTICLES array in descending order by date

  useEffect(() => {
    if(sortBy == 1){
        const sortedArticles = articles.slice().sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });
        setSorted(sortedArticles);
    }
    else{
        const sortedArticles = articles.slice().sort((a, b) => {
            const voteA = a.upvotes;
            const voteB = b.upvotes;
            return voteB - voteA;
        });
        setSorted(sortedArticles);
    }
  },[sortBy])

  return (
    <div className="container-fluid bg-blue p-2">
      <h1>Articles Sorted by Date (Descending)
      <button className="btn btn-info" onClick={() => setSortBy(1)}>Sort by date</button> {" "}
      <button className="btn btn-warning" onClick={() => setSortBy(2)}>Sort by votes</button>
      </h1>
      <div className="row">
        {sorted && sorted.map((article, index) => (
          <div className="col-md-3" key={index}>
            <div className="card">
                <div className="card-header">
                 <h1 className="card-title">{article.title}</h1>
                </div>
                <div className="card-body">
                 <p>Upvotes: {article.upvotes}</p>
                 <p>Date: {article.date}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;
