import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

const Page = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <div className="hero">
      <h1 className="title">About Us</h1>
      <p className="description">We are a friendly group of people</p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        padding-bottom: 12px;
        line-height: 1.15;
        font-size: 37px;
      }
      .title, .description {
        text-align: center;
      }
      .description {
        font-size: 24px;
      }
    `}</style>
  </div>
);
export default Page;