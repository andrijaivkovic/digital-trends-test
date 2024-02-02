import { useRef, useState } from "react";

import { Helmet } from "react-helmet-async";

import { motion } from "framer-motion";

import { useApp } from "../../contexts/useApp";

import Volume from "../../components/Volume/Volume";

import Image from "../../components/Image/Image";
import Decoration from "../../components/Decoration/Decoration";

import { elementsMotionProps } from "../../helpers/variables";

const volumeNumber = 1;

const VolumeOne = () => {
  const { language } = useApp();

  const [isVolumeRead, setIsVolumeRead] = useState();

  const lastSection = useRef(null);
  const volumeTitle = useRef(null);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Digital Trends 2024 by Ovation; Volume One - Why You Only Call Me When AI? - The impact and the correct use of ChatGPT and AI"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume One
        </title>
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_one-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_one-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_one-mobile.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_two-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_two-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_two-mobile.webp"
          as="image"
        />
      </Helmet>
      <Volume
        lastSection={lastSection}
        volumeTitle={volumeTitle}
        isVolumeRead={isVolumeRead}
        setIsVolumeRead={setIsVolumeRead}
        volumeNumber={volumeNumber}
        className="volume--one"
      >
        <div
          ref={volumeTitle}
          className="volume__title volume__title--non-reverse volume__title--volume-one"
        >
          <motion.div
            {...elementsMotionProps}
            className="volume__title-image volume__title-image--volume-one"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="153.937"
              height="155.824"
              viewBox="0 0 153.937 155.824"
            >
              <path
                id="Path_529"
                data-name="Path 529"
                d="M308.585,138.228a39.452,39.452,0,0,0-37.508,27.179,39.335,39.335,0,0,0-21.144,64.849,38.83,38.83,0,0,0,3.322,31.837,39.376,39.376,0,0,0,42.368,18.875,38.965,38.965,0,0,0,29.285,13.083,39.451,39.451,0,0,0,37.508-27.179,39.372,39.372,0,0,0,21.144-64.849v-.04a38.923,38.923,0,0,0-3.322-31.878,39.438,39.438,0,0,0-42.328-18.835,39.081,39.081,0,0,0-29.326-13.043m0,10.167-.041.04A29.275,29.275,0,0,1,327.3,155.2c-.2.121-.648.365-.932.526L295.3,173.63a5.07,5.07,0,0,0-2.551,4.415v42l-13.367-7.7V177.64a29.223,29.223,0,0,1,29.2-29.245m37.427,12.192a29.21,29.21,0,0,1,28.88,34.146c-.2-.162-.648-.365-.891-.527l-31.068-17.944a5.205,5.205,0,0,0-5.1,0l-36.414,21.022V181.893l30.055-17.377a29.535,29.535,0,0,1,14.541-3.929m-76.838,15.959v36.9a4.987,4.987,0,0,0,2.552,4.415L308.058,238.8,294.65,246.58l-30.015-17.3a29.264,29.264,0,0,1,4.537-52.738M338.8,185.7,368.856,203a29.122,29.122,0,0,1,10.653,39.9l.041.04a29.1,29.1,0,0,1-15.23,12.759v-36.9a4.943,4.943,0,0,0-2.552-4.415l-36.415-21.022Zm-22.075,12.718,15.311,8.871v17.66l-15.311,8.871-15.311-8.871v-17.7Zm24.1,13.934,13.367,7.7v34.673a29.223,29.223,0,0,1-29.2,29.245v-.04a29.249,29.249,0,0,1-18.713-6.765c.2-.122.689-.365.932-.527l31.068-17.9a4.987,4.987,0,0,0,2.551-4.415Zm-8.708,22.683v15.392l-30.055,17.3a29.3,29.3,0,0,1-39.938-10.653h.04a28.843,28.843,0,0,1-3.483-19.523c.2.162.648.364.891.526l31.068,17.944a5.208,5.208,0,0,0,5.1,0Z"
                transform="translate(-239.782 -138.228)"
                fill="#5f5fa2"
              />
            </svg>
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-one">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                >
                  <g
                    id="Group_10998"
                    data-name="Group 10998"
                    transform="translate(-1351 -846)"
                  >
                    <circle
                      id="Ellipse_1"
                      data-name="Ellipse 1"
                      cx="18"
                      cy="18"
                      r="18"
                      transform="translate(1351 846)"
                      fill="#5f5fa2"
                    />
                    <g
                      id="Group_10997"
                      data-name="Group 10997"
                      transform="translate(-1.101 -2.354)"
                    >
                      <line
                        id="Line_18"
                        data-name="Line 18"
                        x2="5"
                        y2="5"
                        transform="translate(1361.101 868.054)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <line
                        id="Line_19"
                        data-name="Line 19"
                        y1="12.5"
                        x2="12.092"
                        transform="translate(1366.401 860.354)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
                {language === "en-US" ? (
                  <p>You’ve completed this Volume.</p>
                ) : (
                  <p>Završili ste ovaj Volume.</p>
                )}
              </div>
            )}
          </motion.div>
          <div className="volume__title-text volume__title-text--volume-one">
            <motion.p
              {...elementsMotionProps}
              className="volume__title-number volume__title-number--volume-one"
            >
              Volume 1
            </motion.p>
            <h2 className="volume__title-name volume__title-name--volume-one">
              <motion.span {...elementsMotionProps}>Why You Only</motion.span>
              <motion.span {...elementsMotionProps}>
                Call Me When AI?
              </motion.span>
            </h2>
            <motion.p
              {...elementsMotionProps}
              className="volume__title-description volume__title-description--volume-one"
            >
              The impact and the correct use of ChatGPT and AI
            </motion.p>
          </div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-one-section-one">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-one"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    2023 and the invasion of the new terms took us by surprise.
                    Just as we got used to the Metaverse and VR, weird short
                    forms such as ChatGPT and AI have come to bring confusion
                    into our lives and campaigns.
                  </p>
                  <p>
                    Questions piled up: Will ChatGPT replace advertisers? Can AI
                    be a part of our new campaign? Can we create a CGI video
                    quickly and cheaply, like, for next week?
                  </p>
                  <p>Short answers? No. Yes. No.</p>
                </>
              ) : (
                <>
                  <p>
                    2023. smo dočekali nespremni na najezdu novih reči i
                    skraćenica. Taman što smo se privikli na Metavers i VR-ove,
                    na red su došli ChatGPT i AI da unesu konfuziju u naše
                    živote i kampanje.
                  </p>
                  <p>
                    Pitanja su se lepila jedno na drugo: Hoće li ChatGPT
                    zameniti advertajzere? Možemo li uraditi neki brzi i jeftini
                    CGI za sledeću nedelju? Može li AI biti sastavni deo naše
                    nove kampanje.
                  </p>
                  <p>Kratki odgovori? Ne. Ne. Da.</p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={{
                ...elementsMotionProps,
                transition: {
                  y: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                },
              }}
              style={{ width: "72rem", height: "68rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_1_deco_1.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-one-section-two">
            <motion.div {...elementsMotionProps} className="volume__image">
              <Image
                webpPath="/images/volumes/volume-one/volume_1_image_1.webp"
                path="/images/volumes/volume-one/volume_1_image_1.jpg"
                placeholderPath="/images/volumes/volume-one/volume_1_image_1-placeholder.jpg"
                altText="Heinz AI campaign"
              />
              <div className="volume__image-description">
                {language === "en-US" ? (
                  <p>Heinz AI campaign</p>
                ) : (
                  <p>Heinz AI kampanja</p>
                )}
              </div>
            </motion.div>
            <Decoration
              motionProps={{
                ...elementsMotionProps,
                transition: {
                  y: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                },
              }}
              style={{ width: "70rem", height: "58rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_1_deco_2.json"
              }
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-one-section-three">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-one"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    What about the longer version? Well, let’s just start by
                    clarifying one thing: AI, or artificial intelligence, is
                    synthetic intelligence. And like any other artificial thing,
                    it’s programmed to process only the inputs we give to it,
                    not to think on our behalf.
                  </p>
                  <p>
                    It can help indeed, but only if we have the skills to handle
                    information, know exactly what we want, and have no fear
                    when it comes to executing the idea. The Heinz AI campaign
                    confirms this.
                  </p>
                  <p>
                    However, it’s crucial to emphasize that such campaigns,
                    although they may seem so, don’t come to life overnight. Not
                    every global video that reaches us is the most successful
                    ever.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    A duži? Pa hajde, za početak, da razgraničimo jednu stvar:
                    AI ili artificial intelligence je veštačka inteligencija. A
                    veštačka inteligencija, kao i svaki veštački prerađivač,
                    isprogramirana je da obrađuje samo ono što smo mu dali, ne
                    da misli umesto nas.
                  </p>
                  <p>
                    Dakle, može da pomogne, ukoliko mi vešto baratamo
                    informacijama, znamo tačno šta želimo i nemamo strah da to
                    uradimo. Što dokazuje i Heinz kampanja.
                  </p>
                  <p>
                    Međutim, bitno je naglasiti da ovakve kampanje, iako
                    izgledaju tako, ne nastaju preko noći. I da nije svaki video
                    koji sa globalnog nivoa dođe do nas, najuspešniji ikada.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={{
                ...elementsMotionProps,
                transition: {
                  y: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                },
              }}
              style={{ width: "45rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_1_deco_3.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-one-section-four">
            <motion.div {...elementsMotionProps} className="volume__image">
              <Image
                webpPath="/images/volumes/volume-one/volume_1_image_2.webp"
                path="/images/volumes/volume-one/volume_1_image_2.jpg"
                placeholderPath="/images/volumes/volume-one/volume_1_image_2-placeholder.jpg"
                altText="A picture showing icons of the most popular AI tools in a grid."
              />
              <div className="volume__image-description">
                {language === "en-US" ? (
                  <p>Popular AI tools</p>
                ) : (
                  <p>Popularni AI alati</p>
                )}
              </div>
            </motion.div>
            <Decoration
              motionProps={{
                ...elementsMotionProps,
                transition: {
                  y: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                },
              }}
              style={{ width: "72rem", height: "63rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_1_deco_4.json"
              }
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-one-section-five">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-one"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    In the surge of new tools, it’s up to all of us to recognize
                    which one is right for our brand and its audience. Because
                    only a thoughtful and well-adapted duo can attract
                    attention.
                  </p>
                  <p>
                    So, how do we do this? Through research, thoughtful
                    consideration, and brave exploration of new territories.
                  </p>
                  <p>
                    No tool has come onto the scene to replace human
                    intelligence. That would be impossible. They are here to
                    assist us, fuel our imagination, and expand possibilities.
                  </p>
                  <p>So, watch, be inspired, and encourage yourself.</p>
                </>
              ) : (
                <>
                  <p>
                    U najezdi novih alata, na svima nama je da prepoznamo koji
                    je pravi za naš brend i njegovu publiku. Jer jedino
                    promišljeni i prilagođeni duo privlači poglede.
                  </p>
                  <p>
                    Kako ćemo ovo uraditi? Istraživanjem, promišljanjem i
                    hrabrim koračanjem na nove teritorije.
                  </p>
                  <p>
                    Nijedan tool nije došao na scenu da zameni ljudsku
                    inteligenciju. To bi bilo nemoguće. Ali tu su da nam
                    pomognu, rasplamsaju maštu i prošire mogućnosti.
                  </p>
                  <p>Zato gledaj, inspiriši se i ohrabri se.</p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={{
                ...elementsMotionProps,
                transition: {
                  y: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                },
              }}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_1_deco_5.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-one-section-six">
            <motion.div {...elementsMotionProps} className="volume__image">
              <Image
                webpPath="/images/volumes/volume-one/volume_1_image_3.webp"
                path="/images/volumes/volume-one/volume_1_image_3.jpg"
                placeholderPath="/images/volumes/volume-one/volume_1_image_3-placeholder.jpg"
                altText="An ilustration depicting a conversation between the human brain and artificial intelligence."
              />
              <div className="volume__image-description">
                {language === "en-US" ? (
                  <p>Human VS AI</p>
                ) : (
                  <p>Čovek protiv AI</p>
                )}
              </div>
            </motion.div>
            <Decoration
              motionProps={{
                ...elementsMotionProps,
                transition: {
                  y: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                },
              }}
              style={{ width: "72rem", height: "54rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_1_deco_6.json"
              }
            />
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-one-section-seven"
          >
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-one"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    Don’t blindly accept the things the machine generates.
                    Because a machine will never have human experiences and
                    cannot accurately predict what will be the right thing for
                    your brand and its audience.
                  </p>
                  <p>Only you know that.</p>
                  <p>
                    Okay. Let us know if you want to talk about AI. And if you
                    have any questions, reach out to us, not to ChatGPT.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ne prihvataj slepo šta ti mašina iskucava. Jer mašina nikada
                    neće imati ljudska iskustva i ne može tačno predvideti šta
                    će biti prava stvar za tvoj brend i njegovu publiku.
                  </p>
                  <p>To znaš samo ti.</p>
                  <p>
                    ’Aj, čujemo se za AI. A ako imaš pitanja, kucaj nama, ne na
                    ChatGPT.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={{
                ...elementsMotionProps,
                transition: {
                  y: { duration: 0.4, delay: 0.2, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                },
              }}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_1_deco_7.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeOne;
