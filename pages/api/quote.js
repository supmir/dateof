import { sleep } from "../../lib/site";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { q: query } = req.query;
  console.log("start");
  await sleep(2000);
  console.log("end");
  res.status(200).json({
    query: query,
    start: "Mac 2022",
    end: "May 2022",
    items: [
      { id: 1, name: "Premium Link", price: 5000 },
      { id: 2, name: "3 Months", desc: "3 x RM20", price: 60 },
    ],
    total: 5060,
  });
}
