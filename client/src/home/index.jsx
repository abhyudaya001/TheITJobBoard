import "./index.css";
import Corp from "../assets/corpo.png";
import CorpBg from "../assets/boybg.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import PostWidget from "../widgets/PostWidget";
import LatestJobs from "../jobs/latest";
const Homepage = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);
  return (
    <>
      <div ref={ref} className="template">
        <div className="temp-left" animate={animation}>
          <div className="t-l-text">
            Stay ahead of the Game with Our Latest
            <span className="text-blue"> IT Job </span>Listings
          </div>
          <div className="description">
            Discover Your Dream Job! Fresh Opportunities Daily, choose the role
            that suits you and apply with ease.
          </div>
        </div>
        <motion.div className="temp-right" animate={animation}>
          <img src={Corp} alt="" className="corp-img" />
          <img src={CorpBg} alt="" className="corp-bg-img" />
        </motion.div>
      </div>
      <div className="trending-jobs">
        <div className="top-jobs-title">Top Jobs</div>
        <LatestJobs />
      </div>
    </>
  );
};
export default Homepage;
