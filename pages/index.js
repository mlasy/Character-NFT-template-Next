import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>landing-template</title>
          <meta property="og:title" content="landing-template" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar">
          <span className="home-logo">Firmen GPT</span>
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-nav"
            >
              <button className="home-button button-clean button">Über</button>
              <button className="home-button1 button-clean button">
                Projekt
              </button>
              <button className="home-button2 button-clean button">
                Preise
              </button>
              <button className="home-button3 button-clean button">Team</button>
              <button className="home-button4 button-clean button">Blog</button>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <div className="home-socials"></div>
            <button className="button">Infogespräch vereinbaren</button>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <button className="button home-button5">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </button>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav1"
            >
              <div className="home-container1">
                <span className="home-logo1">Character</span>
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav2"
              >
                <span className="home-text">About</span>
                <span className="home-text01">Features</span>
                <span className="home-text02">Pricing</span>
                <span className="home-text03">Team</span>
                <span className="home-text04">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <section className="home-hero">
          <div className="home-heading">
            <h1 className="home-header">
              <span>Weg frei zum Firmen GPT</span>
              <br></br>
            </h1>
            <p className="home-caption">
              Ein GPT mit Spezialisten-Wissen Ihrer besten Mitarbeiter
            </p>
          </div>
          <div className="home-buttons">
            <button className="button">Ausprobieren</button>
            <button className="home-learn button-clean button">
              Mehr dazu
            </button>
          </div>
        </section>
        <section className="home-description">
          <img
            alt="image"
            src="/hero-divider-1500w.png"
            className="home-divider-image"
          />
          <div className="home-container3">
            <div className="home-description01">
              <div className="home-content">
                <p className="home-paragraph">
                  Wir helfen Ihnen dabei, ein GPT mit Firmenwissen zu erstellen
                  und intern auszurollen
                </p>
              </div>
              <div className="home-links"></div>
            </div>
          </div>
        </section>
        <section className="home-cards">
          <div className="home-row">
            <div className="home-card">
              <div className="home-main">
                <div className="home-content01">
                  <h2 className="home-header01">Evaluation</h2>
                  <p className="home-description02">
                    <br></br>
                    <span>
                      {' '}
                      Durch eine sorgfältige Evaluierung Ihrer spezifischen
                      Bedürfnisse und Anforderungen ermitteln wir, wie ein
                      maßgeschneidertes GPT Ihre Geschäftsprozesse optimieren,
                      Effizienz steigern und innovative Lösungen für Ihre
                      Herausforderungen bieten kann.
                    </span>
                  </p>
                </div>
                <button className="home-learn1 button">
                  <span className="home-text09">Mehr</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image"
                  />
                </button>
              </div>
            </div>
            <div className="home-card01">
              <div className="home-main1">
                <div className="home-content02">
                  <h2 className="home-header02">Entwicklung &amp; Rollout</h2>
                  <p className="home-description03">
                    <br></br>
                    <span>
                      Wir entwickeln für Sie ein mit Unternehmensdaten
                      gefüttertes GPT-Modell - leicht zugänglich für alle
                      Mitarbeitende im Unternehmen
                    </span>
                  </p>
                </div>
                <button className="home-learn2 button">
                  <span className="home-text12">Mehr</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image01"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="home-card02">
            <div className="home-container4">
              <div className="home-avatar">
                <div className="home-container5">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M592 448h-16v-192c0-105.87-86.13-192-192-192h-128c-105.87 0-192 86.13-192 192v192h-16c-26.4 0-48 21.6-48 48v480c0 26.4 21.6 48 48 48h544c26.4 0 48-21.6 48-48v-480c0-26.4-21.6-48-48-48zM192 256c0-35.29 28.71-64 64-64h128c35.29 0 64 28.71 64 64v192h-256v-192z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-row1">
              <div className="home-main2">
                <div className="home-content03">
                  <h2 className="home-header03">
                    <span>DSGVO-Compliant</span>
                    <br></br>
                    <br></br>
                  </h2>
                  <p className="home-description04">
                    <span>
                      Unser Ansatz steht im Einklang mit den höchsten
                      Datenschutzstandards der DSGVO.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Wir legen großen Wert auf den Schutz Ihrer Daten und
                      implementieren fortgeschrittene Sicherheitsmaßnahmen wie
                      Datenverschlüsselung und Pseudonymisierung, um die
                      Privatsphäre zu wahren und Risiken zu minimieren.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
                <button className="home-learn3 button">
                  <span className="home-text20">Mehr dazu</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image02"
                  />
                </button>
              </div>
              <img
                alt="image"
                src="/unsplash-image-600h.jpeg"
                className="home-image03"
              />
            </div>
          </div>
        </section>
        <section className="home-collection">
          <div className="home-content04">
            <span className="home-caption01">collection</span>
            <div className="home-heading01">
              <h2 className="home-header04">All time best collections</h2>
              <p className="home-header05">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
          <div className="home-main3">
            <div className="home-card03">
              <div className="home-image04">
                <img
                  alt="image"
                  src="/Characters/character-1.svg"
                  className="home-image05"
                />
              </div>
              <div className="home-content05">
                <span className="home-caption02">Character #1</span>
                <h3 className="home-title">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card04">
              <div className="home-image06">
                <img
                  alt="image"
                  src="/Characters/character-2.svg"
                  className="home-image07"
                />
              </div>
              <div className="home-content06">
                <span className="home-caption03">Character #2</span>
                <h3 className="home-title1">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card05">
              <div className="home-image08">
                <img
                  alt="image"
                  src="/Characters/character-3.svg"
                  className="home-image09"
                />
              </div>
              <div className="home-content07">
                <span className="home-caption04">Character #3</span>
                <h3 className="home-title2">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card06">
              <div className="home-image10">
                <img
                  alt="image"
                  src="/Characters/character-4.svg"
                  className="home-image11"
                />
              </div>
              <div className="home-content08">
                <span className="home-caption05">
                  <span>Character #4</span>
                  <br></br>
                </span>
                <h3 className="home-title3">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card07">
              <div className="home-image12">
                <img
                  alt="image"
                  src="/Characters/character-5.svg"
                  className="home-image13"
                />
              </div>
              <div className="home-content09">
                <span className="home-caption06">Character #5</span>
                <h3 className="home-title4">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card08">
              <div className="home-image14">
                <img
                  alt="image"
                  src="/Characters/character-6.svg"
                  className="home-image15"
                />
              </div>
              <div className="home-content10">
                <span className="home-caption07">Character #6</span>
                <h3 className="home-title5">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card09">
              <div className="home-image16">
                <img
                  alt="image"
                  src="/Characters/character-7.svg"
                  className="home-image17"
                />
              </div>
              <div className="home-content11">
                <span className="home-caption08">Character #7</span>
                <h3 className="home-title6">0.05 ETH</h3>
              </div>
            </div>
            <div className="home-card10">
              <div className="home-image18">
                <img
                  alt="image"
                  src="/Characters/character-8.svg"
                  className="home-image19"
                />
              </div>
              <div className="home-content12">
                <span className="home-caption09">Character #8</span>
                <h3 className="home-title7">0.05 ETH</h3>
              </div>
            </div>
          </div>
          <button className="home-view2 button-link button">View all</button>
        </section>
        <section className="home-project">
          <div className="home-understand">
            <div className="home-content13">
              <span className="home-caption10">Project</span>
              <div className="home-heading02">
                <h2 className="home-header06">Understand the project</h2>
                <p className="home-header07">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button className="home-view3 button-link button">
                <span>Learn More</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image20"
                />
              </button>
            </div>
            <img alt="image" src="/group%202415.svg" className="home-image21" />
          </div>
          <div className="home-mining">
            <img alt="image" src="/group%202422.svg" className="home-image22" />
            <div className="home-content14">
              <span className="home-caption11">Project</span>
              <div className="home-heading03">
                <h2 className="home-header08">How the minting works</h2>
                <p className="home-header09">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </span>
                  <br></br>
                </p>
              </div>
              <button className="home-view4 button-link button">
                <span>Learn More</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image23"
                />
              </button>
            </div>
          </div>
        </section>
        <section className="home-roadmap">
          <div className="home-heading04">
            <h2 className="home-header10">Roadmap</h2>
            <p className="home-header11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="home-list">
            <div className="home-step">
              <span className="home-caption12">01</span>
              <div className="home-heading05">
                <h2 className="home-header12">Project Launch</h2>
                <p className="home-header13">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <button className="home-button6 button">View on Opensea</button>
            </div>
            <div className="home-step1">
              <span className="home-caption13">02</span>
              <div className="home-heading06">
                <h2 className="home-header14">Metadata and Character</h2>
                <p className="home-header15">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-caption14">03</span>
              <div className="home-heading07">
                <h2 className="home-header16">Get Physical</h2>
                <p className="home-header17">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                  <br></br>
                </p>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-caption15">04</span>
              <div className="home-heading08">
                <h2 className="home-header18">Private club community</h2>
                <p className="home-header19">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="home-benefits">
                  <div className="home-item">
                    <img
                      alt="image"
                      src="/Icons/people.svg"
                      className="home-image24"
                    />
                    <p className="home-header20">Consectetur adipiscing elit</p>
                  </div>
                  <div className="home-item1">
                    <img
                      alt="image"
                      src="/Icons/paper.svg"
                      className="home-image25"
                    />
                    <p className="home-header21">Consectetur adipiscing elit</p>
                  </div>
                  <div className="home-item2">
                    <img
                      alt="image"
                      src="/Icons/checklist.svg"
                      className="home-image26"
                    />
                    <p className="home-header22">Consectetur adipiscing elit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-join-us">
          <div className="home-content15">
            <div className="home-main4">
              <div className="home-heading09">
                <h2 className="home-header23">Create your character now</h2>
                <p className="home-caption16">
                  A character custom collection is joining the NFT space on
                  Opensea.
                </p>
              </div>
              <button className="home-view5 button">View on Opensea</button>
            </div>
            <img alt="image" src="/group%202273.svg" className="home-image27" />
          </div>
        </section>
        <section className="home-faq">
          <h2 className="home-header24">We have all the answers</h2>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="home-element accordion"
            >
              <div className="home-content16">
                <span className="home-header25">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description05"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon12"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon14"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element1 accordion"
            >
              <div className="home-content17">
                <span className="home-header26">
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description06"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container1">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon16"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon18"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element2 accordion"
            >
              <div className="home-content18">
                <span className="home-header27">
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description07"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container2">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon20"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon22"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element3 accordion"
            >
              <div className="home-content19">
                <span className="home-header28">
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description08"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon24"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon26"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="home-element4 accordion"
            >
              <div className="home-content20">
                <span className="home-header29">
                  Incididunt ut labore et dolore?
                </span>
                <span
                  data-role="accordion-content"
                  className="home-description09"
                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="home-icon-container4">
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-closed"
                  className="home-icon28"
                >
                  <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
                <svg
                  viewBox="0 0 1024 1024"
                  data-role="accordion-icon-open"
                  className="home-icon30"
                >
                  <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="home-get-yours">
          <div className="home-row2">
            <div className="home-column">
              <div className="home-card11">
                <img
                  alt="image"
                  src="/Characters/character-9.svg"
                  className="home-image28"
                />
              </div>
            </div>
            <div className="home-column1">
              <div className="home-card12">
                <img
                  alt="image"
                  src="/Characters/character-10.svg"
                  className="home-image29"
                />
              </div>
            </div>
          </div>
          <div className="home-column2">
            <div className="home-card13">
              <div className="home-content21">
                <h2 className="home-header30">Get yours now</h2>
                <p className="home-description10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliquat
                  enim ad minim veniam.
                </p>
              </div>
              <button className="home-button7 button">View on Opensea</button>
            </div>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-main5">
            <div className="home-branding">
              <div className="home-heading10">
                <h2 className="home-logo2">Character</h2>
                <p className="home-caption17">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
              <div className="home-socials1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-twitter social button"
                >
                  <img
                    alt="image"
                    src="/Icons/twitter.svg"
                    className="home-image30"
                  />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-discord social button"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="home-image31"
                  />
                </a>
              </div>
            </div>
            <div className="home-links1">
              <div className="home-list1">
                <h3 className="home-heading11">Site</h3>
                <div className="home-items">
                  <button className="home-link button-clean button">
                    About
                  </button>
                  <button className="home-link1 button-clean button">
                    Collection
                  </button>
                  <button className="home-link2 button-clean button">
                    Roadmap
                  </button>
                  <button className="home-link3 button-clean button">
                    Features
                  </button>
                </div>
              </div>
              <div className="home-list2">
                <h3 className="home-heading12">Company</h3>
                <div className="home-items1">
                  <button className="home-link4 button-clean button">
                    Team
                  </button>
                  <button className="home-link5 button-clean button">
                    Press
                  </button>
                  <button className="home-link6 button-clean button">
                    Terms
                  </button>
                  <button className="home-link7 button-clean button">
                    Limitations
                  </button>
                  <button className="home-link8 button-clean button">
                    Licenses
                  </button>
                </div>
              </div>
            </div>
            <div className="home-socials2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-twitter1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image32"
                />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-discord1 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image33"
                />
              </a>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </footer>
        <div>
          <div className="home-container7">
            <Script
              html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #27272d;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo {
            color: rgb(255, 255, 255);
          }
          .home-desktop-menu {
            display: flex;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            color: #ffffff;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-button {
            color: rgb(255, 255, 255);
          }
          .home-button1 {
            color: rgb(255, 255, 255);
          }
          .home-button2 {
            color: rgb(255, 255, 255);
          }
          .home-button3 {
            color: rgb(255, 255, 255);
          }
          .home-button4 {
            color: rgb(255, 255, 255);
          }
          .home-btn-group {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: flex;
            padding: 32px;
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.5s;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text03 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text04 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
          }
          .home-login {
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-heading {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption {
            color: rgb(255, 255, 255);
            font-size: 24px;
            max-width: 800px;
            text-align: center;
            line-height: 36px;
          }
          .home-buttons {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-learn {
            color: rgb(255, 255, 255);
          }
          .home-description {
            gap: 120px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .home-divider-image {
            width: 100%;
            object-fit: cover;
          }
          .home-container3 {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-end;
            flex-direction: column;
          }
          .home-description01 {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 900px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-paragraph {
            color: rgb(255, 255, 255);
            font-size: 60px;
          }
          .home-links {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: stretch;
            flex-direction: column;
          }
          .home-cards {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-row {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-card {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            height: 580px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #000000;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content01 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header01 {
            color: rgb(255, 255, 255);
          }
          .home-description02 {
            color: rgba(255, 255, 255, 0.8);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn1 {
            gap: var(--dl-space-space-unit);
            color: white;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text09 {
            font-weight: 500;
          }
          .home-image {
            width: 16px;
            object-fit: cover;
          }
          .home-card01 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            height: 569px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #ffcf77;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content02 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            color: rgb(0, 0, 0);
          }
          .home-description03 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn2 {
            gap: var(--dl-space-space-unit);
            color: #000000;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text12 {
            font-weight: 500;
          }
          .home-image01 {
            width: 16px;
            object-fit: cover;
          }
          .home-card02 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-color: #8fa7df;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: auto;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-avatar {
            width: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: #000000;
          }
          .home-container5 {
            top: 13px;
            left: 20px;
            width: 75px;
            height: 62px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-icon10 {
            top: 0px;
            fill: #ffcf77;
            left: -3px;
            width: 50%;
            height: 50%;
            position: absolute;
            align-self: center;
          }
          .home-row1 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-main2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-content03 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header03 {
            color: rgb(0, 0, 0);
          }
          .home-description04 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 400px;
            line-height: 27px;
          }
          .home-learn3 {
            gap: var(--dl-space-space-unit);
            color: #000000;
            display: flex;
            padding: 0px;
            box-shadow: none;
            align-items: center;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            background-color: transparent;
          }
          .home-text20 {
            font-weight: 500;
          }
          .home-image02 {
            width: 16px;
            object-fit: cover;
          }
          .home-image03 {
            width: 553px;
            height: 510px;
            object-fit: cover;
          }
          .home-collection {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content04 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption01 {
            color: #ffcf77;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading01 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header04 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header05 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-main3 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(4, 1fr);
          }
          .home-card03 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image04 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image05 {
            object-fit: cover;
          }
          .home-content05 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption02 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card04 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image06 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ffcf77;
          }
          .home-image07 {
            object-fit: cover;
          }
          .home-content06 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption03 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title1 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card05 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image08 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #8fa7df;
          }
          .home-image09 {
            object-fit: cover;
          }
          .home-content07 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption04 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title2 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card06 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image10 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #9ddadb;
          }
          .home-image11 {
            object-fit: cover;
          }
          .home-content08 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption05 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title3 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card07 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image12 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #9fd8e5;
          }
          .home-image13 {
            object-fit: cover;
          }
          .home-content09 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption06 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title4 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card08 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image14 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ec7495;
          }
          .home-image15 {
            object-fit: cover;
          }
          .home-content10 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption07 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title5 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card09 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image16 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #ffcf77;
          }
          .home-image17 {
            object-fit: cover;
          }
          .home-content11 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption08 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title6 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-card10 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .home-image18 {
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: #fdea6b;
          }
          .home-image19 {
            object-fit: cover;
          }
          .home-content12 {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption09 {
            font-style: normal;
            font-weight: 600;
          }
          .home-title7 {
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-view2 {
            width: 100%;
            text-align: center;
          }
          .home-project {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-understand {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-content13 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption10 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading02 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header06 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header07 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-view3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            text-align: left;
            align-items: center;
            flex-direction: row;
          }
          .home-image20 {
            width: 25px;
            object-fit: cover;
          }
          .home-image21 {
            width: 480px;
            object-fit: cover;
          }
          .home-mining {
            gap: 130px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-image22 {
            width: 510px;
            object-fit: cover;
          }
          .home-content14 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption11 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading03 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header08 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
          }
          .home-header09 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-view4 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            text-align: left;
            align-items: center;
            flex-direction: row;
          }
          .home-image23 {
            width: 25px;
            object-fit: cover;
          }
          .home-roadmap {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-heading04 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            flex-direction: column;
          }
          .home-header10 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            font-weight: 500;
            line-height: 108px;
          }
          .home-header11 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            text-align: center;
            line-height: 36px;
          }
          .home-list {
            gap: 106px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            border-left-width: 1px;
          }
          .home-step {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption12 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading05 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header13 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button6 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-step1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption13 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading06 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header14 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header15 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption14 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading07 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header16 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header17 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-step3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-caption15 {
            color: rgb(255, 207, 119);
            font-style: normal;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .home-heading08 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header18 {
            color: rgb(255, 255, 255);
            font-size: 72px;
            font-style: normal;
            font-weight: 500;
          }
          .home-header19 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-benefits {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-item {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image24 {
            width: 16px;
            object-fit: cover;
          }
          .home-header20 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-item1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image25 {
            width: 16px;
            object-fit: cover;
          }
          .home-header21 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-item2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-image26 {
            width: 20px;
            object-fit: cover;
          }
          .home-header22 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 27px;
          }
          .home-join-us {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-content15 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            overflow: hidden;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-main4 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading09 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header23 {
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-caption16 {
            font-size: 24px;
            max-width: 800px;
            line-height: 36px;
          }
          .home-view5 {
            background-color: #9ddadb;
          }
          .home-image27 {
            width: 100%;
            object-fit: cover;
          }
          .home-faq {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 160px;
          }
          .home-header24 {
            color: rgb(255, 255, 255);
            font-size: 90px;
            max-width: 900px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 108px;
          }
          .home-accordion {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-element {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
            border-top-width: 1px;
          }
          .home-content16 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header25 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 500;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description05 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon12 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon14 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element1 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content17 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header26 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description06 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container1 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon16 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon18 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element2 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content18 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header27 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description07 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container2 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon20 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon22 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element3 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content19 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header28 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description08 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container3 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon24 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon26 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-element4 {
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: rgba(255, 255, 255, 0.3);
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-content20 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header29 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-description09 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            max-width: 800px;
            line-height: 27px;
          }
          .home-icon-container4 {
            padding-top: var(--dl-space-space-halfunit);
          }
          .home-icon28 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
            display: none;
          }
          .home-icon30 {
            fill: #ffffff;
            width: 16px;
            height: 16px;
          }
          .home-get-yours {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: 555px;
            display: flex;
            max-width: 1440px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-row2 {
            gap: var(--dl-space-space-threeunits);
            height: 100%;
            display: flex;
            flex-direction: row;
          }
          .home-column {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-card11 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #ffcf77;
          }
          .home-image28 {
            width: 240px;
            object-fit: cover;
          }
          .home-column1 {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
          .home-card12 {
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            flex-direction: column;
            background-color: #000000;
          }
          .home-image29 {
            width: 240px;
            object-fit: cover;
          }
          .home-column2 {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-card13 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: #8fa7df;
          }
          .home-content21 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 460px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header30 {
            color: rgb(0, 0, 0);
            font-size: 52px;
            font-style: normal;
            font-weight: 500;
          }
          .home-description10 {
            color: rgb(0, 0, 0);
            width: 100%;
            font-size: 18px;
            max-width: 500px;
            line-height: 27px;
          }
          .home-button7 {
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-footer {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
          }
          .home-main5 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-branding {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-logo2 {
            color: rgb(255, 255, 255);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-caption17 {
            color: rgb(255, 255, 255);
            font-size: 18px;
            line-height: 27px;
          }
          .home-socials1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter {
            text-decoration: none;
          }
          .home-image30 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord {
            text-decoration: none;
          }
          .home-image31 {
            width: 100px;
            object-fit: cover;
          }
          .home-links1 {
            gap: 120px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-list1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading11 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link {
            color: rgb(255, 255, 255);
          }
          .home-link1 {
            color: rgb(255, 255, 255);
          }
          .home-link2 {
            color: rgb(255, 255, 255);
          }
          .home-link3 {
            color: rgb(255, 255, 255);
          }
          .home-list2 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading12 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-items1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-link4 {
            color: rgb(255, 255, 255);
          }
          .home-link5 {
            color: rgb(255, 255, 255);
          }
          .home-link6 {
            color: rgb(255, 255, 255);
          }
          .home-link7 {
            color: rgb(255, 255, 255);
          }
          .home-link8 {
            color: rgb(255, 255, 255);
          }
          .home-socials2 {
            gap: var(--dl-space-space-unit);
            display: none;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-twitter1 {
            text-decoration: none;
          }
          .home-image32 {
            width: 100px;
            object-fit: cover;
          }
          .home-discord1 {
            text-decoration: none;
          }
          .home-image33 {
            width: 100px;
            object-fit: cover;
          }
          .home-copyright {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .home-container7 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-desktop-menu {
              display: none;
            }
            .home-btn-group {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-button5 {
              display: flex;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
            }
            .home-logo1 {
              color: #000000;
            }
            .home-paragraph {
              color: rgb(255, 255, 255);
              font-size: 40px;
              line-height: 60px;
            }
            .home-row {
              flex-direction: column;
            }
            .home-card {
              width: 100%;
            }
            .home-card01 {
              width: 100%;
            }
            .home-row1 {
              flex-direction: column;
            }
            .home-main3 {
              grid-template-columns: repeat(2, 1fr);
            }
            .home-project {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-understand {
              align-items: center;
              flex-direction: column;
            }
            .home-mining {
              flex-direction: column-reverse;
            }
            .home-heading09 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-caption16 {
              text-align: center;
            }
            .home-get-yours {
              height: auto;
              align-items: center;
              flex-direction: column;
            }
            .home-row2 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
              height: 555px;
              align-items: center;
              justify-content: center;
            }
            .home-column {
              flex: 1;
              align-items: flex-start;
            }
            .home-card11 {
              width: 100%;
              aspect-ratio: 0.85;
              justify-content: center;
            }
            .home-column1 {
              flex: 1;
              align-items: flex-end;
            }
            .home-card12 {
              width: 100%;
              aspect-ratio: 0.85;
            }
            .home-column2 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-navbar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-hero {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-heading {
              gap: var(--dl-space-space-unit);
            }
            .home-header {
              font-size: 36px;
              max-width: 70%;
              line-height: 43px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-description {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: 0px;
            }
            .home-description01 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content {
              gap: var(--dl-space-space-unit);
            }
            .home-paragraph {
              font-size: 20px;
              line-height: 30px;
            }
            .home-cards {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-card {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header01 {
              font-size: 24px;
            }
            .home-description02 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card01 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-main1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header02 {
              font-size: 24px;
            }
            .home-description03 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-card02 {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-row1 {
              gap: var(--dl-space-space-twounits);
            }
            .home-main2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header03 {
              font-size: 24px;
            }
            .home-description04 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-collection {
              gap: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content04 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading01 {
              gap: var(--dl-space-space-unit);
            }
            .home-header04 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header05 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image04 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image06 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image08 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image10 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image12 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image14 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image16 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-image18 {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-view2 {
              display: none;
            }
            .home-project {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-understand {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-content13 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading02 {
              gap: var(--dl-space-space-unit);
            }
            .home-header06 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header07 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-view3 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-image21 {
              width: 100%;
            }
            .home-mining {
              gap: var(--dl-space-space-fourunits);
            }
            .home-image22 {
              width: 100%;
            }
            .home-content14 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading03 {
              gap: var(--dl-space-space-unit);
            }
            .home-header08 {
              font-size: 32px;
              letter-spacing: 0;
            }
            .home-header09 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-view4 {
              margin-top: var(--dl-space-space-unit);
            }
            .home-roadmap {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading04 {
              gap: var(--dl-space-space-unit);
            }
            .home-header10 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-header11 {
              width: 80%;
              font-size: 16px;
              line-height: 24px;
            }
            .home-list {
              gap: var(--dl-space-space-threeunits);
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-bottom: 0px;
            }
            .home-heading05 {
              gap: var(--dl-space-space-unit);
            }
            .home-header12 {
              font-size: 32px;
            }
            .home-header13 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-button6 {
              margin-top: 0px;
            }
            .home-heading06 {
              gap: var(--dl-space-space-unit);
            }
            .home-header14 {
              font-size: 32px;
            }
            .home-header15 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading07 {
              gap: var(--dl-space-space-unit);
            }
            .home-header16 {
              font-size: 32px;
            }
            .home-header17 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-heading08 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-header18 {
              font-size: 32px;
            }
            .home-header19 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header20 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header21 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-image26 {
              width: 17px;
            }
            .home-header22 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-join-us {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content15 {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-main4 {
              gap: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading09 {
              gap: var(--dl-space-space-unit);
            }
            .home-header23 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-caption16 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-image27 {
              width: 150%;
            }
            .home-faq {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-header24 {
              font-size: 36px;
              line-height: 43px;
            }
            .home-element {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header25 {
              font-size: 16px;
            }
            .home-description05 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element1 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header26 {
              font-size: 16px;
            }
            .home-description06 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element2 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header27 {
              font-size: 16px;
            }
            .home-description07 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element3 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header28 {
              font-size: 16px;
            }
            .home-description08 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-element4 {
              align-items: flex-start;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-header29 {
              font-size: 16px;
            }
            .home-description09 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-get-yours {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-row2 {
              gap: var(--dl-space-space-oneandhalfunits);
              height: 555px;
            }
            .home-card11 {
              padding: var(--dl-space-space-unit);
            }
            .home-image28 {
              width: 100%;
            }
            .home-card12 {
              padding: var(--dl-space-space-unit);
            }
            .home-image29 {
              width: 100%;
            }
            .home-card13 {
              gap: var(--dl-space-space-threeunits);
              align-items: center;
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-content21 {
              align-items: center;
            }
            .home-header30 {
              font-size: 32px;
              text-align: center;
            }
            .home-description10 {
              font-size: 14px;
              text-align: center;
              line-height: 21px;
            }
            .home-button7 {
              margin-top: 0px;
            }
            .home-footer {
              gap: var(--dl-space-space-oneandhalfunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-main5 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-heading10 {
              gap: var(--dl-space-space-unit);
            }
            .home-logo2 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-caption17 {
              width: 80%;
              font-size: 12px;
              line-height: 18px;
            }
            .home-socials1 {
              display: none;
            }
            .home-links1 {
              gap: var(--dl-space-space-fourunits);
              width: 100%;
              justify-content: flex-start;
            }
            .home-list1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-list2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-socials2 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .home-navbar {
              padding: var(--dl-space-space-unit);
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-main3 {
              grid-template-columns: repeat(1, 1fr);
            }
            .home-image27 {
              width: 200%;
            }
            .home-header25 {
              font-size: 16px;
            }
            .home-description05 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header26 {
              font-size: 16px;
            }
            .home-description06 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header27 {
              font-size: 16px;
            }
            .home-description07 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header28 {
              font-size: 16px;
            }
            .home-description08 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header29 {
              font-size: 16px;
            }
            .home-description09 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-row2 {
              height: 350px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
