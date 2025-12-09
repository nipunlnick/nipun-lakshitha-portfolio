"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, X } from "lucide-react";

interface AchievementPopupProps {
  title: string;
  description: string;
  onClose?: () => void;
}

const AchievementPopup: React.FC<AchievementPopupProps> = ({
  title,
  description,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          exit={{ y: 100, opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-neutral-900/90 backdrop-blur-md border border-neon-yellow/30 p-4 rounded-xl shadow-[0_0_30px_rgba(255,255,0,0.15)] flex items-start gap-4 max-w-sm pointer-events-auto relative overflow-hidden group"
          >
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-yellow/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100"></div>

            <div className="bg-neon-yellow/10 p-3 rounded-lg text-neon-yellow">
              <Trophy size={24} />
            </div>

            <div className="flex-1 pr-6">
              <h4 className="text-neon-yellow font-bold text-sm uppercase tracking-wider mb-1">
                Achievement Unlocked
              </h4>
              <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
              <p className="text-neutral-400 text-sm">{description}</p>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-neon-yellow/30"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementPopup;
