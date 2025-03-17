import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./detail.scss";

const blogPosts = [
    {
        id: 1,
        title: "The Future of AI in Medical Imaging",
        image: require('../../assests/blog2.webp'),
        date: "March 17, 2025",
        content: `Artificial Intelligence (AI) is revolutionizing medical imaging by enhancing 
          the accuracy of X-rays, MRIs, and CT scans. AI-powered algorithms assist radiologists 
          in detecting abnormalities earlier, leading to faster diagnoses and improved patient care. 
          Deep learning models can identify patterns in medical images that might be missed by the 
          human eye. Hospitals are integrating AI systems to streamline workflows and reduce 
          diagnostic errors. These advancements are particularly beneficial in detecting diseases 
          such as cancer, neurological disorders, and cardiovascular conditions. AI also helps 
          reduce workload pressures on medical professionals, allowing them to focus on more 
          complex cases. The future of AI in medical imaging promises increased precision, 
          efficiency, and accessibility in healthcare worldwide.`
      },
      {
        id: 2,
        title: "The Role of Robotics in Modern Surgery",
        image: require('../../assests/Surgery.webp'),
        date: "March 18, 2025",
        content: `Robotic-assisted surgery is transforming the medical field by improving precision, 
          reducing complications, and enabling minimally invasive procedures. AI-powered surgical 
          robots assist doctors in performing complex operations with enhanced accuracy. These 
          robotic systems use real-time imaging and AI-driven decision-making to guide surgeons. 
          Compared to traditional surgery, robotic systems allow for smaller incisions, leading to 
          quicker recovery times for patients. AI in robotic surgery also helps minimize human 
          error, increasing the overall success rate of procedures. Hospitals worldwide are 
          investing in robotic surgical systems for procedures such as cardiac surgery, 
          orthopedic surgery, and neurosurgery. The future of robotic surgery is expected to bring 
          even more automation, improving patient outcomes and surgical efficiency.`
      },
      {
        id: 3,
        title: "AI in Medical Imaging: A Breakthrough in Diagnosis",
        image: require('../../assests/Drug.webp'),
        date: "March 10, 2025",
        content: `Artificial Intelligence (AI) is reshaping the field of medical imaging, enhancing 
          accuracy and speed in diagnosing various diseases. AI-driven image recognition models analyze 
          X-rays, MRIs, and CT scans with precision, assisting radiologists in detecting early signs of 
          life-threatening conditions like cancer, neurological disorders, and cardiovascular diseases. 
          With deep learning algorithms, AI identifies patterns and anomalies that human eyes might miss, 
          improving early diagnosis rates. Additionally, AI helps streamline workflows by prioritizing 
          critical cases, automating image categorization, and reducing manual workload for radiologists. 
          As AI continues to evolve, it will further integrate into healthcare, reducing errors, improving 
          patient outcomes, and increasing efficiency in medical imaging processes.`
      },
      {
        id: 4,
        title: "The Role of Robotics in Modern Surgery",
        image: require('../../assests/patientmonitor.webp'),
        date: "March 5, 2025",
        content: `The integration of robotics in surgery is revolutionizing the medical field, enhancing 
          precision, efficiency, and patient safety. Advanced robotic-assisted surgical systems, such as 
          the Da Vinci Robot, provide surgeons with greater dexterity and control, enabling minimally 
          invasive procedures. These systems incorporate AI and machine learning to analyze real-time data, 
          assist in decision-making, and reduce surgical errors. Robotic technology also enables remote 
          surgeries, allowing top surgeons to operate on patients from distant locations using robotic 
          interfaces. This innovation minimizes recovery times, reduces complications, and enhances surgical 
          accuracy. As research continues, AI-powered robotics will play an even greater role in automating 
          medical procedures, improving healthcare accessibility and outcomes worldwide.`
      },
      {
        id: 5,
        title: "Telemedicine: The Future of Remote Healthcare",
        image: require('../../assests/evolution.webp'),
        date: "March 1, 2025",
        content: `Telemedicine is reshaping the healthcare industry, making medical consultations 
          more accessible. With AI-powered diagnostic tools, patients can receive accurate health 
          assessments remotely. Video consultations allow doctors to diagnose conditions without 
          requiring in-person visits. Wearable technology also plays a role, enabling real-time 
          health monitoring and early detection of medical conditions. Telemedicine reduces 
          hospital congestion and provides healthcare to remote areas where medical facilities 
          are scarce. As technology advances, we can expect even more innovations, such as AI-driven 
          symptom analysis and virtual healthcare assistants, improving patient experiences worldwide.`
      },
      {
        id: 6,
        title: "AI and Mental Health: Revolutionizing Therapy and Diagnosis",
        image: require('../../assests/mentalhealth.webp'),
        date: "March 22, 2025",
        content: `AI is playing a vital role in mental health care by providing new ways to diagnose, monitor, 
          and support individuals dealing with mental health challenges. AI-driven chatbots and virtual therapists 
          are offering accessible, round-the-clock counseling. Machine learning models analyze speech patterns 
          and social media activity to detect early signs of depression, anxiety, and other conditions. AI also 
          helps in personalizing mental health treatments by analyzing a patient’s history and predicting the most 
          effective therapy. With advancements in natural language processing (NLP) and predictive analytics, AI 
          is making mental health care more proactive, affordable, and accessible worldwide.`
      }

];

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <h2>Blog Post Not Found</h2>;
  }

  return (
    <motion.div className="blog-details" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <button className="back-btn" onClick={() => navigate("/Blogs")}>
   Back to Blog
</button>

      <img src={post.image} alt={post.title} className="blog-img" />
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <p className="content">{post.content}</p>
    </motion.div>
  );
};

export default BlogDetails;