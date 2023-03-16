import { motion, useAnimation, HTMLMotionProps } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HTMLProps, useEffect } from 'react';

interface TBoxAnimate extends HTMLProps<HTMLMotionProps<'div'>> {
  direction?: 'right' | 'left' | 'down' | 'up';
}

const boxVariants = {
  right: {
    hidden: { opacity: 0, x: -50, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 50, y: 0 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
  down: {
    hidden: { opacity: 0, x: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
  up: {
    hidden: { opacity: 0, x: 0, y: -50 },
    visible: { opacity: 1, x: 0, y: 0 },
  },
};

const BoxAnimate: React.FC<TBoxAnimate> = ({
  children,
  direction = `right`,
  style,
  ...props
}) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start(`visible`);
    } else {
      control.start(`hidden`);
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref as any}
      transition={{ duration: 0.75 }}
      variants={boxVariants[direction]}
      initial="hidden"
      viewport={{ once: true }}
      animate={control}
      style={style}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
};

export default BoxAnimate;
