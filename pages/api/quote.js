import { sleep } from "../../lib/site";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { q: query } = req.query;
  console.log("start");
  await sleep(500);
  console.log("end");
  res.status(200).json({
    query: query,
    start: "Mac 2022",
    end: "May 2022",
    items: [
      { id: 1, name: "Premium", desc: "10 Links", premium: true, price: 5000 },
      { id: 2, name: "Basic", desc: "5 Links", price: 60 },
    ],
    total: 5060,
  });
}
