import { motion } from "framer-motion";

export default function PriceBubble(props) {
  const { name, desc, price, premium } = props.item;

  return (
    <motion.div
      className="mx-auto w-4/5 mt-2"
      variants={{
        hidden: { y: -50, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 100000, velocity: -1 },
          },
        },
      }}
    >
      <div
        className={`flex justify-between rounded-xl p-4  ${
          premium
            ? "bg-brandSecondary hover:ring-4 ring-black"
            : "bg-gray-300 hover:ring-2 ring-black"
        }`}
      >
        <div className="my-auto">
          <div className="text-xl">{name}</div>
          <div className="italic">{desc}</div>
        </div>
        <div className="my-auto">{price}</div>
      </div>
    </motion.div>
  );
}
