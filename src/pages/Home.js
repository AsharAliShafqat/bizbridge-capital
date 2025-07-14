// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  return (
    
    <motion.div 
      className="page home" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
        <motion.header 
  className="main-header"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="header-container">
    <div className="logo-wrapper">
      {/* Replace with your actual logo URL */}
      <img 
        src="https://i.pinimg.com/736x/8b/ae/2c/8bae2c66fb35a448c0f196382fc2cd26.jpg"
        alt="BizBridge Capital Logo" 
        className="logo" 
      />
      <div className="company-name">
        <span className="biz">Biz</span><span className="bridge">Bridge</span> <span className="capital">Capital</span>
      </div>
    </div>
   
  </div>
</motion.header>
      <div className="hero-section">
        <motion.div 
          className="hero-content"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            initial={{ y: -30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.2 }}
          >
            Welcome to <span className="brand-gradient">BizBridge Capital</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
            className="hero-subtitle"
          >
            Your trusted partner in <span className="highlight">financial growth</span> and business innovation
          </motion.p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>

      <div className="home-images">
        <motion.div
          className="image-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ y: -10 }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/vector-wireframe-illustration-gear-dark-blue-background-mechanical-technology-machine-engineering-symbol-project-vector-332203373.jpg"
            alt="Finance Technology"
          />
          <div className="image-overlay">
            <h3>Smart Investments</h3>
          </div>
        </motion.div>
        
        <motion.div
          className="image-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ y: -10 }}
        >
          <img
            src="https://blog.credgenics.com/wp-content/uploads/2023/07/finance-money-transaction-technology-concept-min-scaled-2-1536x1025.jpg"
            alt="Business Meeting"
          />
          <div className="image-overlay">
            <h3>Strategic Partnerships</h3>
          </div>
        </motion.div>
        
        <motion.div
          className="image-card"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ y: -10 }}
        >
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
            alt="Financial Growth"
          />
          <div className="image-overlay">
            <h3>Sustainable Growth</h3>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="stats-section"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="stat-item">
          <h3>200+</h3>
          <p>Successful Projects</p>
        </div>
        <div className="stat-item">
          <h3>$500M+</h3>
          <p>Capital Deployed</p>
        </div>
        <div className="stat-item">
          <h3>98%</h3>
          <p>Client Satisfaction</p>
        </div>
      </motion.div>

      <motion.div
        className="highlight-card"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <h2>Empowering businesses through smart capital strategies</h2>
        <p className='highlight-text'>
          We combine financial expertise with innovative technology to create customized 
          solutions that drive growth and maximize returns for our clients.
        </p>
      </motion.div>

      <div className="blog-section">
        <motion.div
          className="blog-text"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <h2><span className="accent-text">Our</span> Mission</h2>
          <p>
            At BizBridge Capital, we're committed to bridging the gap between innovative ideas 
            and financial empowerment. Our mission is to support startups and growing businesses 
            with accessible capital, strategic consulting, and long-term partnerships.
          </p>
          <ul className="feature-list">
            <li>Tailored financial solutions</li>
            <li>Data-driven investment strategies</li>
            <li>End-to-end support</li>
            <li>Transparent processes</li>
          </ul>
        </motion.div>
        <motion.div
          className="blog-image-container"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <img
            className="blog-image"
            src="https://hbr.org/resources/images/article_assets/2021/07/Jul21_02_-1247678227.jpg"
            alt="Startup Office"
          />
          <div className="image-badge">
            <span>Since 2012</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;