import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Skills = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: 'skill1', title: 'Skill 1', subtitle: 'Description 1' },
    { id: 'skill2', title: 'Skill 2', subtitle: 'Description 2' },
    { id: 'skill3', title: 'Skill 3', subtitle: 'Description 3' },
  ];

  return (
    <section className="h-screen">
      <div className="subfont text-5xl">Skills</div>
      <div className="flex flex-wrap justify-around mt-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            className="cursor-pointer p-4 bg-gray-200 m-2 rounded-lg shadow-md"
          >
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div className="bg-white p-8 rounded-lg shadow-lg">
              <motion.h5>
                {items.find((item) => item.id === selectedId).subtitle}
              </motion.h5>
              <motion.h2>
                {items.find((item) => item.id === selectedId).title}
              </motion.h2>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
