import { useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { useApp } from "../../contexts/useApp";

import Volume from "../../components/Volume/Volume";

import Embed from "../../components/Embed/Embed";
import Decoration from "../../components/Decoration/Decoration";
import Image from "../../components/Image/Image";

import { elementsMotionProps } from "../../helpers/variables";

const volumeNumber = 2;

const VolumeTwo = () => {
  const { language } = useApp();

  const [isVolumeRead, setIsVolumeRead] = useState();

  const lastSection = useRef(null);
  const volumeTitle = useRef(null);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Digital Trends 2024 by Ovation; Volume Two - In This World, It’s Just You - Hyper-personalisation, human content & storytelling immersive advertising"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume Two
        </title>
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
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_three-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_three-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_three-mobile.webp"
          as="image"
        />
      </Helmet>
      <Volume
        lastSection={lastSection}
        volumeTitle={volumeTitle}
        isVolumeRead={isVolumeRead}
        setIsVolumeRead={setIsVolumeRead}
        volumeNumber={volumeNumber}
        className="volume--two"
      >
        <div
          ref={volumeTitle}
          className="volume__title volume__title--reverse volume__title--volume-two"
        >
          <motion.div
            {...elementsMotionProps}
            className="volume__title-image volume__title-image--volume-two"
          >
            <Image
              webpPath="/images/volumes/volume-2/volume_2_image_title.webp"
              path="/images/volumes/volume-2/volume_2_image_title.jpg"
              placeholderPath="/images/volumes/volume-2/volume_2_image_title-placeholder.jpg"
              altText="Spotify's Wrapped visual."
            />
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-two">
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
                      fill="#df66cb"
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
          <motion.div
            {...elementsMotionProps}
            className="volume__title-text volume__title-text--volume-two"
          >
            <p className="volume__title-number volume__title-number--volume-two">
              Volume 2
            </p>
            <h2 className="volume__title-name volume__title-name--volume-two">
              <motion.span {...elementsMotionProps}>In This World</motion.span>
              <motion.span {...elementsMotionProps}>It’s Just You</motion.span>
            </h2>
            <motion.p
              {...elementsMotionProps}
              className="volume__title-description volume__title-description--volume-two"
            >
              Hyper-personalisation, human content & storytelling, immersive
              advertising
            </motion.p>
          </motion.div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-two-section-one">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-two"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    This isn’t a story about a newsletter addressing you by
                    name. You know what we mean, it writes something in the
                    nominative, and that makes sense if you’re a woman, but when
                    it comes to the male names, problems arise.
                  </p>
                  <p>
                    Nor does this text refer to the chatbot addressing you as
                    sir/madam and then adding your last name.
                  </p>
                  <p>
                    What we’re talking about here is the smart use of available
                    data and its application in creating innovative solutions,
                    as well as determining the style and frequency of
                    communication.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ovo sada nije priča o onome kada vam se njuzleter obrati
                    imenom. Znate to, u nominativu vam nešto napiše, pa onda ima
                    smisla ako ste žena, ali se već kod muških imena dolazi do
                    problema.
                  </p>
                  <p>
                    Ovde se naravno ne misli ni na to kada vam se čet bot obrati
                    sa gospodine/gospođo, pa onda doda vaše prezime.
                  </p>
                  <p>
                    Ovde se misli na pametno korišćenje dostupnih podataka i
                    njihovo korišćenje u kreiranju kreativnih rešenja, ali i
                    određivanju načina i učestalosti komunikacije.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_2_deco_1.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-two-section-two">
            <motion.div {...elementsMotionProps} className="volume__image">
              <Image
                webpPath="/images/volumes/volume-2/volume_2_image_1.webp"
                path="/images/volumes/volume-1/volume_2_image_1.jpg"
                placeholderPath="/images/volumes/volume-2/volume_2_image_1-placeholder.jpg"
                altText="Spotify's Wrapped in-app screenshots."
              />
              <div className="volume__image-description">
                <p>Spotify Wrapped</p>
              </div>
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_2_deco_2.json"
              }
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-two-section-three">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-two"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    According to some research, a tenth of a second is enough to
                    form an opinion. When we include brands into this equation,
                    the opinion might form even earlier. It’s not necessarily
                    logical, but it certainly includes an emotional reaction.
                  </p>
                  <p>And that’s just what we need to keep in mind.</p>
                  <p>
                    Back to the stats, research also shows that 70% of customer
                    opinions are based on how they feel they are treated.
                  </p>
                  <p>
                    Properly placing information in communication can reduce the
                    natural gap that exists between consumers and the brand,
                    enabling consumers to better understand what you do and
                    ideally building more trust in the brand.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Desetina sekunde je, prema nekim istraživanjima, dovoljna da
                    se formira stav. Kada u tu jednačinu uvedemo brendove, stav
                    se formira možda i pre. Taj stav, naravno, nije nužno
                    logičan, ali svakako uključuje - emotivnu reakciju.
                  </p>
                  <p>I to je ono što je neophodno imati na umu.</p>
                  <p>
                    Istraživanja su pokazala da je 70% stavova klijenata
                    zasnovano na tome kako osećaju da se prema njima postupa.
                  </p>
                  <p>
                    Adekvatnim plasiranjem informacija u komunikaciji moguće je
                    smanjiti taj prirodan jaz koji svakako postoji između
                    potrošača i brenda, odnosno, omogućiti potrošačima da bolje
                    razumeju ono što radite, čime se, u idealnom slučaju,
                    formira veće poverenje u sam brend.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_2_deco_3.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-two-section-four">
            <Embed
              motionProps={elementsMotionProps}
              type="horizontal"
              site="youtube"
              src="https://www.youtube.com/embed/3KtWfp0UopM?si=T3ilnYqNY23X4C4-&autoplay=1"
              title="Youtube video player"
              allowFullScreen={true}
              backgroundImage="/images/embed-bg/volume-2/volume_2_embed_1.jpg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            />
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "50rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_2_deco_4.json"
              }
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-two-section-five">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-two"
            >
              {language === "en-US" ? (
                <>
                  <p>How do we evoke an emotional reaction?</p>
                  <p>
                    Firstly, it’s crucial to know the target audience, what they
                    like, and what they don’t. But a bit more of what they like
                    and love. It sounds simple, but that emotion of loving is
                    far from sufficient. You need to add something new to that
                    emotion, a twist related to a specific brand, something only
                    that brand can do, and then move beyond the niche.
                  </p>
                  <p>
                    Move from the primary target group to the secondary, or even
                    tertiary, why not?
                  </p>
                </>
              ) : (
                <>
                  <p>Kako izazivamo emotivnu reakciju?</p>
                  <p>
                    Prvo, važno je poznavati ciljnu grupu. Poznavati ono što
                    voli. I ono što ne voli. Ali ipak malo više ono što voli.
                    Zvuči jednostavno, ali ta emocija “voljenja” nije ni
                    približno dovoljna. Neophodno je toj emociji dodati nešto
                    novo, neki zaokret koji je vezan za konkretan brend, nešto
                    što samo taj brend može, a onda - krenuti van niše.
                  </p>
                  <p>
                    Pomerati se od primarne ciljne grupe ka sekundarnoj, ili čak
                    tercijarnoj, zašto da ne?
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "64rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_2_deco_5.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-two-section-six">
            <motion.div {...elementsMotionProps} className="volume__image">
              <Image
                webpPath="/images/volumes/volume-2/volume_2_image_2.webp"
                path="/images/volumes/volume-1/volume_2_image_2.jpg"
                placeholderPath="/images/volumes/volume-2/volume_2_image_2-placeholder.jpg"
                altText="Screenshot of an insert of a text about personalization on Amazon and Netflix."
              />
              <div className="volume__image-description">
                <p>
                  {language === "en-US"
                    ? "Personalization - Amazon & Netflix"
                    : "Personalizacija - Amazon & Netflix"}
                </p>
              </div>
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "50rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_2_deco_6.json"
              }
            />
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-two-section-seven"
          >
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-two"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    Create a story that many can identify with, believing it’s
                    meant just for them. That every post, every visual, every
                    copy - is specifically for them. That the brand is having a
                    one- on-one conversation with them.
                  </p>
                  <p>Every day. Throughout every campaign.</p>
                </>
              ) : (
                <>
                  <p>
                    Krerirati priču sa kojom će moći da se poistovete mnogi, a
                    koji će verovati da je ona namenjena baš njima. Da je svaka
                    objava, svaki vizual, svaki kopi - baš za njih. Da brend
                    vodi razgovor sa njima. Jedan na jedan.
                  </p>
                  <p>I tako svakog dana. I tokom svake kampanje.</p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "72rem", height: "42rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_2_deco_7.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeTwo;
