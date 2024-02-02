import { useRef, useState } from "react";

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import { useApp } from "../../contexts/useApp";

import Volume from "../../components/Volume/Volume";

import Decoration from "../../components/Decoration/Decoration";
import Image from "../../components/Image/Image";
import Embed from "../../components/Embed/Embed";

import { elementsMotionProps } from "../../helpers/variables";

const volumeNumber = 8;

const VolumeSeven = () => {
  const { language } = useApp();

  const [isVolumeRead, setIsVolumeRead] = useState();

  const lastSection = useRef(null);
  const volumeTitle = useRef(null);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Digital Trends 2024 by Ovation; Volume Eight - Every Meme You Make - About memification, offline and online trends brands use, and the right moment"
        />
        <title>
          Volume Up For 2024 - Digital Trends 2024 by Ovation - Volume Eight
        </title>
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_seven-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_seven-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_seven-mobile.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/desktop/bg-volume_eight-desktop.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/tablet/bg-volume_eight-tablet.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/bg/mobile/bg-volume_eight-mobile.webp"
          as="image"
        />
      </Helmet>
      <Volume
        lastSection={lastSection}
        volumeTitle={volumeTitle}
        isVolumeRead={isVolumeRead}
        setIsVolumeRead={setIsVolumeRead}
        volumeNumber={volumeNumber}
        className={"volume-eight"}
      >
        <div
          ref={volumeTitle}
          className="volume__title volume__title--reverse volume__title--volume-eight"
        >
          <motion.div
            {...elementsMotionProps}
            className="volume__title-image volume__title-image--volume-eight"
          >
            <Image
              webpPath="/images/volumes/volume-eight/volume_8_image_title.webp"
              path="/images/volumes/volume-eight/volume_8_image_title.jpg"
              placeholderPath="/images/volumes/volume-eight/volume_8_image_title-placeholder.jpg"
              altText="Hide the pain Harold's legendary meme image."
            />
            {isVolumeRead && (
              <div className="volume__checkmark volume__checkmark--volume-eight">
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
                      fill="#f8c140"
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
          <div className="volume__title-text volume__title-text--volume-eight">
            <motion.p
              {...elementsMotionProps}
              className="volume__title-number volume__title-number--volume-eight"
            >
              Volume 8
            </motion.p>
            <h2 className="volume__title-name volume__title-name--volume-eight">
              <motion.span {...elementsMotionProps}>Every Meme</motion.span>
              <motion.span {...elementsMotionProps}>You Make</motion.span>
            </h2>
            <motion.p
              {...elementsMotionProps}
              className="volume__title-description volume__title-description--volume-eight"
            >
              About memification, offline and online trends brands use, and the
              right moment
            </motion.p>
          </div>
        </div>
        <div className="volume__content">
          <section className="volume__section volume__section--non-reverse volume__section--volume-eight-section-one">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-eight"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    How to conclude the story about trends if not by delving
                    into the essence of trends themselves?
                  </p>
                  <p>
                    Being trendy is undeniably one of the trends. Even when it
                    comes to the digital. Or dare we say it, especially when it
                    comes to the digital.
                  </p>
                  <p>Because everything becomes digital – sooner or later.</p>
                  <p>Trendception, so to speak.</p>
                  <p>
                    Even when dealing with a trend that didn’t originate in the
                    digital realm, it often finds its way into this sphere.
                  </p>
                  <p>How?</p>
                  <p>
                    Because we all – you, me, everyone – became a part of it.
                  </p>
                  <p>
                    Every trend truly becomes a trend only when it concludes –
                    on the internet.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Kako završiti priču o trendovima, ako ne – pričom o trendu
                    kao takvom.
                  </p>
                  <p>
                    Biti u trendu je svakako jedan od – trendova, čak i kada je
                    u pitanju digital. A naročito kada je u pitanju digital.
                  </p>
                  <p>Zato što pre ili kasnije sve postane digital.</p>
                  <p>Trendception, takoreći.</p>
                  <p>
                    Čak i kada je u pitanju trend koji nije nastao u digitalnom
                    svetu, on će vrlo često postati njen deo.
                  </p>
                  <p>Kako?</p>
                  <p>Tako što smo svi mi – mi, vi, oni – njegov deo.</p>
                  <p>
                    Zato što svaki trend zapravo postaje trend tek onda kada
                    završi – na internetu.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "70rem", height: "70rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_8_deco_1.json"
              }
            />
          </section>
          <section className="volume__section volume__section--reverse volume__section--volume-eight-section-two">
            <Embed
              motionProps={elementsMotionProps}
              type="horizontal"
              site="youtube"
              src="https://www.youtube.com/embed/BBIX9FG6kZ0?si=eDcXUSpNKWksv-v6&autoplay=1"
              title="Youtube video player"
              allowFullScreen={true}
              backgroundImage="/images/embed-bg/volume-eight/volume_8_embed_1.jpg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
            />
          </section>
          <section className="volume__section volume__section--non-reverse volume__section--volume-eight-section-three">
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-eight"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    Or, may we add, each trend becomes a trend only when a brand
                    hops onto it.
                  </p>
                  <p>
                    So, individuals, influencers, and everyone in between, when
                    a brand seizes the moment , it usually means the moment is
                    truly significant. If it involves transitioning from the
                    offline to the online world, it might seem even more
                    substantial.
                  </p>
                  <p>
                    Of course, it requires a keen eye. Perhaps a pair of keen
                    eyes. Or two pairs to clearly see all the advantages and
                    disadvantages of a specific trend. Because not every brand
                    fits every trend.
                  </p>
                  <p>
                    However, when it comes to trends, perfect timing is crucial.
                    Sensing the moment without rushing in on one side and not
                    arriving at the party too late on the other. Nobody likes
                    arriving too late.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Mi dodajemo – svaki trend postaje trend tek onda kada se ne
                    njega – nakači brend.
                  </p>
                  <p>
                    Dakle, okej pojedinci – i influenseri i neinfluenseri i oni
                    između – ali, kada brend iskoristi trenutak, to obično znači
                    da je trenutak zaista veliki. Ako se radi o transponovanju
                    iz offline sveta u online svet, onda se čini da je još veći.
                  </p>
                  <p>
                    Naravno, tu je potrebno oštro oko. Ili par oštrih očiju. Ili
                    dva para da jasno uvidi sve prednosti i mane za konkretan
                    brend. Jer nije ni svaki brend za svaki trend.
                  </p>
                  <p>
                    Osim toga, kada su u pitanju trendovi, jako je važno voditi
                    računa o tajmingu, odnosno jako je važno osetiti trenutak.
                    Ne zaletati se, sa jedne strane. I ne stići na zabavu
                    previše kasno. Niko ne voli da stiže previše kasno.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "70rem", height: "70rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_8_deco_2.json"
              }
            />
          </section>
          <section className="volume__section volume__section--volume-eight-section-four">
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7249114859349232942"
              title="Tiktok video player"
              backgroundImage="/images/embed-bg/volume-eight/volume_8_embed_2.jpg"
              allowFullScreen={true}
            />
            <Embed
              motionProps={elementsMotionProps}
              type="vertical"
              site="tiktok"
              src="https://www.tiktok.com/embed/7255416435743182122"
              title="Tiktok video player"
              allowFullScreen={true}
              backgroundImage="/images/embed-bg/volume-eight/volume_8_embed_3.jpg"
            />
          </section>
          <section
            ref={lastSection}
            className="volume__section volume__section--non-reverse volume__section--volume-eight-section-five"
          >
            <motion.div
              {...elementsMotionProps}
              className="volume__textbox volume__textbox--volume-eight"
            >
              {language === "en-US" ? (
                <>
                  <p>
                    Sometimes, even a single day can make a difference. Instead
                    of receiving positive comments like kudos to whoever runs
                    this, you might get ones based on you’ve bored us enough
                    with _____ (insert random name/concept).
                  </p>
                  <p>
                    Some trends are unfortunately short-lived, and identifying
                    them is challenging but possible (R. I. P. Threads).
                  </p>
                  <p>
                    So, take the leap when it comes to globally popular things.
                    Just make sure that the leap doesn’t last too long.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ponekad bi i jedan dan mogao da napravi razliku, pa biste
                    umesto onih pozitivnih komentara ispod objave koji počivaju
                    na rečenici svaka čast onome ko vodi ovo dobili one koji se
                    zasnivaju na e smorili ste više sa _____ (insert random
                    ime/pojam).
                  </p>
                  <p>
                    Neki trendovi su, takođe, nažalost, rođeni da traju jako
                    kratko. I njih je najteže, ali ipak moguće identifikovati
                    (R.I.P. Threads).
                  </p>
                  <p>
                    Zato, prvo skočite pa recite hop kada su u pitanju globalno
                    popularne stvari. Samo, naravno, neka taj skok ne traje
                    previše dugo.
                  </p>
                </>
              )}
            </motion.div>
            <Decoration
              motionProps={elementsMotionProps}
              style={{ width: "45.5rem", height: "49rem" }}
              path={
                "https://raw.githubusercontent.com/andrijaivkovic/digitaltrends2024json/main/volume_8_deco_3.json"
              }
            />
          </section>
        </div>
      </Volume>
    </>
  );
};

export default VolumeSeven;
