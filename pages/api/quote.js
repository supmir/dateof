// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { q: query } = req.query;

  res.status(200).json({
    query: query,
    items: [
      { id: 1, name: "Premium Link", price: 5000 },
      { id: 2, name: "3 Months", desc: "3 x RM20", price: 60 },
    ],
    total: 5060,
  });
}
