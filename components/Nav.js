import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Nav() {
  const handleClick = () => {
    document.querySelector('.menu-icon').classList.toggle('change');
    const header = document.querySelector('.header-right');
    const change = document.querySelector('.change');
    const clearFix = document.querySelector('.clearfix');

    if (change) {
      header.style.display = 'inline-block';
      header.style.fontSize = "10px";
    } else {
      header.style.display = 'none';
    }
  };

  return (
    <div className="navbar">
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />

        <title>JS.social | The exclusive Javascript community</title>

        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="side-bar" />
      <header>
        <div className="header-sec">
          <div className="container">
            <div className="header-sec-in">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="images/logo.png"
                      alt="logo"
                      width="156"
                      height="75"
                    />
                  </a>
                </Link>
              </div>
              <button type="button" className="menu-icon" onClick={handleClick}>
                <span className="line-1" />
                <span className="line-2" />
                <span className="line-3" />
              </button>
              <div className="header-right">
                <nav className="nav">
                  <ul className="clearfix">
                    <li>
                      <Link href="/about">
                        <a> About </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/mentors">
                        <a> Mentors </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs">
                        <a> Programs </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/membership">
                        <a> Membership </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="login">
                  <a href="https://discord.gg/yDjJhmx" target="_blank">
                    Login
                  </a>
                </div>
                <div className="clear" />
              </div>
              <div className="clear" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
