// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="about-hero">
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
            About <span className="brand-gradient">BizBridge Capital</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Pioneering financial solutions since 2012
          </motion.p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="section-story">
        <motion.div
          className="story-container"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2012, BizBridge Capital began with a simple mission: to bridge the gap 
              between innovative businesses and the capital they need to thrive. What started as 
              a small team of financial experts has grown into a leading financial services firm 
              with global reach.
            </p>
            <p>
              Over the past decade, we've facilitated over $500 million in investments, helping 
              200+ companies achieve their growth objectives while maintaining a 98% client 
              satisfaction rate.
            </p>
          </div>
          <motion.img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Our Team"
            className="story-image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="section-values">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        <div className="values-grid">
          {[
            {
              title: "Integrity",
              desc: "We maintain the highest ethical standards in all our dealings",
              icon: "🤝"
            },
            {
              title: "Innovation",
              desc: "Constantly evolving to provide cutting-edge financial solutions",
              icon: "💡"
            },
            {
              title: "Excellence",
              desc: "Committed to delivering exceptional results for our clients",
              icon: "⭐"
            },
            {
              title: "Partnership",
              desc: "We succeed when our clients succeed",
              icon: "🤝"
            },
            {
              title: "Transparency",
              desc: "Clear communication and honest advice",
              icon: "🔍"
            },
            {
              title: "Impact",
              desc: "Creating meaningful change through strategic investments",
              icon: "🌍"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="value-card"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-leadership">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Meet Our Leadership</h2>
          <div className="leadership-grid">
            {[
              {
                name: "Sarah Johnson",
                title: "CEO & Founder",
                bio: "20+ years in investment banking and venture capital",
                img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Michael Chen",
                title: "Chief Investment Officer",
                bio: "Former hedge fund manager with expertise in emerging markets",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Priya Patel",
                title: "VP of Operations",
                bio: "Specializes in scaling financial operations for growth",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((leader, index) => (
              <motion.div
                key={index}
                className="leader-card"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="leader-image-container">
                  <img src={leader.img} alt={leader.name} />
                  <div className="leader-overlay">
                    <p>{leader.bio}</p>
                  </div>
                </div>
                <h3>{leader.name}</h3>
                <p className="leader-title">{leader.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Milestones Section */}
      <section className="section-milestones">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Our Milestones</h2>
          <div className="timeline">
            {[
              { year: "2012", event: "Company founded in New York" },
              { year: "2014", event: "First $10M fund launched" },
              { year: "2016", event: "Expanded to West Coast operations" },
              { year: "2018", event: "Reached $100M in assets under management" },
              { year: "2020", event: "Global expansion with London office" },
              { year: "2022", event: "$500M capital deployed milestone" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className="milestone"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="milestone-year">{milestone.year}</div>
                <div className="milestone-event">{milestone.event}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-cta">
        <motion.div
          className="cta-container"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to grow with us?</h2>
          <p>Discover how BizBridge Capital can help your business reach new heights</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team
          </motion.button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;